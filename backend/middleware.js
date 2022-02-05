var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


exports.verify = function(req, res, next){
    let accessToken = req.cookies.mcook

    //if there is no token stored in cookies, the request is unauthorized
    if (!accessToken){
        return res.status(403).send()
    }



    let payload
    try{
        //use the jwt.verify method to verify the access token
        //throws an error if the token has expired or has a invalid signature
        payload = jwt.verify(accessToken, "bcozimbatman");
        
        next();
        
    }
    catch(e){
        //if an error occured return request unauthorized error
        return res.status(401).send()
    }
}

exports.verifyreturn = function(req, res){
    let accessToken = req.cookies.mcook

    //if there is no token stored in cookies, the request is unauthorized
    if (!accessToken){
        return res.status(403).send()
    }



    let payload
    try{
        //use the jwt.verify method to verify the access token
        //throws an error if the token has expired or has a invalid signature
        payload = jwt.verify(accessToken, "bcozimbatman");
        
        return payload;
        
    }
    catch(e){
        //if an error occured return request unauthorized error
        return res.status(401).send()
    }
}