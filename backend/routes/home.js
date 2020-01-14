let express = require('express');
let router = express.Router();

let event_controller = require('../controllers/eventController');


//router.get('/',function(req,res,next){
//    res.send('api is working');
//});


//GET home all data
router.get('/', event_controller.event_list);

//POST uusi tapahtuma to db
router.post('/', event_controller.event_create_post);

module.exports = router;