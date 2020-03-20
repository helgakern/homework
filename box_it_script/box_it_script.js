// const arg = process.argv[2];

// This function takes a number as argument and returns that number of horizontal bars as a string.    
function drawLine(num){
    return '─'.repeat(num);
};
// console.log(drawLine(4));

// This function takes a number as argument and draw a top border.
function drawTopBorder(num){
    return '┌'+drawLine((num - 2))+'┐';
 // return '┌'+'─'.repeat(num - 2)+'┐';
};
// console.log(drawTopBorder(4));

// This function takes a number as argument and draw a middle border.
function drawMidleBorder(num){
    return '├'+drawLine((num - 2))+'┤';
    // return '├'+'─'.repeat(num - 2)+'┤';
};
// console.log(drawMidleBorder(4));

// This function takes a number as argument and draw a bottom border.
function drawBottomBorder(num){
    return '└'+drawLine((num - 2))+'┘';
    // return '└'+'─'.repeat(num - 2)+'┘';
};
// console.log(drawBottomBorder(4));

// This function takes a string as argument and surrounds it with vertical lines and returns it.
function drawBarsAround(str){
    return '│'+ str +'│';
};
// console.log(drawBarsAround('Helga'));

// This function that takes an array of strings and returns a string where each is in a single column table.
// To add "new lines" to a string, use the \n special character. In a string, \n characters will 
//display as new lines  when logged with console.log(...).

function boxIt(arr){
    return drawTopBorder(arr[0].length) +`\n`+ drawBarsAround(arr[0]) +`\n`+ drawBottomBorder(arr[0].length);
    // return drawTopBorder(arr[1].length) +`\n`+ drawBarsAround(arr[1]) +`\n`+ drawBottomBorder(arr[1].length);

    // return drawTopBorder(arr.length)+`\n`+ drawBarsAround(arr.length) +`\n`+ drawMidleBorder() +`\n`+ drawBarsAround() +`\n`+ drawBottomBorder();

};
// console.log(boxIt("Jon Snow"));
console.log(boxIt(['Jon Snow', 'Cersei Lannister']));



// const array = str.split()

// function boxIt([strOne, strTwo]){
//     return drawTopBorder()+`\n`+ drawBarsAround() +`\n`+ drawMidleBorder() +`\n`+ drawBarsAround() +`\n`+ drawBottomBorder();
// };

function boxIt(arr){
    let nameOne = arr[0];
    let nameTwo = arr[1];

    return drawTopBorder(arr[0].length) +`\n`+ drawBarsAround(arr[0]) +`\n`+ drawBottomBorder(arr[0].length);
    // return drawTopBorder(arr[1].length) +`\n`+ drawBarsAround(arr[1]) +`\n`+ drawBottomBorder(arr[1].length);

    // return drawTopBorder(arr.length)+`\n`+ drawBarsAround(arr.length) +`\n`+ drawMidleBorder() +`\n`+ drawBarsAround() +`\n`+ drawBottomBorder();

};
// console.log(boxIt("Jon Snow"));
console.log(boxIt(['Jon Snow', 'Cersei Lannister']));


