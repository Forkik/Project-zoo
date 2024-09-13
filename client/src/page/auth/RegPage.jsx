import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../AppContext";
import { axiosRequest, setAccessToken } from "../../service/axiosInstance";
import { useNavigate } from "react-router-dom";
function RegPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const { register, handleSubmit, watch, formState } = useForm({
    mode: "onChange",
  });
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const nameError = formState.errors["name"]?.message;
  const emailError = formState.errors["email"]?.message;
  const passwordError = formState.errors["password"]?.message;
  const confirmPassword = formState.errors["confirmPassword"]?.message;
  const onSubmit = async (data) => {
    try {
      data.preventDefault;
      const response = await axiosRequest.post("/auth/registration", data);
      console.log(response);

      if (response.status === 201) {
        setUser(response.data.user);
        setAccessToken(response.data.accessToken);
        navigate("/");
        console.log(response);
      }
    } catch ({ response }) {
      console.log(response);
    }
  };
  return (
    <>
      <div style={{ marginTop: "7%", marginBottom: "7%" }}>
        <div className="card w-50 mx-auto mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="mb-3">
              <label className="form-label">Ваше имя</label>
              <input
                {...register("name", {
                  required: "Заполните это поле",
                  pattern: {
                    value: /^[A-Za-zА-Яа-яЁё]+$/,
                    message: "Имя может содержать только буквы",
                  },
                })}
                type="text"
                className="form-control"
              />
            </div>
            {nameError && <div className="alert alert-danger rounded-0">{nameError}</div>}
            <div className="mb-3">
              <label className="form-label">Ваша почта</label>
              <input
                {...register("email", {
                  required: "Заполните это поле",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неправильная почта",
                  },
                })}
                type="email"
                className="form-control"
              />
            </div>
            {emailError && (
              <div className="alert alert-danger rounded-0">{emailError}</div>
            )}
            <div className="mb-3 d-flex flex-column">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  {...register("password", {
                    required: "Заполните это поле",
                    minLength: {
                      value: 6,
                      message: "Минимальная длина пароля 6 символов",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                      message:
                        "Пароль должен содержать минимум 6 символов и включать буквы и цифры",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Скрыть" : "Показать"}
                </button>
              </div>
            </div>
            {passwordError && (
              <div className="alert alert-danger rounded-0">{passwordError}</div>
            )}
            <div className="mb-3 d-flex flex-column">
              <label className="form-label">Потвердите пароль</label>
              <div className="input-group">
                <input
                  {...register("confirmPassword", {
                    required: "Заполните это поле",
                    validate: (value) =>
                      value === watch("password") || "Пароли не совпадают",
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Скрыть" : "Показать"}
                </button>
              </div>
            </div>
            {confirmPassword && (
              <div className="alert alert-danger rounded-0">{confirmPassword}</div>
            )}
            <button type="submit" className="btn btn-primary">
              Зарегестрироваться
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegPage;
