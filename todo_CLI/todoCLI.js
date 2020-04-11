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

//Function that creates a menu with option for the user:
function menu() {
    const option = `(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n`
    rl.question(option, answer => {
        if (answer === "v") return view();
        else if (answer === "n") return add();
        else if (answer.includes("c")) return complete(answer);
        else if (answer[0] === "d") return del(answer);
        else if (answer === "q") return quit();
        else return `Choose a existing option.`;
    });
};

let box = `[ ]`;
let lists = [];

//This function creates shows the list
function view() {
    if (lists.length <= 0) {
        console.log(`The list is empty.`);
    } else {
        lists.forEach((list, index) => {
            console.log(`${index} ${list}\n`)
        });
    }
    return menu();
};

// Function that adds chores to the list:
function add() {
    rl.question(`What do you want to add to the list?\n`, answer => {
        let list = `${box}${answer}`
        lists.push(list);
        return menu();
    });
};

// Function that adds a ✓ when the chore is completed:
function complete(answer) {
    let number = parseInt(answer.substr(1));
    lists[number] = lists[number].replace("[ ]", "[✓]")
    console.log(`Completed "${lists[number].substr(3)}"`)
    return menu();
};

// Function to delete an item from the list:
function del(answer) {
    let number = parseInt(answer.substr(1));
    console.log(`Deleted ${lists[number]}\n`);
    lists.splice(number, 1);
    return menu();
};

// Function to quit the CLI:
function quit() {
    console.log(`See ya!`)
    rl.close();
};
menu();