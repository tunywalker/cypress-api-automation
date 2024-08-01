class Data {
    headerPayload() {
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        };
    }

    bodyPayload() {
        return {
            "id": 555555,
            "username": "Tuma",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
        };
    }

    updatePayload(firstName, lastName) {
        return {
            "id": 555555,
            "username": "Tumaaaa",
            "firstName": firstName,
            "lastName": lastName,
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
        };
    }
}

export default Data;
