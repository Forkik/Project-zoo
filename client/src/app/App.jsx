import React, { useEffect, useState } from'react';
import {  NavLink, Route, Routes, useNavigate } from "react-router-dom"
import AnimalPage from '../page/animals/AnimalPage';
import { axiosRequest } from '../services/axiosInstance';
import { AppContext } from "./AppContext";
import RegPage from "./pages/RegPage";
import HomePage from "./page/auth/HomePage";
import AuthPage from "./page/auth/AuthPage";
import LogoutPage from "./pages/LogoutPage";
function App() {

    const [user, setUser] = useState(undefined)
    const [animals, setAnimals] = useState([])
    const navigate = useNavigate();
    //console.log(animals);

    const getAllAnimals = async() => {
        try {
          const response = await axiosRequest.get('/animals')
          if(response.status === 200){
            setAnimals(response.data.animals)
              
          } 
        } catch (error) {
            console.log(error);
            
          }
      }

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
        getAllAnimals()
        checkUser()
      }, [])

  return (
    <AppContext.Provider value={{user, setUser}}>
         <Routes>
            <Route path='/animals' element={<AnimalPage animals={ animals } setAnimals={setAnimals}/>}/>
            <Route path="/" element={<HomePage />} />
           <Route path="/authorization" element={<AuthPage />} />
            <Route path="/registration" element={<RegPage />} />
            <Route path="/logout" element={<LogoutPage />} />
         </Routes>
    </AppContext.Provider>
     
  );
}

export default App;