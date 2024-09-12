import React, { useContext } from'react';
import { axiosRequest } from '../../service/axiosInstance';
import TariffUpdateForm from './TariffUpdateForm';
import { AppContext } from '../../AppContext';


function TariffItem({ tariff, setTariffs}) {
const {user} = useContext(AppContext)
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
        <TariffUpdateForm tariff={tariff} setTariffs={setTariffs}/>
        <button onClick={onHandleDelete}>удалитть</button>
        </>
        )}
        </div>
  );
}

export default TariffItem;