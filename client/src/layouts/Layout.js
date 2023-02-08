import Head from "next/head";
import { useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import State from "../context/context";
import { dataImage, imgToSVG, preloader } from "../utilits";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import PreLoader from "./PreLoader";
import Settings from "./Settings";
import Spline from '@splinetool/react-spline';

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
    preloader();
    imgToSVG();
  }, []);

  return (
    <State>
      <Head>
        <link rel="icon" type="image/png" href="img/will_favicon.png" />
        <title>William Liu</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div
        className="edrea_tm_all_wrap"
        data-enter="fadeInUp"
        data-exit=""
      >
        {/* WAVE DOTS */}
        {/* <div className="waves" /> */}
        {/* <video autoPlay loop muted playsInline className="waves">
          <source src={background} type="video/mp4" />
        </video> */}
        <Spline scene="https://prod.spline.design/n6YMKOSoMgx76tXG/scene.splinecode" className="waves" />
        {/* WAVE DOTS */}
        {/* SETTINGS */}
        <Settings />
        {/* /SETTINGS */}
        {/* MOBILE MENU */}
        <MobileHeader />
        {/* /MOBILE MENU */}
        {/* HEADER */}
        <Header />
        {/* /HEADER */}
        {/* CONTENT */}
        <div className="edrea_tm_content">{children}</div>
        {/* /CONTENT */}
      </div>
    </State>
  );
};
export default Layout;
