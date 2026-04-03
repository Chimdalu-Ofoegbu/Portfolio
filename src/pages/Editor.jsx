import { useState, useRef, useEffect, useCallback, Component } from "react";
import globalsRaw from "../styles/globals.css?raw";
import landingRaw from "../styles/landing.css?raw";
import casestudyRaw from "../styles/casestudy.css?raw";
import lightboxRaw from "../styles/lightbox.css?raw";
import resumeRaw from "../styles/resume.css?raw";
import "../styles/editor.css";

class EditorErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <pre style={{ color: "#ff6b6b", background: "#111", padding: 32, margin: 0, minHeight: "100vh", fontFamily: "monospace", fontSize: 14, whiteSpace: "pre-wrap" }}>
          EDITOR ERROR:{"\n\n"}{this.state.error.message}{"\n\n"}{this.state.error.stack}
        </pre>
      );
    }
    return this.props.children;
  }
}

const CSS_FILES = {
  "globals.css": { label: "Global Tokens", raw: globalsRaw },
  "landing.css": { label: "Landing", raw: landingRaw },
  "casestudy.css": { label: "Case Study", raw: casestudyRaw },
  "lightbox.css": { label: "Lightbox", raw: lightboxRaw },
  "resume.css": { label: "Resume", raw: resumeRaw },
};

const PREVIEW_ROUTES = [
  { label: "Landing", path: "/" },
  { label: "BlockNads", path: "/spotlight/blocknads" },
  { label: "Resume", path: "/resume" },
];

export default function EditorWithBoundary() {
  return (
    <EditorErrorBoundary>
      <EditorInner />
    </EditorErrorBoundary>
  );
}

function EditorInner() {
  const [activeFile, setActiveFile] = useState("landing.css");
  const [files, setFiles] = useState({});
  const [previewRoute, setPreviewRoute] = useState("/");
  const [splitX, setSplitX] = useState(42);
  const [saving, setSaving] = useState(false);
  const iframeRef = useRef(null);
  const textareaRef = useRef(null);
  const lineNumRef = useRef(null);
  const dragging = useRef(false);

  // Load CSS from raw imports on mount
  useEffect(() => {
    const loaded = {};
    Object.entries(CSS_FILES).forEach(([key, { raw }]) => {
      const saved = localStorage.getItem(`editor:${key}`);
      loaded[key] = saved || raw;
    });
    setFiles(loaded);
  }, []);

  // Inject CSS into iframe (only after it's loaded)
  const iframeReady = useRef(false);

  const injectCSS = useCallback((overrideFiles) => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument?.head) return;
    const doc = iframe.contentDocument;
    const data = overrideFiles || files;

    Object.entries(data).forEach(([key, css]) => {
      let style = doc.getElementById("editor-" + key);
      if (!style) {
        style = doc.createElement("style");
        style.id = "editor-" + key;
        style.setAttribute("data-editor", "true");
        doc.head.appendChild(style);
      }
      style.textContent = css;
    });
  }, [files]);

  // Re-inject when files change, but only if iframe is ready
  useEffect(() => {
    if (iframeReady.current) injectCSS();
  }, [files, injectCSS]);

  const handleIframeLoad = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument?.head) return;
    const doc = iframe.contentDocument;
    // Disable Vite-injected styles
    Array.from(doc.querySelectorAll("style:not([data-editor])")).forEach(
      (el) => { el.disabled = true; }
    );
    iframeReady.current = true;
    injectCSS();
  }, [injectCSS]);

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setFiles((prev) => ({ ...prev, [activeFile]: value }));
    setSaving(true);
    clearTimeout(handleCodeChange._timer);
    handleCodeChange._timer = setTimeout(() => {
      localStorage.setItem("editor:" + activeFile, value);
      setSaving(false);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = textareaRef.current;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const value = ta.value;
      const newValue = value.substring(0, start) + "  " + value.substring(end);
      setFiles((prev) => ({ ...prev, [activeFile]: newValue }));
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    }
  };

  // Sync line numbers scroll with textarea
  const handleScroll = () => {
    if (lineNumRef.current && textareaRef.current) {
      lineNumRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const resetFile = () => {
    setFiles((prev) => ({ ...prev, [activeFile]: CSS_FILES[activeFile].raw }));
    localStorage.removeItem("editor:" + activeFile);
  };

  const resetAll = () => {
    Object.keys(CSS_FILES).forEach((key) =>
      localStorage.removeItem("editor:" + key)
    );
    window.location.reload();
  };

  const refreshPreview = () => {
    if (iframeRef.current) iframeRef.current.src = iframeRef.current.src;
  };

  // Drag splitter
  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const pct = (e.clientX / window.innerWidth) * 100;
      setSplitX(Math.max(20, Math.min(70, pct)));
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const code = files[activeFile] || "";
  const lineCount = code.split("\n").length;

  return (
    <div className="editor-root">
      {/* Editor Panel */}
      <div className="editor-panel" style={{ width: splitX + "%" }}>
        <div className="editor-toolbar">
          <div className="editor-toolbar-left">
            <span className="editor-toolbar-title">EDITOR</span>
            <span className="editor-save-status">
              {saving ? "Saving..." : "Saved"}
            </span>
          </div>
          <div className="editor-toolbar-right">
            <button className="editor-tool-btn" onClick={resetFile}>
              Reset File
            </button>
            <button className="editor-tool-btn" onClick={resetAll}>
              Reset All
            </button>
          </div>
        </div>

        <div className="editor-file-tabs">
          {Object.entries(CSS_FILES).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setActiveFile(key)}
              className={"editor-file-tab" + (activeFile === key ? " active" : "")}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="editor-code-wrap">
          <div className="editor-line-numbers" ref={lineNumRef}>
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i} className="editor-line-num">{i + 1}</div>
            ))}
          </div>
          <textarea
            ref={textareaRef}
            className="editor-textarea"
            value={code}
            onChange={handleCodeChange}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            spellCheck={false}
          />
        </div>
      </div>

      {/* Splitter */}
      <div
        className="editor-splitter"
        style={{ left: splitX + "%" }}
        onMouseDown={() => { dragging.current = true; }}
      />

      {/* Preview Panel */}
      <div
        className="editor-preview-panel"
        style={{ left: splitX + "%", width: (100 - splitX) + "%" }}
      >
        <div className="editor-preview-toolbar">
          <div className="editor-route-tabs">
            {PREVIEW_ROUTES.map((r) => (
              <button
                key={r.path}
                onClick={() => setPreviewRoute(r.path)}
                className={"editor-route-tab" + (previewRoute === r.path ? " active" : "")}
              >
                {r.label}
              </button>
            ))}
          </div>
          <button className="editor-tool-btn" onClick={refreshPreview}>
            Refresh
          </button>
        </div>

        <iframe
          ref={iframeRef}
          src={previewRoute}
          onLoad={handleIframeLoad}
          className="editor-iframe"
          title="Preview"
        />
      </div>
    </div>
  );
}
