import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosRequest } from "../../service/axiosInstance";
function AnimalIdPage({}) {
  const [animal, setAnimal] = useState({});
  const { animalId } = useParams();
  // console.log(animalId);

  const getAnimal = async () => {
    try {
      const response = await axiosRequest.get(`/animals/${animalId}`);

      if (response.status === 200) {
        setAnimal(response.data.animal);
      }
    } catch ({ response }) {
      console.log(response);
    }
  };

  useEffect(() => {
    getAnimal();
  }, []);

  console.log(animal);

  const navigate = useNavigate()

  return (
    <div>
      <div className="d-flex flex-row justify-content-between  align-items-center ">
        <div className="img">
          <img src={animal.image} style={{ width: "700px", height: "100vh", objectFit: "cover", objectPosition: "center" }} alt="КАРТИНКА" />
        </div>
        <div style={{ marginTop: "30px" }} className="info d-flex flex-column align-items-center justify-content-center">
          <h1 className="title text-center">{animal.title}</h1>
          <p className="card-text text-center fs-2 w-75">{animal.description}</p>
          <button className="btn btn-primary rounded-0 my-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center" onClick={() => navigate(-1)}>Вернуться</button>
        </div>
      </div>
    </div>
  );
}

export default AnimalIdPage;
