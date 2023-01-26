# Car-value-API
Task: Create an API that takes 2 parameters as input (JSON) - the model of a car and the numeric year of the car - for which the output will be the suggested value of the car. This was subsequently set up to be automatically deployed to Microsoft Azure using GitHub Actions.

Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value.  Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).  Space and any other signs are ignored.   For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.  If input values are not valid, return an error.

Technologies used: Node.js, Azure WebApps 
