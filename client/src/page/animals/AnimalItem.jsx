import React, { useContext } from'react';
import { AppContext } from '../../app/AppContext';

function AnimalItem({ animal, setAnimals }) {
    // const {user} = useContext()
    console.log();
    

  return (
    <div>
    <h3>{animal.title}</h3>
    <p>{animal.description}</p>
    <img src={animal.image} alt='animal' />
    {/* {user && user.id === animal.userId && (
      <button onClick={onHandleDelete}>delete</button>
    )} */}
  </div>
  )
}

export default AnimalItem;