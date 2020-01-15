let EventThing = require('../models/eventthing');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
let authentication = require("../authServer");


exports.index = function(req, res, next) {
    res.render('index',{title: 'testataan'});
};

//GET all events
exports.event_list = function(req, res, next){
    EventThing.find({}, 'eventname eventdate eventplace eventdescription')
    .exec(function (err,list_events){
        if (err) {return next(err); }
        res.send(list_events);
    });
};

//POST new event/** 
exports.event_create_post = [
    body('eventname').isLength({min:1}).trim().withMessage('Too short'),
    body('eventdate','invalid').optional({checkFalsy:true}).isISO8601(),
    body('eventplace').isLength({min:1}).trim().withMessage('Too short'),
    body('eventdescription').isLength({min:1}).trim().withMessage('Too short'),


    sanitizeBody('eventname').escape(),
    sanitizeBody('eventdate').escape(),
    sanitizeBody('eventplace').escape(),
    sanitizeBody('eventdescription').escape(),
    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()){
            res.send('unacceptable input')
            return;
        }
        else{
            let EventTh = new EventThing(
                {
                    eventname: req.body.eventname,
                    eventdate: req.body.eventdate,
                    eventplace: req.body.eventplace,
                    eventdescription: req.body.eventdescription
                });
                EventTh.save(function (err){
                    if (err) {return next(err);}
                res.redirect('/home');
                });
        }
    }
];