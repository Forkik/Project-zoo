import React, { useContext } from "react";
import AnimalFormAdd from "./AnimalFormAdd";
import AnimalItem from "./AnimalItem";
import { AppContext } from "../../AppContext";

function AnimalPage({ animals, setAnimals }) {
  const { user } = useContext(AppContext);

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedAnimals = chunkArray(animals, 3); // Группируем по 3 элемента

  return (
    <div>
      <img src="/animals.jpg" alt="" style={{ width: "100%" }} />
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }}
      >
        <h1
          className="title fs-1 font-1"
          style={{ color: "white", textAlign: "center", marginTop: "9%" }}
        >
          Наши животные
        </h1>
        <p className="card-text w-75 mx-auto mt-5 color-text-white fs-2 text-center shadow p-3 back-animal-text">В зоопарке Урюпинска забота о животных — это важная и ответственная задача. Здесь работают опытные специалисты, которые ежедневно следят за состоянием здоровья и благополучием обитателей.</p>
      </div>
      <div className="text-start w-100 h-100 background-animals d-flex flex-row justify-content-between flex-wrap">
        <div
          className="px-5 mb-4 d-flex align-items-center flex-column justify-content-center w-100"
        >
          <h1 className="mt-5">Животные</h1>
          <div className="d-flex flex-column">
            {user && user.isAdmin && <AnimalFormAdd setAnimals={setAnimals} />}
            <div className="d-flex flex-column">
              {groupedAnimals.map((group, index) => (
                <div key={index} className="d-flex flex-row flex-wrap justify-content-between w-100 ">
                  {group.map((animal) => (
                    <AnimalItem
                      animal={animal}
                      key={animal.id}
                      setAnimals={setAnimals}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalPage;
