import React, { useState, useContext } from'react';
import {axiosRequest} from '../../services/axiosInstance'
import { AppContext } from '../../app/AppContext'


function AnimalFormAdd({ setAnimals }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const {user} = useContext(AppContext)

    const onHandleSubmit = async(e) => {
        try {
            e.preventDefault()
            // if(user && user.isAdmin && (title.trim() !== '' && description.trim() !== '' && image.trim() !== '')) {
                const response = await axiosRequest.post('/animals', {title, description, image, userId: 1})
                if(response.status === 201){
                    setAnimals(prev => [...prev, response.data.animal])
                }
            // }
           
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
      <div>
        <form onSubmit={onHandleSubmit}>
            <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     </div>
  );
}

export default AnimalFormAdd;