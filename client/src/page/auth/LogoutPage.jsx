import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { axiosRequest, setAccessToken } from "../../service/axiosInstance";
function LogoutPage({}) {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  const onHandleLogout = async () => {
    try {
      const response = await axiosRequest.delete("/auth/logout");
      console.log("popa", response);

      if (response.status === 200) {
        setUser(undefined);
        setAccessToken("");
        navigate("/");
        return;
      }
    } catch ({ response }) {
      console.log(response);
    }
  };
  return (
    <div style={{ marginTop: "20%", marginBottom: "10%" }}>
      <h1 className="text text-center">Вы действительно хотите выйти?</h1>
      <button className="btn btn-primary my-5 d-flex justify-content-center align-items-center btn-center rounded-0" onClick={onHandleLogout}>Выйти</button>
    </div>
  );
}

export default LogoutPage;
