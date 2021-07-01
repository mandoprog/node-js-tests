const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

const userDal = require("./../../src/users/userDal");
const userService = require("./../../src/users/userService");

let sandbox;
let getUsersStub;
let getUserDalStub;

const mockedUsers = [{
    id: 987,
    name: 'Mandalorian',
    age: 61
},
{
    id: 1735,
    name: 'Luk Skywalker',
    age: 55
}];


describe('userService test', function () {

    before(() => {
        sandbox = sinon.createSandbox();
        getUsersStub = sandbox.stub(userDal, 'getUsers');
        getUserDalStub = sandbox.stub(userDal, 'getUser').withArgs(987);
    });

    it('should return all users when call getUsers', async () => {
        getUsersStub.returns(mockedUsers);

        const responseUsers = await userService.getUsers();
        expect(responseUsers.length).to.deep.equal(2);

        expect(responseUsers[0].id).to.deep.equal(987);
        expect(responseUsers[0].name).to.deep.equal('Mandalorian');
        expect(responseUsers[0].age).to.deep.equal(61);
        expect(responseUsers[0].category).to.deep.equal('senior');

        expect(responseUsers[1].id).to.deep.equal(1735);
        expect(responseUsers[1].name).to.deep.equal('Luk Skywalker');
        expect(responseUsers[1].age).to.deep.equal(55);
        expect(responseUsers[1].category).to.deep.equal('normal');
    });

    it('should return error when call getUsers', async () => {
        mockedUsers[0].age = 'thisShouldGetError';
        getUsersStub.returns(mockedUsers);

        try {
            const responseUsers = await userService.getUsers();
        } catch (error) {
            expect(error.message).to.deep.equal('Not a number Age ! ');
        }

    });

    it('Should return right User by its ID', async () => {
        // WHen : Mock
        getUserDalStub.returns(mockedUsers[0]);

        // Then : Execution
        const uniqueUser = await userService.getUser(987);

        // Asserts
        expect(uniqueUser.id).to.deep.equal(987);
        expect(uniqueUser.name).to.deep.equal('Mandalorian');
        expect(uniqueUser.age).to.deep.equal('thisShouldGetError');
        expect(uniqueUser.category).to.deep.equal('senior');
        expect(uniqueUser.emploi).to.deep.equal('Cegedim');

    });

    after(() => {
        sandbox.restore();
    });

});