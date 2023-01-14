import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";

const data = [
  {
    title: "Building brands through customer service",
    img: "img/news/1.jpg",
    tag: "Branding",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Unstoppable Jamstack and Gatsby opportunity",
    img: "img/news/2.jpg",
    tag: "Design",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Electron framework adds encryption API",
    img: "img/news/3.jpg",
    tag: "Media",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Sentry for JavaScript monitors release health",
    img: "img/news/4.jpg",
    tag: "Technology",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Five reasons to begin a Packt subscription",
    img: "img/news/5.jpg",
    tag: "Lifestyle",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Why developers are so divided over WordPress",
    img: "img/news/6.jpg",
    tag: "Modern",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

const News = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Latest <span className="coloring">News</span>
              </h3>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/4-3.jpg" alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
