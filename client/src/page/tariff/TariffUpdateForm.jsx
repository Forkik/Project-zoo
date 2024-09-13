import React, { useState } from "react";
import { axiosRequest } from "../../service/axiosInstance";

function TariffUpdateForm({ tariffs, tariff, setTariffs, setActive }) {
  const [status, setStatus] = useState(tariff.status);
  const [image, setImage] = useState(tariff.image);
  const [auditorium, setAuditorium] = useState(tariff.auditorium);
  const [price, setPrice] = useState(tariff.price);
  const [error, setError] = useState(null);

  const onHandleChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosRequest.put(`/tariffs/${tariff.id}`, {
        image,
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
      <form className="d-flex flex-column" onSubmit={onHandleChange}>
      <label class="form-label">Картинка</label>
        <input
          className="mb-3 form-control"
          type="text"
          onChange={(e) => setImage(e.target.value)}
        />
        {/* Выбор статуса (Будни, Выходной) */}
        <label class="form-label">Статус</label>

        <select
          className="mb-3 form-select"
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
        <label class="form-label">Аудитория</label>

        <select
          className="mb-3 form-select"
          value={auditorium}
          onChange={(e) => setAuditorium(e.target.value)}
        >
          {tariffs &&
            tariffs
              .filter(
                (tarif, index, self) =>
                  index ===
                  self.findIndex((t) => t.auditorium === tarif.auditorium)
              )
              .map((tarif) => (
                <option key={tarif.auditorium} value={tarif.auditorium}>
                  {tarif.auditorium}
                </option>
              ))}
        </select>
        <label class="form-label">Цена</label>

        <input
        className="mb-3 form-control"
          type="number"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <button className="btn btn-primary rounded-0 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center" type="submit">Сохранить</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default TariffUpdateForm;
