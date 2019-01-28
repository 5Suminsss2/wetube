import express from "express";
//const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);


const handleHome = (req, res) => res.send("Hi from ddd!");

const handleProfile = (req, res) => res.send("U are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(morgan("dev"));
/* middleware가 중간에 연결 끊어주는 예시 
const middleware = (req, res, next) => {
    res.send("not happening");
} 

app.get("/", middleware, handleHome); */

app.get("/", handleHome);

app. get("/profile", handleProfile);

app.listen(PORT, handleListening);