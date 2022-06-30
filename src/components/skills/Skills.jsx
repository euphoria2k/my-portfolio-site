import "./skills.scss";

export default function Skills() {
  const tile = [
    {
      id: "1",
      img: "./assets/react.png",
      text: "React",
    },
    {
      id: "2",
      img: "./assets/vue.png",
      text: "Vue",
    },
    {
      id: "3",
      img: "./assets/javascript.png",
      text: "JavaScript",
    },
    {
      id: "4",
      img: "./assets/typescript.png",
      text: "TypeScript",
    },
    {
      id: "5",
      img: "./assets/sass.png",
      text: "Sass",
    },
    {
      id: "6",
      img: "./assets/electronjs.png",
      text: "Electron.js",
    },
    {
      id: "7",
      img: "./assets/python.png",
      text: "Python",
    },
    {
      id: "8",
      img: "./assets/flask.png",
      text: "Flask",
    },
    {
      id: "9",
      img: "./assets/sql.png",
      text: "SQL",
    },
    {
      id: "10",
      img: "./assets/c.png",
      text: "C",
    },
    {
      id: "11",
      img: "./assets/cpp.png",
      text: "C++",
    },
    {
      id: "12",
      img: "./assets/java.png",
      text: "Java",
    },
    {
      id: "13",
      img: "./assets/word.png",
      text: "Word",
    },
    {
      id: "14",
      img: "./assets/excel.png",
      text: "Excel",
    },
    {
      id: "15",
      img: "./assets/powerpnt.png",
      text: "Powerpoint",
    },
    {
      id: "16",
      img: "./assets/jira.png",
      text: "Jira",
    },
    {
      id: "17",
      img: "./assets/confluence.png",
      text: "Confluence",
    },
    {
      id: "18",
      img: "./assets/git.png",
      text: "Git",
    },
    {
      id: "19",
      img: "./assets/photoshop.png",
      text: "Photoshop",
    },
    {
      id: "20",
      img: "./assets/illustrator.png",
      text: "Illustrator",
    },
    {
      id: "21",
      img: "./assets/xd.png",
      text: "Adobe XD",
    },
  ];

  return (
    <div className="skills" id="skills">
      <h1>My skills include:</h1>
      <div class="container">
        {tile.map((t) => (
          <div className="item">
            <img src={t.img} alt="" />
            <h3>{t.text}</h3>
          </div>
        ))}
      </div>
      <h2>... and much more!</h2>
    </div>
  );
}
