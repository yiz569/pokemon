module.exports = app => {
    const pokemons = require("../controllers/pokemon.controller.js");

    // Retrieve a single Pokemon with pokemonId
    app.get("/pokemons/:pokemonId", pokemons.findOne);
};