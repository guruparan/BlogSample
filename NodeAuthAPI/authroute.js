var express = require("express");
var passport = require("passport");

module.exports = function (dataaccess) {

    var authRouter = express.Router();

    //login function takes in the the username and password 
    //and returns the user if the login is success
    authRouter.post("/login", function (req, res) {
        passport.authenticate('local', function (err, user, info) {

            req.login(user, function (error) {
                if (error) {
                    res.status(400);
                    res.send("Invalid Credentials");
                }
                else {
                    res.send({ userId: user._id, userName: user.username });
                }
            });
        })(req, res);
    });

    //function to create the user when the signup is done
    authRouter.post("/signup", function (req, res) {
        if (req.isAuthenticated()) {
            res.status(400);
            res.send("User Already logged in");
        }
        else {
            //store the user in the database
            dataaccess.storeUser(req.body, function (err, user) {
                if (err) {
                    res.status(500);
                    res.send("Sorry something went wrong");
                }
                else {
                    res.send("User created " + user._id)
                }
            });
        }
    });

    //logout the user from the system
    authRouter.post("/logout", function (req, res) {
        if (req.isAuthenticated()) {
            req.logOut();
            res.send("Logout success");
        }
        else {
            res.status(400);
            res.send("User not logged in");
        }
    });

    return authRouter;
};