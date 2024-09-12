import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { axiosRequest } from "./service/axiosInstance";
import { AppContext } from "./AppContext";
import RegPage from "./pages/RegPage";
import AuthPage from "./pages/AuthPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const response = await axiosRequest.get("/tokens/refresh");
      console.log(111, response);
      if (response.status === 200) {
        setUser(response.data.accessToken);
      }
    } catch ({response}) {
      console.log(response);
    }

  };

  useEffect(() => {
    checkUser();
  }, []);  

  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authorization" element={<AuthPage />} />
          <Route path="/registration" element={<RegPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
