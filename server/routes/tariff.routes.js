const router = require("express").Router();

const verifyAccessToken = require("../middleware/verifyAccessToken");
const TrafficService = require("../services/Tariff.services");

router.get("/", async (req, res) => {
  try {
    const tariffs = await TrafficService.getAllTariffs();
    res.status(200).json({ message: "кайф", tariffs });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/:tariffId", async (req, res) => {
  try {
    const { tariffId } = req.params;
    const tariff = await TrafficService.getTariffById(+tariffId);
    if (tariff) {
      res.status(200).json({ message: "кайф", tariff });
      return;
    }
    res.status(400).json({ message: "у вас ошибочка" });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post("/", verifyAccessToken, async (req, res) => {
  try {
    const {user} = res.locals
    const { image, status, auditorium, price } = req.body;
    const tariff = await TrafficService.createTariff({
      image,
      status,
      auditorium,
      price,
      userId: user.id,
    });

    if (tariff) {
      res.status(201).json({ message: "кайф", tariff });
      return;
    }
    res.status(400).json({ message: "у вас ошибочка" });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put("/:tariffId",verifyAccessToken, async (req, res) => {
  try {
    const { tariffId } = req.params;
    const { image, status, auditorium, price } = req.body;
    const tariff = await TrafficService.updateTariff(tariffId, {
      image,
      status,
      auditorium,
      price,
    });
    if (tariff) {
      res.status(200).json({ message: "кайф", tariff });
      return;
    }
    res.status(400).json({ message: "у вас ошибочка" });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete("/:tariffId", verifyAccessToken ,async (req, res) => {
  try {
    const { tariffId } = req.params;
    const tariff = await TrafficService.removeTariff(tariffId);
    if (tariff) {
      res.status(200).json({ message: "кайф" });

      return;
    }
    res.status(400).json({ message: "у вас ошибочка" });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
