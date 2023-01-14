import { useContext, useEffect, useState } from "react";
import { context } from "../context/context";

const colors = [
  "#4169e1",
  "#66B95C",
  "#ff9800",
  "#ff5e94",
  "#fa5b0f",
  "#f39977",
  "#9200ee",
  "#00D4BD",
  "#5e9e9f",
  "#EB4A4C",
  "#666d41",
  "#fe0000",
];

const Settings = () => {
  const [toggle, setToggle] = useState(false);
  const colorContext = useContext(context);
  const { colorChange, getColor, changeCursor, getMagicCursor, megicCursor } =
    colorContext;
  useEffect(() => {
    getColor("#eb4a4c");
    getMagicCursor("show");
  }, []);
  return (
    <div className={`edrea_tm_settings ${toggle ? "opened" : ""}`}>
      <div className="icon">
        <img className="svg" src="img/setting.svg" alt="" />
        <a className="link" href="#" onClick={() => setToggle(!toggle)} />
      </div>
      <div className="wrapper">
        <span className="title">Unlimited Colors</span>
        <ul className="colors">
          {colors.map((color, i) => (
            <li key={i}>
              <a
                key={i}
                href="#"
                data-color={color}
                style={{ backgroundColor: color, marginRight: `5px` }}
                onClick={() => colorChange(color)}
              />
            </li>
          ))}
        </ul>
        <span className="title">Magic Cursor</span>
        <ul className="cursor">
          <li>
            <a
              className={`${megicCursor == "show" ? "showme" : ""} show`}
              onClick={() => changeCursor("show")}
              href="#"
            />
          </li>
          <li>
            <a
              className={`${megicCursor != "show" ? "showme" : "hide"}`}
              href="#"
              onClick={() => changeCursor("hide")}
            >
              <img className="svg" src="img/arrow.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Settings;
