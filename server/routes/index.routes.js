const router = require("express").Router();
const authRouter = require("./auth.routes");
const animalsRouter = require("./animals.routes");
const tariffRoutes = require("./tariff.routes");

router.use("/auth", authRouter);
router.use("/animals", animalsRouter);
router.use("/tariffs", tariffRoutes);

module.exports = router;
