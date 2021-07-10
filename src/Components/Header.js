import Typed from "react-typed";
import { headerArr } from "../data";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [text, setText] = useState(headerArr);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (index < text.length) {
        setIndex((old) => {
          return old + 1;
        });
      }
      if (index === text.length - 1) {
        setIndex((old) => {
          return 0;
        });
      }
    }, 2000);
    return () => clearInterval(timeout);
  }, [index]);
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>web development and Disign </h1>
        <Typed
          className="typed_text"
          strings={[
            "Привет меня зовут Сергей",
            "Я Web Developer",
            "Сделаю для вас лучшие сайты!",
            "Нажми на контакты и свяжись со мной сейсчас ❗",
          ]}
          loop
          typeSpeed={40}
          backSpeed={50}
        ></Typed>
        <div className="mob_info">
          {/* <p className={`${index===}`}>{text[index]}</p> */}
          {text.map((item,i)=> <p key = {i} className ={index === i ? "text_info active" :" text_info"}>{item}</p>)}
        </div>
        <a href="#" className="btn-main-offer">
          контакты
        </a>
      </div>
    </div>
  );
}
