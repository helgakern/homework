/* Todo CLI – Week 3
Write an interactive CLI todo list application using Node's 
readline and fs modules. The following describes what each 
action does. It would be best to implement each action as 
its own function.
*/

const readline = require("readline");

//Creating interface:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome to Todo CLI! \n -------------------- ');
