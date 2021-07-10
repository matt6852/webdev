import author from "../assets/me.jpg"

export default function About() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo_wrap mb-5">
              <img src={author} className ="profile-img" alt="author" />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className ="about-heading">Обо мне</h1>
            <p>
              Меня Зовут Сергей. Я Разработчик JS React. Я Действительно Люблю
              Создать Что-То Красивое И Завораживающее. Мне Нравится Делать
              Приложения И Веб-Сайты Также Я Увлечен Новыми Технологиями.
              Пожалуйста, Наслаждайтесь Моим Маленьким Сайтом, Здесь Вы Можете
              Найти Все Необходимое Информация И Разные Сайты Для Вас!
            </p>
            <p></p>
          </div>
        </div>
      </div>
    );
}
