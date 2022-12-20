const express = require('express'); 

const env = require('dotenv'); 
env.config(); //loads all key value pairs from .env
const server = express(); //instantiate server
server.use(express.json()); 

let PORT = process.env.PORT || 3002

server.listen(PORT, () => { //callback function - when server starts listening to port it will trigger the console log function 
    console.log('listening on port', PORT)
}); 

function alphabetPosition(model) {
    let result = "";
    for (let i = 0; i < model.length; i++) {
        let code = model.toUpperCase().charCodeAt(i);
        if (code > 64 && code < 91) result += (code - 64) + " ";
        }
    return result.slice(0, result.length - 1);
}

function isFuture(year) {
        let thisYear = new Date().getFullYear(); 
        return year > thisYear; 
    }

server.post ('/vehicle/value', (req, res) => {
    let model = req.body.model;
    let year = req.body.year; 

    if (isFuture(year) === true || year <= 1900){
         res.send('There is an error - year cannot be in the future or before 1900')
        }


    if (typeof model !== 'string' || isNaN(year))  {
            res.send('There is an error - please check that you have entered a valid model and year')
        } 

    //Perfect scenario
    else {  
            let numericModel = alphabetPosition(model); 
            let modelStringArray = numericModel.split(' '); 
            let modelNumArray = modelStringArray.map(number => {
                return Number(number)
            }); 

            let modelSum = modelNumArray.reduce((accumulator, value) => {
                return accumulator + value; 
            }, 0);  
            let value = (modelSum * 100) + year;  
            res.send(`The estimated value of your car is $${value}`);
        }
})  

module.exports = alphabetPosition;