import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AnimalPage from "../page/animals/AnimalPage";
import { axiosRequest } from "../services/axiosInstance";
import { AppContext } from "./AppContext";
import RegPage from "./pages/RegPage";
import HomePage from "./page/auth/HomePage";
import AuthPage from "./page/auth/AuthPage";
import LogoutPage from "./pages/LogoutPage";
import TariffPage from "../page/tariff/TariffPage";
function App() {
  const [user, setUser] = useState(undefined);
  const [animals, setAnimals] = useState([]);
  const [tariffs, setTariffs] = useState([]);

  const getAllAnimals = async () => {
    try {
      const response = await axiosRequest.get("/animals");
      if (response.status === 200) {
        setAnimals(response.data.animals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkUser = async () => {
    try {
      const response = await axiosRequest.get("/tokens/refresh");
      console.log(111, response);
      if (response.status === 200) {
        setUser(response.data.accessToken);
      }
    } catch ({ response }) {
      console.log(response);
    }
  };

  const getAllTariff = async () => {
    try {
      const response = await axiosRequest.get("/tariffs");

      if (response.status === 200) setTariffs(response.data.tariffs);
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getAllAnimals();
    checkUser();
    getAllTariff();
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route
          path="/animals"
          element={<AnimalPage animals={animals} setAnimals={setAnimals} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/authorization" element={<AuthPage />} />
        <Route path="/registration" element={<RegPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route
          path="/tariffs"
          element={<TariffPage tariffs={tariffs} setTariffs={setTariffs} />}
        />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
