import "./portfolio.scss";
import List from "../portfolioList/List";
import { useState, useEffect } from "react";
import {
  programmingPortfolio,
  uiuxPortfolio,
  businessAnalysis,
  dataMigration,
} from "../../data";

export default function Portfolio() {
  //set default selected
  const [selected, setSelected] = useState("item1");
  //set state of the imported data from data.js for portfolio
  const [data, setData] = useState([]);

  const list = [
    {
      id: "item1",
      title: "WebDev/Programming",
    },
    {
      id: "item2",
      title: "UI/UX",
    },
    {
      id: "item3",
      title: "Business Analysis",
    },
    {
      id: "item4",
      title: "Data Migration",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "item1":
        setData(programmingPortfolio);
        break;
      case "item2":
        setData(uiuxPortfolio);
        break;
      case "item3":
        setData(businessAnalysis);
        break;
      case "item4":
        setData(dataMigration);
        break;
      default:
        setData(programmingPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <ul>
        {list.map((item) => (
          <List
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
