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
  const { colorChange, getColor } =
    colorContext;
  useEffect(() => {
    getColor("#4169e1");
  }, []);
  return (
    <div className={`edrea_tm_settings ${toggle ? "opened" : ""}`}>
      <div className="icon">
        <img className="svg" src="img/setting.svg" alt="" />
        <a className="link" href="#" onClick={() => setToggle(!toggle)} />
      </div>
      <div className="wrapper">
        <span className="title">Pick a color!</span>
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
      </div>
    </div>
  );
};
export default Settings;
