import React, { useContext, useState } from'react';
import { AppContext } from '../../app/AppContext';
import { axiosRequest } from '../../service/axiosInstance';
import ModalWindow from '../shared/ui/ModalWindw';
import AnimalUpdateFormAdd from './AnimalUpdateFormAdd';


function AnimalItem({ animal, setAnimals}) {
    const {user} = useContext(AppContext)

    const  [active, setActive] = useState(false)
    
   
    const isActive = () => {
        setActive(prev => !prev)
    }

    // console.log(animal, animal.id)
    const onHandleDelete = async() => {
        const response = await axiosRequest.delete(`/animals/${animal.id}`)
        if(response.status === 200){
          setAnimals(prev => prev.filter(ani => ani.id !== animal.id))
        }
        
      }
    
    

  return (
    <div>
    <h3>{animal.title}</h3>
    <p>{animal.description}</p>
    <img src={animal.image} alt='animal' />
    {user && user.id === animal.userId && (
      <>
        <button onClick={isActive}>update</button>
      <button onClick={onHandleDelete}>delete</button>
      <ModalWindow active={active} setActive={setActive}>
        <AnimalUpdateFormAdd animal={animal} setAnimals={setAnimals} isActive={isActive}/>
      </ModalWindow>
      </>
    )} 
  </div>
  )
}

export default AnimalItem;