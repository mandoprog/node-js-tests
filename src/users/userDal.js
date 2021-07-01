
const users = [{
    id: 1,
    name: 'Bob',
    age: 66,
    // category: ''
},
{
    id: 2,
    name: 'Nick',
    age: 23,
    // category: ''
}];

const getUsers = () => {
    return users;
};

const getUser = (id) => {
    return users.filter(u => u.id == id);
};

module.exports = {
    getUsers,
    getUser
}