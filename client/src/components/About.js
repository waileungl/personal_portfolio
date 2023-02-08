import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "William",
  lastName: "Liu",
  bithday: "06.17.1996",
  address: "Bay Area, California, US",
  phn: "+1 808 302 8656",
  email: "wliu9606@gmail.com",
  linkedin: "linkedin.com/in/willliu06",
  serviceLists: [
    "Web Application Development",
    "Mobile Application Development",
    "Database Development and Management",
    "UI/UX Design",
    "Maintenance and Support",
  ],
  programming: [
    {category: "Program Languages",
    skills: [
      { name: "JavaScript", value: "95" },
      { name: "Python", value: "90" },
      { name: "Java", value: "80" },
      { name: "SQL", value: "95" },
      { name: "HTML", value: "100" },
      { name: "CSS", value: "100" },
    ]},
    {category: "Frameworks",
    skills: [
      { name: "React", value: "95" },
      { name: "Next.js", value: "85" },
      { name: "Express.js", value: "95" },
      { name: "Flask", value: "90" },
      { name: "Bootstrap", value: "90" },
      { name: "Tailwind", value: "90" },
    ]},
    {category: "Databases",
    skills: [
      { name: "MongoDB", value: "90" },
      { name: "MySQL", value: "95" },
      { name: "Firebase", value: "80" },
    ]},
    {category: "Server Management",
    skills: [
      { name: "AWS EC2", value: "90" },
      { name: "Nginx", value: "85" },
      { name: "Git", value: "90" },
      { name: "Gunicorn", value: "85" },
      { name: "PM2", value: "85" },
    ]},
  ],
  language: [
    { name: "English", value: "95" },
    { name: "Chinese", value: "95" },
  ],
  education: [
    { year: "2022", unv: "Coding Dojo", degree: "Software Development Certificate" },
    { year: "2015 - 2019", unv: "Taylor's University", degree: "Bachelor Degree" },
  ],
  working: [
    { year: "2022 - current", company: "Freelance", deg: "Full-stack developer" },
    { year: "2020 - 2022", company: "Johnson & Johnson", deg: "Clinical Engineer" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/about/profile_pic.jpg" alt="" />
                <div className="main" data-img-url="img/about/profile_pic.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                Hi, I'm <span>William Liu</span> and I'm a coding enthusiast with a deep love for computing and solving complex problems. With 3 years of experience in the healthcare industry.<br></br>
                As a freelance Full-stack Developer, I am driven by my passion for creating innovative solutions that improve the lives of others and bring value to my clients. I am committed to delivering high-quality work that exceeds expectations and pushes the boundaries of what is possible. Let's work together to create impactful products and bring your ideas to life!
                </p>
              </div>
              <div className="edrea_tm_button button_bounce_animation">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
