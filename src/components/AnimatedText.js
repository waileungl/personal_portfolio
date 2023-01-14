import { useEffect, useState } from "react";

const homeData = {
  skills: ["Designer", "Developer", "Freelancer"],
};
const AnimatedText = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.skills.length - 1 ? text + 1 : 0);
      console.log(homeData.skills.length - 1, text);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <span className="cd-headline rotate-1">
      <span className="blc">Creative </span>
      <span className="cd-words-wrapper">
        {homeData.skills.map((skill, i) => (
          <b key={i} className={text === i ? "is-visible" : "is-hidden"}>
            {skill}
          </b>
        ))}
      </span>
    </span>
  );
};
export default AnimatedText;
