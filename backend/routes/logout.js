require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const router = express.Router();

// tähän kutsuun halutaan refeshToken
// poistaa refeshTokenin systeemistä
app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token);
  res.sendStatus(204);
});
