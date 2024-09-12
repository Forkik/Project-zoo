import React from'react';
import { axiosRequest } from '../../services/axiosInstance';
import TariffUpdateForm from './TariffUpdateForm';


function TariffItem({ tariff, setTariffs}) {
    console.log(tariff, tariff.id);
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
        <TariffUpdateForm tariff={tariff} setTariffs={setTariffs}/>
        <button onClick={onHandleDelete}>удалитть</button>
        </div>
  );
}

export default TariffItem;