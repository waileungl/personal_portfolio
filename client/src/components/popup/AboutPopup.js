import { useContext, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../../context/context";
import { testimonialSlider } from "../../sliderProps";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";

const AboutPopup = ({ open, close, aboutData }) => {
  const colorContext = useContext(context);
  const { color } = colorContext;
  const [skillSelected, setSkillSelected] = useState(null);

  const toggle = (i) => {
    if (skillSelected === i) {
      return setSkillSelected(null)
    }
    setSkillSelected(i)
  }

  return (
    <Modal open={open} close={close}>
      <div className="about_popup_details">
        <div className="left">
          <div className="left_inner">
            <div className="author">
              <div className="avatar_image">
                <img src="img/about/prof_pic.jpg" alt="will's happy face" />
                <div className="main" data-img-url="img/about/prof_pic.jpg" />
              </div>
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-user" />
                    <span>
                      {aboutData.firstName} {aboutData.lastName}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-calendar" />
                    <span>{aboutData.bithday}</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Bay%20area%2C%20CA%2C%20USA" target="_blank" className="href_location">
                        {aboutData.address}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="tel:+18083028656">{aboutData.phn}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href={`mailto:${aboutData.email}`}>
                        {aboutData.email}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-linkedin-squared" />
                    <span>
                      <a href={`https://${aboutData.linkedin}`} target="_blank">{aboutData.linkedin}</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
              <a href="/William_Liu_Resume.pdf" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_inner">
            <div className="biography">
              <div className="about_title">
                <h3>
                  <span>
                    About <span className="coloring">Me</span>
                  </span>
                </h3>
              </div>
              <div className="text">
                <p>
                  Hi, I&apos;m <span>William Liu</span> and I&apos;m a coding enthusiast with a deep love for computing and solving complex problems. With 3 years of experience in the healthcare industry, I&apos;ve honed my skills in Full-stack Development and have a strong understanding of the software development life cycle, object-oriented programming, database design, and agile methodologies. As a freelance Full-stack Developer, I am driven by my passion for creating innovative solutions that improve the lives of others and bring value to my clients. I am committed to delivering high-quality work that exceeds expectations and pushes the boundaries of what is possible. Let&apos;s work together to create impactful solutions and bring your ideas to life!
                </p>
              </div>
            </div>
            <div className="service">
              <div className="about_title">
                <h3>
                  <span>
                    Service <span className="coloring">Lists</span>
                  </span>
                </h3>
              </div>
              <div className="list program_skill">
                <ul>
                  {aboutData.serviceLists &&
                    aboutData.serviceLists.map((service, i) => (
                      <li key={i}>
                        <i className="icon-right-dir" />
                        <span>{service}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="prog_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Programming <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="program_skill_wrapper" >
                {aboutData && aboutData.programming.map((item, i) => (
                  <div className="program_skill_category" key={i}>
                    <div className="program_skill_category_title" onClick={() => toggle(i)}>
                      <h6>{item.category}</h6>
                      <span>{skillSelected === i ? '-' : '+'}</span>
                    </div>
                    <div className={skillSelected === i ? "oki_progress show" : "oki_progress"}>
                      {item.skills.map((programming, j) => (
                        <div
                          key={j}
                          className="progress_inner skillsInner___"
                          data-value={95}
                        >
                          <span>
                            <span className="label">{programming.name}</span>
                            <span
                              className="number"
                              style={{ right: `${100 - programming.value}%` }}
                            >
                              {programming.value}%
                            </span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: `${programming.value}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lang_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Language <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="circular_progress_bar">
                <ul>
                  {aboutData &&
                    aboutData.language &&
                    aboutData.language.map((language, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="myCircle" data-value="0.95">
                            <CircularProgressbar
                              value={language.value}
                              text={`${language.value}%`}
                              strokeWidth={2}
                              styles={buildStyles({
                                // Colors
                                pathColor: color,
                              })}
                            />
                          </div>
                          <div className="title">
                            <span>{language.name}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Working <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.working &&
                    aboutData.working.map((work, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{work.year}</span>
                          </div>
                          <div className="place">
                            <h3>{work.company}</h3>
                            <span>{work.deg}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Education <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.education &&
                    aboutData.education.map((edu, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{edu.year}</span>
                          </div>
                          <div className="place">
                            <h3>{edu.unv}</h3>
                            <span>{edu.degree}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* <div className="partners">
              <div className="about_title">
                <h3>
                  <span>
                    My <span className="coloring">Partners</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.partnersLogos &&
                    aboutData.partnersLogos.map((logo, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <img src={logo} alt="" />
                          <a className="cavani_tm_full_link" href="#" />
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div> */}
            {/* <div className="testimonial">
              <div className="about_title">
                <h3>
                  <span>
                    Clients <span className="coloring">Feedback</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <Swiper {...testimonialSlider} className="owl-carousel">
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          Beautiful minimalist design and great, fast response
                          with support. Highly recommend. Thanks Marketify!
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/1.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Alexander Walker</h3>
                          <span>Graphic Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          These people really know what they are doing! Great
                          customer support availability and supperb kindness.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/2.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Armin Van Buuren</h3>
                          <span>Content Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          I had a little problem and the support was just
                          awesome to quickly solve the situation. And keep going
                          on.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/3.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Baraka Clinton</h3>
                          <span>English Teacher</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
