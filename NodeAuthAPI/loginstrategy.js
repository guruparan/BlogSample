var Strategy = require("passport-local").Strategy;

//use locat strategy to validate the login credentials
//this takes a dataaccess as argument so the we can use any type of dataaccess class
//Eg Mongoose, SQL etc
module.exports = function (dataaccess) {
    //used to map the object thats posted in the login call
    return new Strategy({
        usernameField: "username",
        passwordField: "password"
    }, function (username, password, done) {
        //used to validate the user against the database
        //Additional steps like encryption can be done here
        dataaccess.retriveUserByUserName(username, done);
    });

};