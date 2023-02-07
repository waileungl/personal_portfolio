import { Fragment, useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';
import Chat from './ChatRoom';

const Playground = () => {

  return (
    <Fragment>
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="AI-section-wrapper">
            <div className="AI-section-left">
              <Chat />
            </div>
            <div className="AI-section-right" id="my-element">
              <Spline scene="https://prod.spline.design/fV-EMqC0bztQiZ6g/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Playground;
