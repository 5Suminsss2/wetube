import express from "express";
//const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);
/*
function handleHome(req, res) {
    //console.log(req);
    res.send("Hi from Home!");

}*/

const handleHome = (req, res) => res.send("Hi from ddd!");

const handleProfile = (req, res) => res.send("U are on my profile");

const betweenHome = (req, res, next) => {
    console.log("I'm broken");
    next();
}


app.use(betweenHome);

app.get("/", handleHome);

app. get("/profile", handleProfile);

app.listen(PORT, handleListening);