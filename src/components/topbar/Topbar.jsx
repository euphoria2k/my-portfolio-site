import "./topbar.scss";
import { ContactMail, Phone } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="leftSide">
          {/* anchor link back to top */}
          <a href="#intro" className="logo">
            Carmen.
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+1 (470) 827 6367</span>
          </div>
          <div className="itemContainer">
            <ContactMail className="icon" />
            <span>celyn.rei.ambrosia@gmail.com</span>
          </div>
        </div>
        <div className="rightSide">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
