import Typed from "react-typed";


export default function Header() {
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
        <a href="#" className="btn-main-offer">
          контакты
        </a>
       
      </div>
    </div>
  );
}
