require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");

// dev ratkaisu siirrä homma tietokantaan
let refreshTokens = [];
// dev ratkaisu siirrä homma tietokantaan
// Admin , password
const users = [
  {
    name: "Admin",
    password: "$2b$10$5Qv.qDpbdhrj87iWBjB5JOwJdW3BWVSaLSIBo72.Zfo1iEfhmBPYK"
  }
];
// tähän kutsuun halutaan käyttis ja salasana
// palauttaa refeshTokenin ja accessTokenin, jos onnistunut kirjautuminen
router.post("/", async (req, res) => {
  // tarkistetaan onko käyttäjä olemassa
  const user = users.find(user => user.name === req.body.name);
  if (user == null) return res.status(400).send("Käyttäjää ei löydy");
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      // kirjautuminen onnistui, joten tehdään tokeni
      const accessToken = generateAccessToken(user);
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
      // dev ratkaisu siirrä homma tietokantaan
      refreshTokens.push(refreshToken);
      res.json({ accessToken: accessToken, refreshToken: refreshToken });
    } else {
      // salasana väärin
      res.send("Kirjautuminen epäonnistui");
    }
  } catch {
    res.status(500).send();
  }
});

// generoidaan accessTokeni, joka umpeutuu tunnin päästä
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
}

module.exports = router;
