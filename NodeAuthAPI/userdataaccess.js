module.exports = {

    //get the user from the database using ID
    retriveUserById: function (userid, done) {
        done(null, {
            userId: userid,
            username: "Guru"
        });
    },

    //get the user from the database using username
    retriveUserByUserName: function (username, done) {
        return done(null, {
            userId: 1,
            username: username
        });
    },

    //store the user to the database
    storeUser: function (user, done) {
        done(null, {
            userId: 8,
            username: user.username
        });
    }
};
