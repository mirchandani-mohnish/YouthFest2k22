const mongoose = require('mongoose');


const Schema = mongoose.Schema;


var eventSchema = new Schema({
    eventName: { type:String, required: true},
    eventDescription: {type: String},
    clubName: { type:String,required:true},
    date: {type:String},
    eventForm: {type: String},
    eventEmbedCode: {type:String},
    imageLink: {type: String}
});


module.exports = mongoose.model("event",eventSchema,"events");
