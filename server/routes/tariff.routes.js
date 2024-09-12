const router = require("express").Router();

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

router.post("/", async (req, res) => {
  try {
    const { status, auditorium, price, userId } = req.body;
    const tariff = await TrafficService.createTariff({
      status,
      auditorium,
      price,
      userId: 1,
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

router.put("/:tariffId", async (req, res) => {
  try {
    const { tariffId } = req.params;
    const { status, auditorium, price } = req.body;
    const tariff = await TrafficService.updateTariff(tariffId, {
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

router.delete("/:tariffId", async (req, res) => {
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
