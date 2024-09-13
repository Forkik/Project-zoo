import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { axiosRequest } from "../../service/axiosInstance";
import { useForm } from "react-hook-form";

function TariffFormItem({ tariffs, tariff, setTariffs, setActive }) {
  const { user } = useContext(AppContext);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const statusError = formState.errors["status"]?.message;
  const auditoriumError = formState.errors["auditorium"]?.message;
  const priceError = formState.errors["price"]?.message;
  const imageError = formState.errors["image"]?.message;


  const onHandleSubmit = async (data) => {
    try {
    //   console.log(data);
      
      if (user && user.isAdmin) {
        const response = await axiosRequest.post("/tariffs", {
            ...data,
            userId: user.id,
          });
        if (response.status === 201) {
          setTariffs((prev) => [...prev, response.data.tariff]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
        <h3 className="card-title text-center mb-3">Добавить тариф</h3>
        <label class="form-label">Картинка</label>
        <input
          type="text"
          className="form-control mb-3"
          {...register("image", {
            required: "Вставите картинку",
          })}
        />
        {imageError && <div className="alert alert-danger">{imageError}</div>}
        <label class="form-label">Статус</label>
        <input
          type="text"
          className="form-control mb-3"
          {...register("status", {
            required: "Заполните это поле",
          })}
        />
        {statusError && <div className="alert alert-danger">{statusError}</div>}
        <label class="form-label">Аудитория</label>
        <input
          type="text"
          className="form-control mb-3"
          {...register("auditorium", {
            required: "Заполните это поле",
          })}
        />
        {auditoriumError && (
          <div className="alert alert-danger">{auditoriumError}</div>
        )}
        <label class="form-label">Цена</label>
        <input
          className="form-control mb-3"
          type="number"
          defaultValue={1} // Устанавливаем значение по умолчанию на 1
          min={1} // Минимальное значение 1
          max={1000000} // Максимальное значение 1,000,000
          {...register("price", {
            required: "Заполните это поле",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Должно быть больше 0",
            },
            max: {
              value: 1000000,
              message: "Не должно превышать 1,000,000",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Должно быть целое число",
            },
          })}
        />
        {priceError && <div className="alert alert-danger">{priceError}</div>}
        <button
          onClick={() => setActive(false)}
          className="btn btn-primary rounded-0 my-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center"
          type="submit"
        >
          Добавить
        </button>
        {status !== "" && auditorium !== ""}
      </form>
    </div>
  );
}

export default TariffFormItem;
