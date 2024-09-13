import { axiosRequest } from "../../service/axiosInstance";
import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import ModalWindow from "../shared/ui/ModalWindw";
import TariffFormItem from "./TariffFormItem";

function TariffFormAdd({ tariffs, tariff, setTariffs }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <button onClick={() => setActive(true)} className="btn btn-primary rounded-0 my-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center mt-5">Добавить</button>
      <ModalWindow active={active} setActive={setActive}>
        <TariffFormItem
          tariffs={tariffs}
          tariff={tariff}
          setTariffs={setTariffs}
          setActive={setActive}
        />
        <button className="btn btn-primary rounded-0 my-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center" onClick={() => setActive(false)}>Закрыть</button>
      </ModalWindow>
      
    </>
  );
}

export default TariffFormAdd;
