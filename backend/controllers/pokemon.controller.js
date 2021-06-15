const Pokemon = require("../models/pokemon.model.js");

exports.findOne = (req, res) => {
    Pokemon.findById(req.params.pokemonId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Pokemon with id ${req.params.pokemonId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Pokemon with id " + req.params.pokemonId
          });
        }
      } else res.send(data);
    });
};