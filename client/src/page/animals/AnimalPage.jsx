import React from'react';
import AnimalFormAdd from './AnimalFormAdd';
import AnimalItem from './AnimalItem';


function AnimalPage({ animals, setAnimals }) {
    // console.log(animals);
    
    // {user && user.isAdmin === true &&
  return (
      <div>
        <h1>AnimalPage</h1>
         <AnimalFormAdd setAnimals={setAnimals}/>
        {animals.map(animal => <AnimalItem animal={animal} key={animal.id} setAnimals={setAnimals}/>)}
    </div>
  );
}

export default AnimalPage;