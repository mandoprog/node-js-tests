
const getUsers = () => {

    const users = [
        {
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
        }
    ];

    return users;
};

module.exports = {
    getUsers
}