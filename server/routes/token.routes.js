const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const generateTokens = require("../utils/authUtils");
const router = require("express").Router();

router.get("/refresh", verifyRefreshToken, async (req, res) => {
  try {
    const {user} = res.locals;

    // console.log(user);
    

    const { accessToken, refreshToken } = generateTokens({ user });

    res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 12,
        httpOnly: true,
      })
      .json({ message: "success", accessToken, user });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
