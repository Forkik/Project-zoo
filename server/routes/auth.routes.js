const router = require("express").Router();
const UserServices = require("../services/User.services");
const bcrypt = require("bcrypt");
const generateTokens = require("../utils/authUtils");
const jwt = require("jsonwebtoken");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      return res.status(400).json({ message: "Empty values" });
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const user = await UserServices.createUser({
      name,
      email,
      password: hashPassword,
    });

    if (user) {
      delete user.dataValues.password;
      res.locals.user = user;

      const { accessToken, refreshToken } = generateTokens({ user });
      res
        .status(201)
        .cookie("refreshToken", refreshToken, {
          maxAge: 1000 * 60 * 60 * 12,
          httpOnly: true,
        })
        .json({ message: "success", user, accessToken });
      return;
    }
  } catch ({ message }) {
    res.status(500).json({ message: message });
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email.trim() === "" || password.trim() === "") {
      return res.status(400).json({ message: "Empty values" });
    }

    console.log(email, password);

    let user = await UserServices.getUser(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user) {
      const compare = await bcrypt.compare(password, user.password);

      if (compare) {
        const { accessToken, refreshToken } = generateTokens({ user });

        res
          .status(200)
          .cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 12,
            httpOnly: true,
          })
          .json({ message: "success", user, accessToken });
        return;
      }
      return res.status(400).json({ message: "Wrong password" });
    }
  } catch ({ error }) {
    res.status(500).json({ message: error });
  }
});

router.delete("/logout", (req, res) => {
  try {
    res.locals.user = undefined;
    res.clearCookie("refreshToken").status(200).json({ message: "success" });
  } catch ({ error }) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
