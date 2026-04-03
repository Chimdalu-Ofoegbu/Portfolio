import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-brand">
        bensage.design
      </Link>
    </header>
  );
}
