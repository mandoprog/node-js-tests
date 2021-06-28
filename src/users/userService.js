const userDal = require("./userDal");

const getUsers = () => {
    return new Promise(function (resolve, reject) {

        let users = userDal.getUsers();

        users.forEach(u => {
            u.age > 60 ? u.category = 'senior' : u.category = 'normal';
        });

        resolve(users);

    });
};

module.exports = {
    getUsers
}