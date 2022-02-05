var express = require("express");
const { verify } = require("../middleware");
var router = express.Router();


const Event = require("../models/event");



router.get("/",(req,res) => {
    Event.find({}, (err, events) => {
        res.send(events);
    });
});



router.get("/add",verify, (req,res) => {
    Event.find({}, (err, events) => {
        res.render("addEvent",{allevents:events});
    });
    
});
router.post("/add", verify, async (req, res) => {
    
    const eventName = req.body.eventName;
    const clubName = req.body.clubName;
    const eventDescription = req.body.eventDescription;
    const eventDate = req.body.eventDate;
    const eventForm = req.body.formLink;
    const eventEmbedCode = req.body.formEmbedCode;
    const imageLink = req.body.imageLink;

    console.log(JSON.stringify(req.body));
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

    await newEvent.save((err) => {
        if (err) console.log(err);
        
        // Club.findOne({ "clubName": clubName }, function (err, club) {
        //     if (club) {
        //         club.events.push(newEvent);
        //         club.save((err) => {
        //             if (err) {
        //                 res.send(err);
        //             } else {
        //                 res.send("Success");
        //             }
        //         });
        //     }
        // });
    })
    res.redirect("/events/add")
   
});




router.get("/delete/:_id", (req,res) => {
    const { _id } = req.params;
    Event.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/events/add");
      })
      .catch((err) => console.log(err));
});



module.exports = router;