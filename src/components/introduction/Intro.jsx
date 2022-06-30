import "./intro.scss";
import { ExpandMore } from "@mui/icons-material";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Web Developer", "Business Analyst", "UI/UX Designer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="leftSide">
        <div className="imgContainer">
          <img src="./assets/profile2.png" alt="" />
        </div>
      </div>
      <div className="rightSide">
        <div className="wrapper">
          <h2>Hello, I am</h2>
          <h1>
            Carmen Nera <span>(formerly Keith)</span>
          </h1>
          <h3>
            Your next <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMore className="chevron-down" />
        </a>
      </div>
    </div>
  );
}
