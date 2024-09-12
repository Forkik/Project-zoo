import React, {useState} from'react';
import { axiosRequest } from '../../services/axiosInstance';
function AnimalUpdateFormAdd({ animal, setAnimals, isActive }) {

    const [title, setTitle] = useState(animal.title)
    const [description, setDescription] = useState(animal.description)
    const [image, setImage] = useState(animal.image)

    const onHandleChange = async(e) => {
        try {
            e.preventDefault()
            const response = await axiosRequest.put(`/animals/${animal.id}`, {
                title, 
                description,
                image,
                userId: 1
            })
            console.log(response.data);
            
            if(response.status === 200){
                setAnimals(prev => prev.map(ani => ani.id === animal.id ? response.data.animal : ani))
            }
        } catch (error) {
            
        }

    }
  return (
    <div>
    <form onSubmit={onHandleChange}>
        <input type="text" placeholder='New title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='New description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="text" placeholder='New image' value={image} onChange={(e) => setImage(e.target.value)}/>
        <button  onClick={isActive} type='submit'>Change</button>
    </form>
 </div>
  );
}

export default AnimalUpdateFormAdd;