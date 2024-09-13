import React, { useContext, useState } from "react";
import { axiosRequest } from "../../service/axiosInstance";
import TariffUpdateForm from "./TariffUpdateForm";
import { AppContext } from "../../AppContext";
import ModalWindow from "../shared/ui/ModalWindw";



function TariffItem({ tariffs, tariff, setTariffs }) {
  const { user } = useContext(AppContext);
  const [active, setActive] = useState(false);

  const onHandleDelete = async () => {
    const response = await axiosRequest.delete(`/tariffs/${tariff.id}`);
    if (response.status === 200) {
      setTariffs((prev) => prev.filter((el) => el.id !== tariff.id));
    }
  };

  // console.log(tariff);
  

  return (
    <div>
      <div
        style={{
          width: '20rem',
        }}
        className="card bg-white mt-5 mb-3 mx-2 rounded-0 border-0" 
      >
        <img src={`${tariff.image}`} className="card-img-top" alt="" style={{height: '15rem', objectFit: 'cover'}}/>
        <div className="card-body">
          <h3 className="card-title text-center title mt-3">{tariff.status}</h3>
          <div className="d-flex justify-content-center mt-3 ">
          <h4 className="card-text text-center bold">{tariff.auditorium}.........</h4>
          <h4 className="card-text text-center mb-3 bold">{tariff.price}₽</h4>
          </div>

          {user && user.id === tariff.userId && (
            <>
              <button onClick={onHandleDelete} className="btn btn-danger rounded-0 my-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center">Удалить</button>
              <button onClick={() => setActive(true)} className="btn btn-primary rounded-0 my-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center">Изменить</button>
            </>
          )}
          <blockquote className="text-center mb-0">Чтобы Приобрести билет, приходите к нам!</blockquote>
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <TariffUpdateForm
          tariffs={tariffs}
          tariff={tariff}
          setTariffs={setTariffs}
          setActive={setActive}
        />
        <button className="btn btn-danger rounded-0 mt-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center" onClick={() => setActive(false)}>Закрыть</button>
      </ModalWindow>
    </div>
  );
}

export default TariffItem;
