const express = require("express");
const app = express();
const path = require('path');

const port = process.env.port || 4200;
app.set("view engine", "ejs");

app.use("/static", express.static("static"));
app.use(require("./routes/routes"));

const server = app.listen(port, function(){
    console.log(`server is running at ${port}`);
});

const socket = require("./controllers/socket")(server);