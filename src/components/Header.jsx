import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>A32 Meats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
