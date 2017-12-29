var passport = require("passport");
var expressSession = require("express-session");

//Setup the passport module
module.exports = function (app, dataaccess, strategy) {

    app.use(expressSession({
        secret: 'authapp',
        resave: true,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(strategy);

    //used to store the user in the session when login is successful
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    //used to retrieve the user from the database using the id in the session
    passport.deserializeUser(function (id, done) {
        dataaccess.retriveUserById(id, function (err, user) {
            if (user) {
                done(null, user);
            }
            else {
                done(new Error('User ' + id + ' does not exist'));
            }
        });
    });

};