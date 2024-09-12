import React, {useState} from'react';
import { axiosRequest } from '../../services/axiosInstance';
function TariffUpdateForm({ tariff, setTariffs }) {
    const [status, setStatus] = useState(tariff.status)
    const [auditorium, setAuditorium] = useState(tariff.auditorium)
    const [price, setPrice] = useState(tariff.price)

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
        }
    } catch ({message}) {
        console.log(response.data.message);
        
    }
}

  return (
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
        type='text'
        value={price}
        onChange={(e) => setPrice(+e.target.value)}/>
        <button type='submit'>изменить</button>
        </form>
  );
}

export default TariffUpdateForm;