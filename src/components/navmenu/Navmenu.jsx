import "./navmenu.scss";

export default function Navmenu({ menuOpen, setMenuOpen }) {
  return (
    <>
      <div className={"navmenu " + (menuOpen && "active")}>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#intro">Home</a>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <a href="#projects">Projects</a>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <a href="#skills">Skills</a>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
