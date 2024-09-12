import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex align-items-center">
          <a
            onClick={() => navigate("/")}
            className="navbar-brand d-flex align-items-center text-success fs-3 nav-link"
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
            <a onClick={() => navigate("/")} className="nav-link mx-3 fs-5">
              На главную
            </a>
            <a
              onClick={() => navigate("/animals")}
              className="nav-link mx-3 fs-5"
            >
              Наши Животные
            </a>
            <a
              onClick={() => navigate("/tariffs")}
              className="nav-link mx-3 fs-5"
            >
              Тарифы
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
