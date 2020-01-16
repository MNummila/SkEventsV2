require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const router = express.Router();

// tähän kutsuun halutaan refeshToken
// palauttaa uuden accessTokenin
app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

// generoidaan accessTokeni, joka umpeutuu tunnin päästä
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
}
