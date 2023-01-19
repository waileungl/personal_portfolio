import { Fragment } from "react";
import useClickOutside from "../../useClickOutside";

const Modal = ({ open, close, children }) => {
  let domNode = useClickOutside(() => {
    close();
  });
  return (
    <Fragment>
      <div className={`edrea_tm_modalbox ${open ? "opened" : ""}`}>
        <div className="box_inner" ref={domNode}>
          <div className="close">
            <a href="#" onClick={() => close()}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Modal;
