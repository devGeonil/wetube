// const express = require('express');
import express from "express";
const app = express();

const PORT = 4000;



//handlers
const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from Home");
const handleProfile = (req, res) => res.send("you are on my profile");

//middlewares
const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
}
app.use(betweenHome);




//routes
app.get('/',handleHome);
app.get('/profile',handleProfile)
app.listen(PORT, handleListening);
