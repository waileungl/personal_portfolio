import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

//
const homeData = {
  firstName: "William",
  lastName: "Liu",
  skills: ["Designer", "Developer", "Freelancer"],
};

const Home = () => {
  const navContext = useContext(context);
  const { changeNav } = navContext;

  return (
    <>
      <div className="edrea_tm_section animated" id="home">
        <div className="section_inner">
          <div className="edrea_tm_home">
            <h3 className="name">
              {homeData.firstName}{" "}
              <span className="coloring">{homeData.lastName}</span>
            </h3>
            <h3 className="job">
              <AnimatedText />
            </h3>
            <div className="edrea_tm_button transition_link">
              <a href="#news" onClick={() => changeNav("portfolio")}>
                Meet Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
