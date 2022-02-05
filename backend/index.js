const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const {verify} = require('./middleware')
const cookieparser = require('cookie-parser');

const cookieSession = require('cookie-session');
require('dotenv').config({path: __dirname + '/.env'});


// app initialization and middleware 
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors({
  origin: ['http://localhost:3000','http://youthfest.tk']
}));
app.use(cookieparser());

const session1 = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
};


app.use(cookieSession(session1));

app.set('view engine','ejs');
app.set('views','./templates');


const eventsR = require("./routes/events");
const adminR = require("./routes/admin");
app.use('/events', eventsR);
app.use('/admin', adminR);

//const userR = require("./routes/user");
//const logR = require("./routes/logInOut");

//const clubsR = require("./routes/clubs");
//app.use('/clubs', clubsR);

//app.use('/user', userR);
//app.use('/log', logR);



// Database and Port setup
const CONN_URL = `mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PWD}@cluster0.elyih.mongodb.net/yFEST?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8000

mongoose.connect(CONN_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {app.listen(PORT); console.log("server working");}).catch((e) => console.log(e.message));







// app.use(passport.initialize());
// app.use(passport.session());



// // routes
// require('./routes/passport-setup.js');

// // -------------- Google oAuth Routings ------------------------------
// app.get("/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get("/auth/google/yfest",
//     passport.authenticate("google", {
//       successRedirect: '/user',
//       failureRedirect: '/log/in'
// }));

// app.get("/failed", (req, res) => {
//   res.send("Try to Login through Ahduni email or else Login Failed");
// })
// app.get("/success", (req, res) => {
//   res.send("Login Success");
// })


// const userR = require("./routes/user");
// const logR = require("./routes/logInOut");
// // app.use('/clubs', clubs);
// // app.use('/events', events);
// app.use('/user', userR);
// app.use('/log', logR);


