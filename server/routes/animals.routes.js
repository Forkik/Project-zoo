const router = require("express").Router();
const AnimalServices = require("../services/Animal.services");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const upload = require("../utils/upload");

router.get("/", async (req, res) => {
  try {
    const animals = await AnimalServices.getAllAnimals();
    return res.status(200).json({ message: "success", animals });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:animalId", async (req, res) => {
  try {
    const { animalId } = req.params;
    const animal = await AnimalServices.getOneAnimalbyId(+animalId);
    if (animal) {
      res.status(200).json({ message: "success", animal });
    } else {
      res.status(400).json({ error: "Wrong id of animal" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post(
  "/",
  verifyAccessToken,
  upload.single("image"),
  async (req, res) => {
    try {
      const id = res.locals.user.id;
      const { title, description } = req.body;
      console.log(req);
      
      const pathImages = "/img/" + req.file.filename;
      console.log("-----2");
      if (title.trim() && description.trim()) {
        const animal = await AnimalServices.createAnimal({
          title,
          description,
          image: pathImages,
          userId: id,
        });

        res.status(201).json({ message: "success", animal });
      } else {
        res.status(403).json({ message: "Empty fields" });
      }
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  }
);

router.put("/:animalId", verifyAccessToken, upload.single("image"), async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const { animalId } = req.params;
    const { title, description } = req.body;

    let pathImages
    
 
    if (!req.file){
      pathImages = AnimalServices.getOneAnimalbyId(+animalId).image
    }else{
      pathImages = "/img/" + req.file.filename;
    }
    
    console.log(title, description);

    if (
      title.trim() !== "" &&
      description.trim() !== ""
    ) {
      const animal = await AnimalServices.updateAnimal(+animalId, userId, {
        title,
        description,
        image: pathImages,
      });
      res.status(200).json({ message: "success", animal, verifyAccessToken });
    } else {
      res.status(403).json({ message: "Empty fields", verifyAccessToken });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message, verifyAccessToken });
  }
});

router.delete("/:animalId", verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const { animalId } = req.params;
    const animal = await AnimalServices.deleteAnimal(+animalId, 1);
    if (animal) {
      res.status(200).json({ message: "success", animal });
      return;
    }
    res.status(400).json({ message: "Wrong id of user" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
