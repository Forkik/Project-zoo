import React from "react";
import { useNavigate } from "react-router-dom";
function HomePage({}) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => navigate("/authorization")}>authorization</button>
      <button onClick={() => navigate("/registration")}>registration</button>
      <button onClick={() => navigate("/logout")}>logout</button>
      <button onClick={() => navigate("/animals")}>animals</button>
      <button onClick={() => navigate("/tariffs")}>tariffs</button>
    </div>
  );
}

export default HomePage;
