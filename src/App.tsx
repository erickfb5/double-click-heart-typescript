import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App: React.FC = () => {
const [timesClicked, setTimesClicked] = useState<number>(0);

const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
const clickTime: number = e.timeStamp;
const lastClickTime: number = parseInt(e.currentTarget.getAttribute("data-clickTime") || "0");

if (clickTime - lastClickTime < 800) {
  createHeart(e);
  e.currentTarget.setAttribute("data-clickTime", "0");
} else {
  e.currentTarget.setAttribute("data-clickTime", `${clickTime}`);
}
};

const createHeart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
const heart: HTMLElement = document.createElement("i");
heart.classList.add("fas", "fa-heart");

const rect: DOMRect = e.currentTarget.getBoundingClientRect();
const xInside: number = e.clientX - rect.left;
const yInside: number = e.clientY - rect.top;

heart.style.top = `${yInside}px`;
heart.style.left = `${xInside}px`;

e.currentTarget.appendChild(heart);

setTimesClicked((prevTimesClicked: number) => prevTimesClicked + 1);

setTimeout(() => heart.remove(), 1000);
};

return (
<div className="container">
<h3>
Double click on the image to <FontAwesomeIcon icon={faHeart} />
</h3>
<small>You liked it {timesClicked} times</small>
<div className="loveMe" onClick={handleClick} />
</div>
);
};

export default App;



