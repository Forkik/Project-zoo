const { Animal } = require('../db/models')

class AnimalServices {

    static getAllAnimals = async() => {
        try {
            const animals = await Animal.findall()
            return animals            
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

    static updateAnimal = async(id, data) => {
        try {
            const animal = await Animal.findByPk(id)
        if(animal){
            return animal.update(data)
        }
        } catch ({message}) {
            return {status: 'error', message}
        }
        
    }


    static deleteAnimal = async(id) => {
        try {
            const animal = await Animal.findByPk(id)
            if(animal){
                animal.destroy
                return true
            }
            return null
            
        } catch ({message}) {
            return {status: 'error', message}
        }
        
    }


}

module.exports = AnimalServices