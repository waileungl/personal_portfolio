import Modal from "./Modal";

const PortfolioModal = ({ close, open }) => {
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div className="main" data-img-url="img/portfolio/4.jpg" />
        </div>
        <div className="portfolio_main_title">
          <h3>Delicious Apple</h3>
          <span>
            <a href="#">Detail</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>
            An apple is an edible fruit produced by an apple tree. Apple trees
            are cultivated worldwide and are the most widely grown species in
            the genus Malus. The tree originated in Central Asia, where its wild
            ancestor, Malus sieversii, is still found today.
          </p>
          <p>
            Apples grown from seed tend to be very different from those of the
            parents, and the resultant fruit frequently lack desired
            characteristics. Generally then, apple cultivars are propagated by
            clonal grafting onto rootstocks. Apple trees grown without
            rootstocks tend to be larger and much slower to fruit after
            planting.
          </p>
        </div>
        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/7.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/7.jpg"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/8.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/8.jpg"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/9.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/9.jpg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
