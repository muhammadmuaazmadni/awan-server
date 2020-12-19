const express = require('express')
const PORT = process.env.PORT || 5000
const path = require('path')

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? food or water");
})
server.get("/water", (req, res, next) => {
    console.log("some one is asking water");
    res.send("here is water");
})

server.get("/food", (req, res, next) => {
    console.log("some one is asking food");
    res.send("here is food");
})

server.listen(PORT || 5000), () => {
    console.log("server is running on port 5000"+ PORT);
};