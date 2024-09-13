import React, { useState, useContext } from'react';
import {axiosRequest} from '../../service/axiosInstance'
import { AppContext } from '../../AppContext'


function AnimalFormAdd({ setAnimals }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const {user} = useContext(AppContext)

    

    const onHandleSubmit = async(e) => {
        try {
            e.preventDefault()

            const data = new FormData();

              data.append('title', title);
              data.append('image', image);
              data.append('description', description);
              data.append('userId', user.id)

              

            if(user && user.isAdmin && (title.trim() !== '' && description.trim() !== '')) {
                const response = await axiosRequest.post('/animals', data, {
                    'Content-Type': 'multipart/form-data',
                  })
                if(response.status === 201){
                    setAnimals(prev => [...prev, response.data.animal])
                }
                // setImage('')
                // setTitle('')
                // setDescription('')
                
            }
           
        } catch (error) {
            console.log(error);
            
        }
    }

    console.log(image);
    
  return (

    <>
   
    <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="file" multiple onChange={(e) => setImage(e.target.files[0])}/>
        <button type='submit'>Add</button>
        {(title !== '' && description !== '' && image !== '' )}
     </form>

      </>
  )
}

export default AnimalFormAdd;