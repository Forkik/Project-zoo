import React, {useState} from'react';
import { axiosRequest } from '../../service/axiosInstance';
import ModalWindow from '../shared/ui/ModalWindw';

function TariffUpdateForm({ tariff, setTariffs, setActive }) {
    const [status, setStatus] = useState(tariff.status)
    const [auditorium, setAuditorium] = useState(tariff.auditorium)
    const [price, setPrice] = useState(tariff.price)
    const [error, setError] = useState(null)

    // const  [active, setActive] = useState(false)

const onHandleChange = async (e) => {
    try {
        e.preventDefault()

        const response = await axiosRequest.put(`/tariffs/${tariff.id}`, {
            status,
            auditorium,
            price,
            userId: 1
        })
        if(response.status === 200){
            setTariffs(prev => prev.map((el) => el.id === tariff.id ? response.data.tariff : el))
            setActive(false)
        }
        } catch (error) {
            setError(error.response ? error.response.data.message : error.message);
        }
    };

  return (
    <div>


      <form onSubmit={onHandleChange}>
        <input 
        type='text'
        value={status}
        onChange={(e) => setStatus(e.target.value)}/>
        <input 
        type='text'
        value={auditorium}
        onChange={(e) => setAuditorium(e.target.value)}/>
        <input 
        type='number'
        value={price}
        onChange={(e) => setPrice(+e.target.value)}/>
        <button type='submit'>Сохранить</button>
        </form>
    </div>
  );
}

export default TariffUpdateForm;