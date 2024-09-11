// const { route } = require("./auth.routes");
const router = require('express').Router()

const authRouter = require("./auth.routes");
const animalsRouter = require('./animals.routes')

router.use("/auth", authRouter);
router.use('/animals',  animalsRouter)


module.exports = router