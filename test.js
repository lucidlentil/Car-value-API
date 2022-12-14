const request = require('supertest')('https://jsonplaceholder.typicode.com'); 

const assert = require('chai').assert;

describe('Car value API', () => {
    it('POST /value', () => {
        return request
        .post('/value')
        .expect
    } )
    it('GET /users', () =>{
    // Make a GET request to the users route 
    return request
    .get('/users')
    .expect(200)
    .then((res) => {
        // assert data bieng return to not be empty
        assert.isNotEmpty(res.body);
        });
    });
});