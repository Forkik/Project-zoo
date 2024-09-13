import React, { useState, useContext } from "react";
import { axiosRequest } from "../../service/axiosInstance";
import { AppContext } from "../../AppContext";

function AnimalFormAdd({ setAnimals }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { user } = useContext(AppContext);

  const onHandleSubmit = async (e) => {
    try {
      e.preventDefault();

      const data = new FormData();

      data.append("title", title);
      data.append("image", image);
      data.append("description", description);
      data.append("userId", user.id);

      if (
        user &&
        user.isAdmin &&
        title.trim() !== "" &&
        description.trim() !== ""
      ) {
        const response = await axiosRequest.post("/animals", data, {
          "Content-Type": "multipart/form-data",
        });
        if (response.status === 201) {
          setAnimals((prev) => [...prev, response.data.animal]);
        }
        // setImage('')
        // setTitle('')
        // setDescription('')
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(image);

  return (
    <>
      <div className="d-flex justify-content-center m-5">
        <div className="card border-0 w-25">
          <div className="card-body ">
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={onHandleSubmit}
            >
              <div className="mb-3 w-100">
                <label class="form-label">Название</label>
                <input
                  className="mb-3 form-control w-100"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-3 w-100">
                <label class="form-label">Описание</label>
                <input
                  className="mb-3 form-control "
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label class="form-label">Изображение</label>
                <input
                  className="mb-3 form-control"
                  type="file"
                  multiple
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <button className="btn btn-primary w-100 " type="submit">
                Добавить
              </button>
              {title !== "" && description !== "" && image !== ""}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimalFormAdd;
