let express = require("express");
let router = express.Router();

let event_controller = require("../controllers/eventController");
let auth_controller = require("../controllers/authController");

//router.get('/',function(req,res,next){
//    res.send('api is working');
//});

//GET home all data
router.get("/", event_controller.event_list);

//POST uusi tapahtuma to db
router.post(
  "/",
  auth_controller.verify_token,
  event_controller.event_create_post
);

//DELETE yksi tapahtuma
router.delete("/:id/", auth_controller.verify_token, event_controller.event_delete);


/*
router.delete("/",function(req,res,next){
  res.send("delete request");
});
*/
module.exports = router;