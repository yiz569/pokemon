module.exports = app => {
    const trainers = require("../controllers/trainer.controller.js");

    // Retrieve all Trainers
    app.get("/trainers", trainers.findAll);
};