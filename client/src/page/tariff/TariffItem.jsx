import React, { useContext, useState } from'react';
import { axiosRequest } from '../../service/axiosInstance';
import TariffUpdateForm from './TariffUpdateForm';
import { AppContext } from '../../AppContext';
import ModalWindow from '../shared/ui/ModalWindw';


function TariffItem({ tariff, setTariffs }) {
const {user} = useContext(AppContext)
const  [active, setActive] = useState(false)
    // console.log(tariff, tariff.id);
    const onHandleDelete = async () => {
        const response = await axiosRequest.delete(`/tariffs/${tariff.id}`)
        if(response.status === 200){
            setTariffs(prev => prev.filter((el) => el.id !== tariff.id))

        }
    }


    return (
      <div>
      <h3>{tariff.status}</h3>
      <h4>{tariff.auditorium}</h4>
      <h4>{tariff.price}</h4>
      {user && user.id === tariff.userId && (
          <>
              <button onClick={onHandleDelete}>Удалить</button>
              <button onClick={() => setActive(true)}>Изменить</button>
              <ModalWindow active={active} setActive={setActive}>
                  <TariffUpdateForm tariff={tariff} setTariffs={setTariffs} setActive={setActive} />
                  <button onClick={() => setActive(false)}>Закрыть</button>
              </ModalWindow>
          </>
      )}
  </div>
  );
}


export default TariffItem;