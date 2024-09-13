import React, { useState } from 'react';
import { axiosRequest } from '../../service/axiosInstance';

function TariffUpdateForm({ tariffs, tariff, setTariffs, setActive }) {
  const [status, setStatus] = useState(tariff.status);
  const [auditorium, setAuditorium] = useState(tariff.auditorium);
  const [price, setPrice] = useState(tariff.price);
  const [error, setError] = useState(null);

  const onHandleChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosRequest.put(`/tariffs/${tariff.id}`, {
        status,
        auditorium,
        price,
        userId: 1,
      });

      if (response.status === 200) {
        setTariffs((prev) =>
          prev.map((el) => (el.id === tariff.id ? response.data.tariff : el))
        );
        setActive(false); // Закрытие формы после сохранения
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onHandleChange}>
        {/* Выбор статуса (Будни, Выходной) */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {tariffs &&
            tariffs
              .filter(
                (tarif, index, self) =>
                  index === self.findIndex((t) => t.status === tarif.status)
              )
              .map((tarif) => (
                <option key={tarif.status} value={tarif.status}>
                  {tarif.status}
                </option>
              ))}
        </select>

        {/* Выбор аудитории */}
        <select
          value={auditorium}
          onChange={(e) => setAuditorium(e.target.value)}
        >
          {tariffs &&
            tariffs
              .filter(
                (tarif, index, self) =>
                  index === self.findIndex((t) => t.auditorium === tarif.auditorium)
              )
              .map((tarif) => (
                <option key={tarif.auditorium} value={tarif.auditorium}>
                  {tarif.auditorium}
                </option>
              ))}
        </select>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <button type="submit">Сохранить</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default TariffUpdateForm;
