import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AnimalPage from "../page/animals/AnimalPage";
import { axiosRequest, setAccessToken } from "../service/axiosInstance";
import { AppContext } from '../AppContext'
import RegPage from "../page/auth/RegPage";
import HomePage from "../page/HomePage";
import AuthPage from "../page/auth/AuthPage";
import LogoutPage from "../page/auth/LogoutPage";
import TariffPage from "../page/tariff/TariffPage";
import Navbar from "../widgets/navbar/Navbar";
import Footer from "../widgets/footer/Footer";
import ErrorPage from '../page/error/ErrorPage';

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
      // console.log(111, response);
      if (response.status === 200) {
        setUser(response.data.user);
        setAccessToken(response.data.setAccessToken)
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
      <Navbar />
      <Routes>
        <Route
          path="/animals"
          element={<AnimalPage animals={animals} setAnimals={setAnimals} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/authorization" element={<AuthPage />} />
        <Route path="/registration" element={<RegPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route
          path="/tariffs"
          element={<TariffPage tariffs={tariffs} setTariffs={setTariffs} />}
        />
      </Routes>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
