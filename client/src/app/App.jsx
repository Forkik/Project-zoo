import React, { useEffect, useState } from'react';
import {  NavLink, Route, Routes } from "react-router-dom"
import AnimalPage from '../page/animals/AnimalPage';
import { AppContext } from './AppContext';
import { axiosRequest } from '../services/axiosInstance';
function App() {

    const [user, setUser] = useState(undefined)
    const [animals, setAnimals] = useState([])
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

      useEffect(() => {
        getAllAnimals()
      }, [])

  return (
    <AppContext.Provider value={{user, setUser}}>
         <div><h1>App</h1></div>
         <Routes>
            <Route path='/animals' element={<AnimalPage animals={ animals } setAnimals={setAnimals}/>}/>
         </Routes>
    </AppContext.Provider>
     
  );
}

export default App;