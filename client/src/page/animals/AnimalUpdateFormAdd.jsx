import React, { useContext, useState } from "react";
import { axiosRequest } from "../../service/axiosInstance";
import { AppContext } from "../../AppContext";
function AnimalUpdateFormAdd({ animal, setAnimals, isActive }) {
  const [title, setTitle] = useState(animal.title);
  const [description, setDescription] = useState(animal.description);
  const [image, setImage] = useState(animal.image);
  // const [error, setError] = useState(undefined)
  const { user } = useContext(AppContext);

  const onHandleChange = async (e) => {
    try {
      e.preventDefault();

      const data = new FormData();

      data.append("title", title);
      data.append("image", image);
      data.append("description", description);
      data.append("userId", user.id);
      console.log(typeof image);

      const response = await axiosRequest.put(`/animals/${animal.id}`, data, {
        "Content-Type": "multipart/form-data",
      });
      console.log(response.data);

      if (response.status === 200) {
        setAnimals((prev) =>
          prev.map((ani) => (ani.id === animal.id ? response.data.animal : ani))
        );
        // setError(undefined)
      }
      // else if (response.status === 403){
      //    setError('Обнаружены пустые поля')

      // }
    } catch ({ message }) {
      console.log(message);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onHandleChange}>
        <h3 className="form-label bold">Обновить</h3>
        {/* {error && (<h3>{error}</h3>)} */}
        <div className="mb-3">
          <label className="form-label">Новое название</label>
          <input
            type="text form-control"
            className="form-control"
            placeholder="New title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Новое описание</label>
          <input
            type="text"
            className="form-control"
            placeholder="New description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <label className="form-label">Новое изображение</label>
        <input
        className="form-control"
          type="file"
          multiple
          onChange={(e) => setImage(e.target.files[0])}
        />
        </div>
       
        {title.trim() !== "" && description.trim() !== "" && (
          <button className="btn btn-primary w-100 mt-1 rounded-0" onClick={isActive} type="submit">
            Сохранить
          </button>
        )}
      </form>
    </div>
  );
}

export default AnimalUpdateFormAdd;
