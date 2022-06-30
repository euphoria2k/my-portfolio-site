import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="leftSide">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="rightSide">
        <h2>What are you waiting for? Contact me now or read more about me!</h2>
        <form>
          <a href="https://www.linkedin.com/in/carmen-nera/overlay/1635495463869/single-media-viewer/?type=DOCUMENT&profileId=ACoAADOXVHcBROS2ZuwSVfayKNmP-s8qxXD1CU8">
            <button className="resume" type="button">
              View Resume
            </button>
          </a>
          <a href="https://www.linkedin.com/in/carmen-nera/">
            <button className="linkedin" type="button">
              LinkedIn
            </button>
          </a>
          <a href="https://dribbble.com/carmen_ambrosia">
            <button className="dribbble" type="button">
              Dribbble
            </button>
          </a>
        </form>
      </div>
    </div>
  );
}
