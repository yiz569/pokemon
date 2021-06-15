const sql = require("./db.js");

//constructor
const Trainer = trainer => {
    this.name = trainer.name;
    this.pokemon_owned = trainer.pokemon_owned;
};

Trainer.getAll = result => {
    sql.query("SELECT * FROM Trainers", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Trainers: ", res);
        result(null, res);
    });
};

module.exports = Trainer;
