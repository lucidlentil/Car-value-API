const request = require('supertest')('https://jsonplaceholder.typicode.com'); 

const assert = require('chai').assert;
const expect  = require('chai').expect;
const request = require ('request')

//1. If the both the model and value data types are correct, return the calculated value
describe('Car value API', () => {
    it('POST /vehicle/value', () => {
        //Arrange
        let data = {
            "model": "Corolla", 
            "year": 2019
        }

        return request
        .post('/vehicle/value')
        .send(data)
        .then((res) => {
           
        /*let numericModel = alphabetPosition(data.model); 
        let modelStringArray = numericModel.split(' '); 
        let modelNumArray = modelStringArray.map(number => {
            return Number(number)
        }); 

        let modelSum = modelNumArray.reduce((accumulator, value) => {
            return accumulator + value; 
        }, 0);  

        let expected = 9619; 
         
        //Act
        let actual = (modelSum * 100) + data.year;

        //Assert
        expect(actual).toBe(expected);*/
        })
    })
})