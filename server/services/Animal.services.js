const { Animal } = require('../db/models')

class AnimalServices {

    static getAllAnimals = async() => {
        try {
            return (await Animal.findAll()).map((animal) =>
                animal.get()
              );
                  
        } catch ({message}) {
            return {status: 'error', message}
        }
    }

    static getOneAnimalbyId = async(id) => {

        try {
            const animal = await Animal.findOne({where: {id}})
            return animal ? animal.get() : null
            
        } catch ({message}) {
            return {status: 'error', message}
        }
    }

    static createAnimal = async(data) => {
        try {
            let animal
            animal = await Animal.create(data)
            return animal.get()
            
        } catch ({message}) {
            return {status: 'error', message}
        }
    }

    static updateAnimal = async(id, userId, data) => {
        try {
            const animal = await Animal.findOne({where: {id, userId}})
        if(animal){
            return animal.update(data)
        }
        } catch ({message}) {
            return {status: 'error', message}
        }
        
    }


    static deleteAnimal = async(id, userId) => {
        try {
            const animal = await Animal.findOne({where: {id, userId}})
            if(animal){
                animal.destroy()
                return true
            }
            return null
            
        } catch ({message}) {
            return {status: 'error', message}
        }
        
    }


}

module.exports = AnimalServices