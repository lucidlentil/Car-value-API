const express = require('express'); 

const env = require('dotenv'); 
env.config(); //loads all key value pairs from .env
const server = express(); //instantiate server
server.use(express.json()); 

let PORT = process.env.PORT || 3002

server.listen(PORT, () => { //callback function - when server starts listening to port it will trigger the console log function 
    console.log('listening on port', PORT)
}); 

/*server.get('/fifa', (req,res) => { //GET for retrieving data
    res.send("Welcome to the FIFA World Cup API")
});*/
 

server.post ('/vehicle/value', (req, res) => {
    let model = req.body.model;
    let year = req.body.year; 

    function isFuture(year) {
        let thisYear = new Date().getFullYear(); 
        return year > thisYear; 
    }

    function containsNumber(model) {
        return /[0-9]/.test(model); 
    }

    if (isFuture(year) === true){
         res.send('There is an error - year cannot be in the future')
        }
    if (typeof model !== 'string' || isNaN(year)) {
            res.send('There is an error - please enter a valid model and year')
        } 
    if (containsNumber(model) === true) { 
            res.send('There is a number in your model name') 
            /*function alphabetPosition(model) {
                let result = "";
                for (let i = 0; i < model.length; i++) {
                    let code = model.toUpperCase().charCodeAt(i)
                    if (code > 64 && code < 91) result += (code - 64) + " ";
                }
            return result.slice(0, result.length - 1);
            };

            let numericModel = alphabetPosition(model); 
            let modelStringArray = numericModel.split(' '); 
            let modelNumArray = modelStringArray.map(number => {
                return Number(number)
            }); 

            let modelSum = modelNumArray.reduce((accumulator, value) => {
                return accumulator + value; 
            }, 0);  
            let value = (modelSum * 100) + year;  
            res.send(`The estimated value of your car is $${value}`);*/
        }

    //Perfect scenario
    else {  
            function alphabetPosition(model) {
                let result = "";
                for (let i = 0; i < model.length; i++) {
                    let code = model.toUpperCase().charCodeAt(i)
                    if (code > 64 && code < 91) result += (code - 64) + " ";
                }
            return result.slice(0, result.length - 1);
            }
            console.log(alphabetPosition(model));

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

server.get ('/vehicle', (req, res) => {
    res.send(vehicle)
})

const teams = [{'name':'Netherlands', 'group': 'A'}, {'name':'Senegal', 'group': 'B'}, {'name':'Qatar', 'group': 'A'}, {'name':'Ecuador', 'group': 'B'}];


server.get('/fifa/teams', (req, res) => {
    res.send(teams); 
})

server.post('/fifa/teams', (req, res) => { //POST for adding data
    //let team = req.body.name;
    //teams.push(team); - to add just one team
    teams = [...teams, ...req.body]; //spread operator to combine all of teams with all of the array added to body
    res.send('Team added successfully'); 
});  

/*export const filterTeamsByGroup = (group) => {
    return teams.filter(team => team.group === group)
}

server.get('/fifa/teams/group/:group', (req, res) => {
    res.send(filterTeamsByGroup(req.params.group)); 
})*/