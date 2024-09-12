import React from "react";
import { useNavigate } from "react-router-dom";
function HomePage({}) {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img src="./public/turtle.jpg" className="img-fluid" alt="" />
        <div className="overlay-text">
          <p className=" fs-3">
            Исследуйте удивительный мир Урюпинского Зоопарка
          </p>
          <h1 className="text fs-1 font-1">
            Добро пожаловать в Урюпинский Зоопарк
          </h1>
          <button
            className="btn btn-primary rounded-0 text-center d-flex justify-content-center align-items-center btn-center mt-5"
            onClick={() => navigate("/tariffs")}
          >
            Приобрести билеты
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
      <div className="text-start w-100 background d-flex flex-row justify-content-between flex-wrap">
        <div className="px-5 mb-4" style={{ flex: "1 1 45%" }}>
          <h1 className="card-title pt-5 color-text-white">
            Посмотрите какие животные в нашем зоопарке
          </h1>
          <p className="card-text mt-5 pb-5 color-text-white">
            Зоопарк в Урюпинске — это уникальное место, где можно увидеть
            разнообразие животных и насладиться природой. Он был основан с целью
            образовательной работы и сохранения редких видов животных.
            Посетители могут познакомиться с животными, такими как львы, тигры,
            медведи и экзотические птицы.
          </p>
          <p className="card-text mt-2 pb-5 color-text-white">
            Зоопарк также активно занимается воспитанием любви к природе у детей
            и взрослых, проводя экскурсии и мастер-классы. Это идеальное место
            для семейного отдыха, где можно не только развлечься, но и узнать
            много нового о мире животных.
          </p>
          <p className="card-text mt-2 pb-5 color-text-white">
            Еще один интересный аспект зоопарка — это его участие в программах
            по защите окружающей среды. Здесь проводятся акции по сбору средств
            на охрану редких видов и восстановление их естественной среды
            обитания. Зоопарк в Урюпинске — это не просто развлечение, но и
            важный шаг к сохранению природы.
          </p>
          {/* Остальные параграфы */}
          <button
            className="btn btn-primary rounded-0"
            onClick={() => navigate("/animals")}
          >
            Посмотреть
          </button>
        </div>
        <div
          className="px-5 mb-4 d-flex align-items-center justify-content-center"
          style={{ flex: "1 1 45%" }}
        >
          <div className="card rounded-0">
            <div className="card-body d-flex flex-column">
              <img src="./public/tiger.jpg" className="img-fluid" alt="" />
              <h1 className="card-title text-center fs-4 my-3">
                Наш тигр по имени: Пуся Джуся
              </h1>
              <div className="card-text text-center my-3">
                Тигр из Урюпинска — это один из самых ярких и запоминающихся
                обитателей местного зоопарка. Его зовут Тигр, и он является
                представителем амурского тигра, одного из самых редких и
                угрожаемых видов. Тигр привлекает внимание посетителей своим
                величественным внешним видом и грациозными движениями. Он живет
                в просторном вольере, который максимально приближен к его
                естественной среде обитания. В зоопарке заботятся о его здоровье
                и благополучии, обеспечивая правильное питание и регулярные
                ветеринарные осмотры.
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
      </div>
      <div style={{ margin: "0", padding: "0", width: "100%" }}>
        <div className="container-fluid h-100">
          <p className="my-5 text-center" style={{ letterSpacing: "0.01px" }}>
            ___________________________________________________________________________________________________________________________________________
          </p>
          <h1 className="title mb-5 text-center">Просмотреть наших животных</h1>
          <div
            className="d-flex row mb-5"
            style={{
              gap: "0",
              justifyContent: "space-between", // Распределение по всей ширине
            }}
          >
            <div className="col-md-2 top " style={{ padding: "0", flex: "1" }}>
              <img
                src="collar1.jpg"
                alt="Collar 1"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-2" style={{ padding: "0", flex: "1" }}>
              <img
                src="collar2.jpg"
                alt="Collar 2"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-2 top" style={{ padding: "0", flex: "1" }}>
              <img
                src="collar3.jpg"
                alt="Collar 3"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-2" style={{ padding: "0", flex: "1" }}>
              <img
                src="collar4.jpg"
                alt="Collar 4"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-2 top" style={{ padding: "0", flex: "1" }}>
              <img
                src="collar5.jpg"
                alt="Collar 5"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <button
            className="btn rounded-0 my-3 w-auto mx-auto my-5 text-center d-flex justify-content-center align-items-center btn-center mt-5"
            onClick={() => navigate("/animals")}
          >
            Посмотреть{" "}
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
