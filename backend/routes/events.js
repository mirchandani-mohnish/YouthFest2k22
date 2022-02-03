var express = require("express");
var router = express.Router();


const Event = require("../models/event");



router.get("/",(req,res) => {
    Event.find({}, (err, events) => {
        res.send(events);
    });
});




router.post("/add", (req, res) => {
    
    const eventName = req.body.eventName;
    const clubName = req.body.clubName;
    const eventDescription = req.body.eventDescription;
    const eventDate = req.body.eventDate;
    const eventForm = req.body.formLink;
    const eventEmbedCode = req.body.formEmbedCode;
    const imageLink = req.body.imageLink;
    let newEvent = new Event({
        eventName: eventName,
        eventDescription: eventDescription,
        clubName: clubName,
        date: eventDate,
        eventForm: eventForm,
        eventEmbedCode: eventEmbedCode,
        imageLink: imageLink
    })
    console.log(newEvent);

    newEvent.save((err) => {
        if (err) console.log(err);

        Club.findOne({ "clubName": clubName }, function (err, club) {
            if (club) {
                club.events.push(newEvent);
                club.save((err) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send("Success");
                    }
                });
            }
        });
    })
   
});


module.exports = router;