let chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const sinon = require("sinon");

const app = require('./../../app');
const userService = require('./../../src/users/userService');

let sandbox;
let getUsersServiceStub;
const mockedUsers = [{
    id: 987,
    name: 'Mandalorian',
    age: 61,
    category: 'senior'
},
{
    id: 1735,
    name: 'Luk Skywalker',
    age: 55,
    category: 'normal'
}];


describe('User API Response', () => {

    before(() => {
        sandbox = sinon.createSandbox();
        getUsersServiceStub = sandbox.stub(userService, 'getUsers');
    });

    it('get users API should pass correctly', async () => {

        // Mock
        getUsersServiceStub.resolves(mockedUsers);

        // Then
        const res = await request(app).get('/user');
        const responseUsers = res.body;

        // Assert
        expect(res.status).to.deep.equal(200);
        expect(responseUsers[0].id).to.deep.equal(987);
        expect(responseUsers[0].name).to.deep.equal('Mandalorian');
        expect(responseUsers[0].age).to.deep.equal(61);
        expect(responseUsers[0].category).to.deep.equal('senior');

        expect(responseUsers[1].id).to.deep.equal(1735);
        expect(responseUsers[1].name).to.deep.equal('Luk Skywalker');
        expect(responseUsers[1].age).to.deep.equal(55);
        expect(responseUsers[1].category).to.deep.equal('normal');

    });

    it('get users API should return 500 Error', async () => {

        getUsersServiceStub.rejects(new Error('Error Age'));

        const res = await request(app).get('/user');
        console.log(res.status)
        expect(res.status).to.deep.equal(500);
       
    });

    after(() => {
        sandbox.restore();
    });

});