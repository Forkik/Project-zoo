import React, { useContext } from "react";
import TariffFormAdd from "./TariffFormAdd";
import TariffItem from "./TariffItem";
import { AppContext } from "../../AppContext";

const images = ['ticket1.jpg', 'ticket2.jpg', 'ticket3.jpg', 'ticket4.jpg','ticket5.jpg', 'ticket6.jpg', 'ticket7.jpg', 'ticket8.jpg',];

function TariffPage({ tariffs, setTariffs }) {
  const { user } = useContext(AppContext);

  return (
    <div style={{ position: "relative" }}>
      <img src="/ocean.jpg" style={{ width: "100%" }} alt="" />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <h1 className="title fs-1 font-1" style={{ color: "white", textAlign: "center", marginTop: '9%' }}>Тарифы</h1>
        {user && user.isAdmin && (
          <TariffFormAdd tariffs={tariffs} setTariffs={setTariffs} />
        )}
        <div className="d-flex justify-content-center">
          {tariffs.map((tariff) =>(<TariffItem
              tariffs={tariffs}
              tariff={tariff}
              key={tariff.id}
              setTariffs={setTariffs}
            />
          ))}
        </div>
      </div>
      <div className="text-start w-100 background-tickets d-flex flex-row justify-content-between flex-wrap">
        <div
          className="px-5 mb-4 d-flex align-items-center justify-content-center"
          style={{ flex: "1 1 45%" }}
        >
          <div className="card rounded-0">
            <div className="card-body d-flex flex-column">
              <img src="/meerkat.jpg" className="img-fluid" alt="" />
              <h1 className="card-title text-center fs-4 my-3">
                  Наш сурикат по имени: Натусик Пупсик
              </h1>
              <div className="card-text text-center my-3">
              Сурикат из Урюпинска — это один из самых очаровательных и активных обитателей местного зоопарка. Его зовут Мурчик, и он представляет собой социальное животное, живущее в группах. Сурикат привлекает внимание посетителей своей игривостью и любопытством. Он обитает в просторном вольере, который максимально приближен к его естественной среде обитания, с возможностью копать и исследовать.
              </div>
              <button
                className="btn rounded-0 my-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center mt-5"
                onClick={() => navigate("/animals")}
              >
                Посмотреть{" "}
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-5 mb-4" style={{ flex: "1 1 45%" }}>
          <h1 className="card-title pt-5 color-text-white">
             FAQ: Почему зоопарк Урюпинска?
          </h1>
          <p className="card-text mt-5 pb-5 color-text-white">
          В Урюпинске зоопарк предлагает уникальную возможность увидеть множество животных, и в выходные дни цена на вход выше, чем в будние. Это связано с тем, что в выходные зоопарк привлекает больше посетителей, и для поддержания качества обслуживания и заботы о животных необходимо увеличить финансирование.
          </p>
          <p className="card-text mt-2 pb-5 color-text-white">
          Наш зоопарк славится разнообразием обитателей. У нас есть не только привычные для многих животные, такие как львы, тигры и медведи, но и редкие виды, которые сложно встретить в других местах. Мы гордимся тем, что можем предоставить посетителям возможность увидеть экзотических животных, таких как жирафы, зебры и попугаи.
          </p>
          <p className="card-text mt-2 pb-5 color-text-white">
          Каждое посещение зоопарка — это не только развлечение, но и возможность узнать больше о мире животных и важности их охраны. Мы надеемся, что каждый гость уйдет с новыми знаниями и положительными эмоциями!
          </p>
          <button
            className="btn btn-primary rounded-0"
            onClick={() => navigate("/animals")}
          >
            Посмотреть
          </button>
        </div>
      </div>
    </div>
  );
}

export default TariffPage;
