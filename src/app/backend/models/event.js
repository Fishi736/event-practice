var mongoose = require('mongoose');

var event = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    type: { type: String, trim: true },
    date: { type: Date, trim: true },
    time: { type: String, trim: true },
    venue: { type: String, trim: true },
    link: { type: String, trim: true },
    numOfPersons: { type: Number, min: 10, max: 150, trim: true },
    instructions: { type: String, trim: true },
});

module.exports = mongoose.model('EventCollection', event)
