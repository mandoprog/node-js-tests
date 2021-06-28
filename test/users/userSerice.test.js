const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

const userDal = require("./../../src/users/userDal");
const userService = require("./../../src/users/userService");

before(() => {

    const mockedUsers = [
        {
            id: 987,
            name: 'Mandalorian',
            age: 61
        },
        {
            id: 1735,
            name: 'Luk Skywalker',
            age: 55
        }
    ];

    sinon.stub(userDal, 'getUsers').returns(mockedUsers);

});

describe('userService test', function () {

    it('should return all users when call getUsers', async () => {
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

    
});