//var total = 0,
//    count = 1;
//while (count <= 10) {
//    total += count;
//    count++;
//}
//console.log(total);


//var ten = 10;
//console.log(ten * ten);

//var mood = "light";
//console.log(mood);
//
//var mood = "dark";
//console.log(mood);

//var luigisDebt = 140;
//luigisDebt -= 55;
//console.log(luigisDebt);
//
//alert("It's getting late!!");

// Exercise 1, Triangle 

//// My Solution
//var pwnd = "#";
//for (var i = 0; i < 7; i++) {
//    console.log(pwnd);
//    pwnd += "#";
//}

// Book Solution
//for (var line = "#"; line.length < 8; line += "#") // sets line = "#'; sets condition to stop when line length is 7 (7 #'s); adds another # to line after each iteration
//
//    console.log(line);

// End Exercise 1

//for (var star = "*"; star.length < 11; star += "*")
//    console.log(star);

// Exercise 2 FizzBuzzz
//for (var i = 1; i <= 100; i++) {
//    if (i % 3 == 0 && i % 5 == 0) {
//        console.log("FizzBuzz");
//    } else if (i % 3 == 0) {
//        console.log("Fizz");
//    } else if (i % 5 == 0) {
//        console.log("Buzz");
//    } else
//        console.log(i);
//} // End Exercise 2
//
//// Book Solution for Exercise 2
//for (var n = 1; n <= 100; n++) {
//  var output = "";
//  if (n % 3 == 0)
//    output += "Fizz";
//  if (n % 5 == 0)
//    output += "Buzz";
//  console.log(output || n);
//}

// Exercise 3
//var chess = " # # # #\n# # # # ";
//for (var i = 0; i < 4; i++) {
//    console.log(chess);
//    size = 8;
//} // I got stuck at part two of the exercise
//// Book Solution to Exercise 3
//
var size = 8; // sets size for 8, because our board needs to be 8 rows long

var board = ""; // initializes board as an empty string

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) // for all values with 0 remainder after division by 2 (including 0)
            board += " "; // assigns a space to the empty board variable
        else // essentially chooses every odd iteration and begins it with a "#"
            board += "#";
    }
    board += "\n"; // adds a line break 
}

console.log(board);
// End of Book Solution for Exercise 3   //ask Erty to help you break this down!!!