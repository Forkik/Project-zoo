import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex align-items-center nowrap">
          <a
            onClick={() => navigate("/")}
            className="navbar-brand d-flex align-items-center text-success fs-4 nav-link"
          >
            <img
              src="./zoo.png"
              alt="Logo"
              width="7%"
              height="7%"
              className="d-inline-block align-text-top mx-3"
            />
            <span className="ms-2 ">Урюпинский Зоопарк</span>
          </a>
          <div className="d-flex align-items-center">
            <a onClick={() => navigate("/")} className="nav-link mx-3 fs-6">
              На главную
            </a>
            <a
              onClick={() => navigate("/animals")}
              className="nav-link mx-3 fs-6"
            >
              Наши Животные
            </a>
            <a
              onClick={() => navigate("/tariffs")}
              className="nav-link mx-3 fs-6"
            >
              Тарифы
            </a>
            {!user ? (
              <>
                <a
                  onClick={() => navigate("/authorization")}
                  className="nav-link mx-3 fs-6"
                >
                  Войти
                </a>
                <a
                  onClick={() => navigate("/registration")}
                  className="nav-link mx-3 fs-6"
                >
                  Регистрация
                </a>
              </>
            ) : (
              <a
                onClick={() => navigate("/logout")}
                className="nav-link mx-3 fs-6"
              >
                Выйти
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
