import { Fragment, useState } from "react";
import Spline from '@splinetool/react-spline';
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="AI-section-wrapper">
            <div className="AI-section-left">
              AI tools here
            </div>
            <div className="AI-section-right">
              <Spline scene="https://prod.spline.design/fV-EMqC0bztQiZ6g/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
