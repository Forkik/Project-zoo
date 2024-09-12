import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../AppContext";
import { axiosRequest, setAccessToken } from "../service/axiosInstance";
import { useNavigate } from "react-router-dom";
function AuthPage({}) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const emailError = formState.errors["email"]?.message;
  const passwordError = formState.errors["password"]?.message;
  const onSubmit = async (data) => {
    try {
      data.preventDefault;
      const response = await axiosRequest.post("/auth/authorization", data);
      console.log(response);

      if (response.status === 200) {
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
      <div className="card w-50 mx-auto mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="mb-3">
            <label className="form-label">Ваша почта</label>
            <input
              {...register("email", {
                required: "Заполните это поле",
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //   message: "Неправильная почта",
                // },
              })}
              type="email"
              className="form-control"
            />
          </div>
          {emailError && <div className="alert alert-danger">{emailError}</div>}
          <div className="mb-3 input-group d-flex flex-column">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                {...register("password", {
                  required: "Заполните это поле",
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
            <div className="alert alert-danger">{passwordError}</div>
          )}
          <button type="submit" className="btn btn-primary">
            Зарегестрироваться
          </button>
        </form>
      </div>
    </>
  );
}

export default AuthPage;
