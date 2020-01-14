require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

// dev ratkaisu siirrä homma tietokantaan
let refreshTokens = [];
// dev ratkaisu siirrä homma tietokantaan
const users = [];

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

// tähän kutsuun halutaan refeshToken
// poistaa refeshTokenin systeemistä
app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token);
  res.sendStatus(204);
});

// tähän kutsuun halutaan käyttis ja salasana
// palauttaa refeshTokenin ja accessTokenin, jos onnistunut kirjautuminen
app.post("/login", async (req, res) => {
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
      res.send('Kirjautuminen epäonnistui')
    }
  } catch {
    res.status(500).send();
  }  
});

// generoidaan accessTokeni, joka umpeutuu tunnin päästä
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
}

// dev ratkaisu 
app.listen(4000);

// Tässsä sit esimerkki miten toimii huom. toi authenticateToken kohta
app.get('/posts', authenticateToken, (req, res) => {
    // anna lisää tapahtuma
})

// tässä vielä se osa mikä tarkistaa onko oikee tokeni 
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      // nyt on onnisteesti tarkistettu joten voidaan siirtyä eteenpäin
      next()
    })
  }