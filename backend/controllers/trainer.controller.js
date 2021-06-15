const Trainer = require("../models/trainer.model.js");

exports.findAll = (req, res) => {
    Trainer.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving trainers."
            });
        else res.send(data);
    });
};