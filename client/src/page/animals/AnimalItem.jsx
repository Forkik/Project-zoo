import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { axiosRequest } from "../../service/axiosInstance";
import ModalWindow from "../shared/ui/ModalWindw";
import AnimalUpdateFormAdd from "./AnimalUpdateFormAdd";
import { useNavigate } from "react-router-dom";

function AnimalItem({ animal, setAnimals }) {
  const { user } = useContext(AppContext);

  const [active, setActive] = useState(false);

  const navigate = useNavigate()

  const isActive = () => {
    setActive((prev) => !prev);
  };

  // console.log(animal, animal.id)
  const onHandleDelete = async () => {
    const response = await axiosRequest.delete(`/animals/${animal.id}`);
    if (response.status === 200) {
      setAnimals((prev) => prev.filter((ani) => ani.id !== animal.id));
    }
  };

  return (
    <div>
      <div
        className="card mx-5 rounded-0 border-0 p-3 m-3 shadow "
        style={{ width: "27rem" }}
      >
        <img src={animal.image} style={{ height: "350px", objectFit: "cover" }} className="card-img  rounded-0" alt="animal" />
        <div className="card-body">
          <h3 className="card-title text-center bold">{animal.title}</h3>
          <p className="card-text text-overflow">{animal.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            {user && user.id === animal.userId && (
              <>
                <div>
                  <button
                    className="btn btn-primary rounded-0 "
                    onClick={isActive}
                  >
                    Обновить
                  </button>
                </div>

                <ModalWindow active={active} setActive={setActive}>
                  <AnimalUpdateFormAdd
                    animal={animal}
                    setAnimals={setAnimals}
                    isActive={isActive}
                  />
                </ModalWindow>
              </>
            )}
            <button className="btn btn-primary rounded-0 " onClick={() => navigate(`/animal/${animal.id}`)}>
              Посмотреть
            </button>
            {user && user.id === animal.userId && (
              <>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger rounded-0"
                    onClick={onHandleDelete}
                  >
                    Удалить
                  </button>
                </div>

                <ModalWindow active={active} setActive={setActive}>
                  <AnimalUpdateFormAdd
                    animal={animal}
                    setAnimals={setAnimals}
                    isActive={isActive}
                  />
                </ModalWindow>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalItem;
