import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <AppContext.Provider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
