import "./projects.scss";
import {
  CodeRounded,
  BugReportRounded,
  ArticleRounded,
  GroupsRounded,
  ArrowForwardRounded,
  ArrowBackRounded,
} from "@mui/icons-material";
import { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      logo: "./assets/bonkulogo.jpg",
      title: "Web Developer (internship)",
      desc: "Revamped the admin panel website UI of a ridesharing mobile application and helped implement new useful features.",
      img: "./assets/bonku.png",
      date: "Sept 2020 - Dec 2020",
    },
    {
      id: "2",
      logo: "./assets/acnlogo.png",
      title: "SAFe Engineer Developer",
      desc: "Responsible for the creation of products by actively defining an overall approach in translating client requirements.",
      img: "./assets/depth.png",
      date: "Feb 2021 - Apr 2021",
    },
    {
      id: "3",
      logo: "./assets/acnlogo.png",
      title: "Business Analyst",
      desc: "Collaborated with clients, designers, developers, and other analysts to translate client requirements into new features for the client's admin panel site.",
      img: "./assets/conf1.jpg",
      date: "Apr 2021 - Nov 2021",
    },
    {
      id: "4",
      logo: "./assets/acnlogo.png",
      title: "Business Analyst",
      desc: "Collaborated with clients, designers, developers, and other analysts to translate client requirements into the final end product: a mobile banking call center admin panel site",
      img: "./assets/buzz.png",
      date: "Nov 2021 - Mar 2022",
    },
    {
      id: "5",
      logo: "./assets/acnlogo.png",
      title: "Data Migration Analyst",
      desc: "Responsible for data cleansing, DQA business scenario writeup, SQL scripting and meeting with clients to understand data migration requirements and needs.",
      img: "./assets/cis.png",
      date: "April 2022 - July 2022",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="projects" id="projects">
      <h1>Project & Work History</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="items">
              <div className="leftSide">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.logo} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.date}</span>
                </div>
              </div>
              <div className="rightSide">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackRounded
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardRounded
        className="arrow right"
        onClick={() => handleClick("")}
      />
    </div>
  );
}
