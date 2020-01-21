const jwt = require("jsonwebtoken");

// tässä vielä se osa mikä tarkistaa onko oikee tokeni
exports.verify_token = function(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    // nyt on onnisteesti tarkistettu joten voidaan siirtyä eteenpäin
    next();
  });
};
