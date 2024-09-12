import React, { useContext, useState } from "react";
import { axiosRequest } from "../../service/axiosInstance";
import { AppContext } from "../../AppContext";

function TariffFormAdd({ setTariffs }) {
  const [status, setStatus] = useState("");
  const [auditorium, setAuditorium] = useState("");
  const [price, setPrice] = useState(0);

  const { user } = useContext(AppContext);

  const onHandleSubmit = async (e) => {
    try {
      e.preventDefault()
      if(user && user.isAdmin && (status.trim() !== '' && auditorium.trim() !== '' && price )) {
          const response = await axiosRequest.post('/tariffs', {status, auditorium, price, userId: 1})
          if(response.status === 201){
            setTariffs(prev => [...prev, response.data.tariff])
          }
      }
      
      } catch (error) {
        console.log(error);
      }
      };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder='Статус'
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <input
        type="text"
        placeholder='Аудитория'
        value={auditorium}
        onChange={(e) => setAuditorium(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
      />
      <button type="submit">добавить</button>
      {status !== "" && auditorium !== "" }
    </form>
  );
}

export default TariffFormAdd;


