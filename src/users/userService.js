const userDal = require("./userDal");

const getUsers = () => {

    return new Promise(function (resolve, reject) {
        try {
            let users = userDal.getUsers();

            users.forEach(u => {
                if (typeof (u.age) !== 'number') {
                    throw new Error('Not a number Age ! ');
                }
                (Number(u.age) > 60) ? u.category = 'senior' : u.category = 'normal';
            });

            resolve(users);
        } catch (error) {
            reject(error);
        }

    });
};

const getUser = (id) => {
    return new Promise(function (resolve, reject) {
        try {
            let user = userDal.getUser(id);
            user.emploi = 'Cegedim';
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    getUsers,
    getUser
}