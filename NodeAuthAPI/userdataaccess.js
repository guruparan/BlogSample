var mongoose = require("mongoose");
var mongoConnection = "mongodb://localhost/authsample";

var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

var UserModal = mongoose.model('Users', userSchema);
mongoose.connect(mongoConnection);


module.exports = {

    //get the user from the database using ID
    retriveUserById: function (userid, done) {
        UserModal.findOne({ _id: userid }, done);
    },

    //get the user from the database using username
    retriveUserByUserName: function (userName, done) {
        UserModal.findOne({ username: userName }, done);
    },

    //store the user to the database
    storeUser: function (user, done) {
        var newUser = new UserModal({
            username: user.username,
            password: user.password
        });

        newUser.save(function (err, userObj) {
            done(err, userObj);
        });
    }
};
