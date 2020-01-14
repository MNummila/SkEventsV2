let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let EventSchema = new Schema(
    {
        eventname: {type: String, required: true, min: 1, max: 200},
        eventdate: {type: Date, required: true},
        eventplace: {type: String, required: true, min: 1, max: 100},
        eventdescription: {type: String, required: true, min: 1, max: 1000},
    }
);

module.exports = mongoose.model('EventThing', EventSchema);