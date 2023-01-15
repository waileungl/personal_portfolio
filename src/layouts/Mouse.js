import { Fragment } from "react";


//show the mouse effect
const Mouse = () => {
  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Mouse;
