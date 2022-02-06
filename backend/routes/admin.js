var express = require("express");
var router = express.Router();

const bcrypt = require('bcryptjs')
const Admin = require("../models/admin");
const jwt = require('jsonwebtoken');



router.get("/", (req,res) => {
    res.render("login");
})


router.post("/login",async (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    if (!username || !password){
        return res.status(401).send();
    };
    
    
    // search for the user based on username in database
    const tempuser = await Admin.findOne({userName: username}); 
    let payload;
    
    
    if(!tempuser || tempuser === null){
        console.log("not authorized");
        res.redirect('/admin');


    }else{
        
        try{
            payload = {username: username};
            if(await bcrypt.compare(req.body.password,tempuser.passWord)){
                console.log("logged in");
                

                // create accesstoken
                let accessToken = jwt.sign(payload, "bcozimbatman", {
                    algorithm: "HS256",
                    expiresIn: 480
                });
                
                

                //create the refresh token
                let refreshToken = jwt.sign(payload, "bcozimnotbatman", {
                    algorithm: "HS256",
                    expiresIn: 86400
                });
                
                tempuser.token = refreshToken;
                
                res.cookie("mcook", accessToken, {secure: true, httpOnly: true});
                res.redirect('/events/add');
            }else{
                console.log("failed");
                res.status(203).send();
            }
        }catch(error){
            console.log(error);
            res.redirect('/admin');
        }
            

    }
});




module.exports = router;
