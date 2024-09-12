import React , { useContext } from'react';
import AnimalFormAdd from './AnimalFormAdd';
import AnimalItem from './AnimalItem';
import { AppContext } from '../../AppContext';

function AnimalPage({ animals, setAnimals }) {
    // console.log(animals);

    const {user} = useContext(AppContext)

    // console.log(user);
    
    // {user && user.isAdmin === true &&
  return (
      <div>
        <h1>Животные</h1>
        { user && user.isAdmin && (<AnimalFormAdd setAnimals={setAnimals}/>)}
        {animals.map(animal => <AnimalItem animal={animal} key={animal.id} setAnimals={setAnimals}/>)}
        
    </div>
  );
}

export default AnimalPage;