import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

const projects = {
  fastlane: {
    title: "Fastlane Redesign",
    subtitle: "DeFi Trading Terminal",
    accent: "#7C3AED",
  },
  blocknads: {
    title: "BlockNads",
    subtitle: "Ad Blocker for Web3",
    accent: "#E63946",
  },
  rigit: {
    title: "RigIt",
    subtitle: "Solana Block Explorer",
    accent: "#BEFE46",
  },
  whisper: {
    title: "Whisper",
    subtitle: "Decentralized Infrastructure",
    accent: "#7C3AED",
  },
  beradrome: {
    title: "Beradrome",
    subtitle: "DeFi Liquidity Protocol",
    accent: "#3B82F6",
  },
  fedixlabs: {
    title: "Fedix Labs",
    subtitle: "Web3 Innovation Studio",
    accent: "#F59E0B",
  },
  "blocknads-mint": {
    title: "BlockNads Mint",
    subtitle: "NFT Minting Experience",
    accent: "#E63946",
  },
};

const fallback = {
  title: "Ben Sage",
  subtitle: "Web3 Product Designer",
  accent: "#FAFAFA",
};

const staticOgImages = {
  fastlane: "/images/fastlane-og.png",
};

export default function handler(req) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("project");

  if (staticOgImages[slug]) {
    return Response.redirect(new URL(staticOgImages[slug], url.origin), 302);
  }

  const project = projects[slug] || fallback;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#030303",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              background: project.accent,
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              color: "rgba(250,250,250,0.5)",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            bensage.design
          </span>
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#FAFAFA",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: 300,
            color: project.accent,
          }}
        >
          {project.subtitle}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
