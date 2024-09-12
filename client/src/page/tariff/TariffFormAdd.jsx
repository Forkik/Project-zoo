import React, { useState } from'react';
import { axiosRequest } from '../../services/axiosInstance';


function TariffFormAdd({ setTariffs }) {
    const [status, setStatus] = useState('')
    const [auditorium, setAuditorium] = useState('')
    const [price, setPrice] = useState(0)

    const onHandleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await axiosRequest.post('/tariffs', {
                status,
                auditorium,
                price,
                userId: 1,
            })
            if(response.status === 201){
                setTariffs((prev) => [...prev, response.data.tariff])
                // setStatus('')
                // setAuditorium('')
                // setPrice('')
            }
        } catch ({ response }) {
            console.log(response.data.message);
          }
    }

  return (
      <form onSubmit={onHandleSubmit}>
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
        <button type='submit'>добавить</button>
        </form>
  );
}

export default TariffFormAdd;