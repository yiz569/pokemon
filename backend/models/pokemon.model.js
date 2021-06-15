const sql = require("./db.js");

// constructor for pokemon
const Pokemon = pokemon => {
    this.name = pokemon.name;
    this.move = pokemon.move;
    this.type = pokemon.type;
};

Pokemon.findById = (pokemonId, result) => {
    sql.query(`SELECT * FROM Pokemon WHERE ID = ${pokemonId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found pokemon: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Pokemon with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = Pokemon;