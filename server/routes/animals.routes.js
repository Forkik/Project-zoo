const router = require('express').Router()
const AnimalServices = require('../services/Animal.services')
const verifyAccessToken = require('../middleware/verifyAccessToken')

router.get('/', async(req, res) => {
    try {
        const animals = await AnimalServices.getAllAnimals()
        res.status(200).json({message: 'success', animals})
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})

router.get('/:animalId', async(req, res) => {
    try {
        const {animalId} = req.params
        const animal = await AnimalServices.getOneAnimalbyId(+animalId)
        if(animal){
            res.status(200).json({message: 'success', animal})
        } else {
            res.status(400).json({error: 'Wrong id of animal'})
        }
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})

router.post('/', verifyAccessToken, async(req, res) => {
    try {
        const userId = res.locals.user.id
        const {title, description, image}  = req.body
        const animal = await AnimalServices.createAnimal({title, description, image, userId})
        res.status(201).json({message: 'success', animal})
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})

router.put('/:animalId', verifyAccessToken, async(req, res) => {
    try {
        const userId = res.locals.user.id
        const {animalId} = req.params
        const {title, description, image}  = req.body
        const animal = await AnimalServices.updateAnimal(+animalId, userId, {title, description, image})
        res.status(200).json({message: 'success', animal})
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})

router.delete('/:animalId', verifyAccessToken, async(req, res) => {
    try {
        const userId = res.locals.user.id
        const {animalId} = req.params
        const animal = await AnimalServices.deleteAnimal(+animalId, userId)
        if (character) {
            res.status(200).json({message: 'success', animal})
            return;
          }
          res.status(400).json({ message: 'Wrong id of user' });
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})

module.exports = router