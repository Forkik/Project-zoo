import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import TariffPage from "../page/tariff/TariffPage";
import { axiosRequest } from "../services/axiosInstance";

function App() {
  const [tariffs, setTariffs] = useState([]);

  const getAllTariff = async () => {
    try {
      const response = await axiosRequest.get("/tariffs");
      // console.log(response);
      
      if (response.status === 200) setTariffs(response.data.tariffs);
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getAllTariff();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/tariffs"
          element={<TariffPage tariffs={tariffs} setTariffs={setTariffs} />}
        />
      </Routes>
    </>
  );
}

export default App;
