describe('İlk Test', () => {
  it('Create User', () => {
    const postData = {
    "id": 555555,
    "username": "Tuma",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    }

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: postData,
      headers: headers
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  });

  it('Update User', () => {
    const postData = {
      "id": 555555,
      "username": "tumaaaa",
      "firstName": "test",
      "lastName": "qa",
      "email": "testqa@test.com",
      "password": "test123",
      "phone": "54545454545",
      "userStatus": 1
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    }

    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/user/mehmetcan',
      body: postData,
      headers: headers
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  });

  it('Delete User', () => {

    const headersBody = {
      'accept': 'application/json'  
      
    }

    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/user/tumaaaa',
      headers: headersBody
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  });

  it('Login User', () => {
    
    const queryBody={
      "username":"can",
      "password":"1234"
    };
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/login',     
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  });

  it('Logout  User', () => {
    
  
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/logout'  
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
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
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    }

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithArray',
      body: postData,
      headers: headers
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  });


});