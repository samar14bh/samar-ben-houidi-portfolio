import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">samar ben houidi </a>
      <ul className="nav-links">
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
