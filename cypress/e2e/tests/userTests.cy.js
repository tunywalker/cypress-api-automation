import Data from "../data_helper/data";
import Params from "../data_helper/params";
const data = new Data();
const params = new Params();
var url =params.url();
describe('İlk Test', () => {

  it('Create User', () => { 
    cy.request({
      method: 'POST',
      url: url+'user',
      body: data.bodyPayload(),
      headers: data.headerPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      // Ayrıca response içeriğini de kontrol edebilirsiniz
      // expect(response.body).to.have.property('message', 'User created successfully');
    });
  });

  it('Update User', () => { 
    cy.request({
      method: 'PUT',
      url: url+'user/mehmetcan', // Burada kullanıcı adı doğru olmalı
      body: data.updatePayload("ahmet","mehmet"),
      headers: data.headerPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      // Ayrıca response içeriğini de kontrol edebilirsiniz
    });
  });

  it('Delete User', () => {  
    cy.request({
      method: 'DELETE',
      url: url+'user/Tumaaaa', // Burada kullanıcı adı doğru olmalı
      headers: data.headerPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      // Ayrıca response içeriğini de kontrol edebilirsiniz
    });
  });

  it('Login User', () => {
    const queryBody = {
      username: "can",
      password: "1234"
    };
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/login?username=${queryBody.username}&password=${queryBody.password}`,
      // GET isteği ile veri gönderimi URL üzerinden yapılır
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      // Ayrıca response içeriğini de kontrol edebilirsiniz
    });
  });

  it('Logout User', () => {
    cy.request({
      method: 'GET',
      url: url+'user/logout'
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      // Ayrıca response içeriğini de kontrol edebilirsiniz
    });
  });

  it('Create UserWithArray', () => {
    const postData = [
      {
        "id": 472038,
        "username": "aBcDeFgH",
        "firstName": "WqZxCv",
        "lastName": "LmNpQrSt",
        "email": "jKlMn@test.com",
        "password": "uIoPqR1234",
        "phone": "+19123456789",
        "userStatus": 1
      },
      {
        "id": 859371,
        "username": "XyZ12345",
        "firstName": "AaBbCc",
        "lastName": "DdEeFfGg",
        "email": "qWert@example.com",
        "password": "zXcVbNm987",
        "phone": "+19876543210",
        "userStatus": 0
      }
    ];

    cy.request({
      method: 'POST',
      url: url+'user/createWithArray',
      body: postData,
      headers: data.headerPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      // Ayrıca response içeriğini de kontrol edebilirsiniz
    });
  });

});
