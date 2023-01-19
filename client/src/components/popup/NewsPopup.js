import Modal from "./Modal";

const NewsPopup = ({ data, open, close }) => {
  return (
    <Modal open={open} close={close}>
      <div className="news_popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data && data.img}
            style={{ backgroundImage: `url(${data && data.img})` }}
          />
        </div>
        <div className="news_main_title">
          <h3>{data && data.title}</h3>
          <span>
            <a href="#">{data && data.tag}</a>
          </span>
          <div />
        </div>
        <div className="text">
          {data && data.des && data.des.map((des, i) => <p key={i}>{des}</p>)}
        </div>
      </div>
    </Modal>
  );
};
export default NewsPopup;
