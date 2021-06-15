const express = require("express");
//const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();

app.use(cors())

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Pokemon application." });
});

require("./routes/pokemon.routes.js")(app);
require("./routes/trainer.routes.js")(app);
//require("./routes/pokemon.routes.js")(app);

// set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
