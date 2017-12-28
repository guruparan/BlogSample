
var express = require('express');
var dataAccess = require("./userdataaccess");
var authRoute = require("./authroute");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//get the strategy by using the dataaccess
var strategy = require("./loginstrategy")(dataAccess);

//setup app to use passport
require("./passportauth")(app, dataAccess, strategy);

//make sure that the same dataaccess is used everywhere to retrieve users
app.use("/auth", authRoute(dataAccess));

//sample request
app.get("/", function (req, res) {
    if (req.isAuthenticated()) {
        res.send("Hello from service");
    }
    else {
        res.status(401);
        res.send("Unauthorized request");
    }
});

var port = 5000;
app.listen(port, function () {
    console.log("Listening in Port " + port);
});
