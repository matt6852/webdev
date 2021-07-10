import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          W&D
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#FFF" }}
          ></FontAwesomeIcon>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Главная
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Обо мне
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                услуги
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                опыт
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                проеткы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
