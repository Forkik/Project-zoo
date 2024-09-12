import React, { useContext } from'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import { axiosRequest, setAccessToken } from '../../service/axiosInstance';
function LogoutPage({ }) {
    const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

    const onHandleLogout = async () => {
        try {
            const response = await axiosRequest.delete("/auth/logout");
            console.log('popa',response);
            
            if (response.status === 200) {
                setUser(undefined)
                setAccessToken('')
                navigate("/");
                return
            }
        } catch ({response}) {
            console.log(response);
        }
    }
  return (
      <div><h1>LogoutPage</h1><button onClick={onHandleLogout}>logout</button></div>
  );
}

export default LogoutPage;