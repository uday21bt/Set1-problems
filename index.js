
/// print Diamond pattern 
function printDiamondPattern(rows) {
    if (rows % 2 === 0) {
      console.log("Please enter an odd number of rows.");
      return;
    }
  

    for (let i = 1; i <= rows; i += 2) {
      let spaces = (rows - i) / 2;
      let stars = i;
  
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
  

    for (let i = rows - 2; i >= 1; i -= 2) {
      let spaces = (rows - i) / 2;
      let stars = i;
  
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
  }
  

  const row = parseInt(prompt("Enter the number of rows (odd number):"));
  

  if (isNaN(row) || row % 2 === 0) {
    console.log("Invalid input. Please enter an odd number of rows.");
  } else {
    // Print the diamond pattern
    printDiamondPattern(row);
  }


//to print a pyramid pattern

  function printNumberPyramid(row) {
    for (let i = 1; i <= row; i++) {
      let row = '';
  
      // Add spaces before numbers
      for (let j = 1; j <= row - i; j++) {
        row += '  ';
      }
  
      // Add ascending numbers
      for (let k = 1; k <= i; k++) {
        row += k + ' ';
      }
  
      // Add descending numbers (excluding the last number)
      for (let l = i - 1; l >= 1; l--) {
        row += l + ' ';
      }
  
      // Print the current row
      console.log(row);
    }
  }
  
  // Get user input for the number of rows
  const rows = parseInt(prompt("Enter the number of rows:"));
  
  // Check if the input is a valid positive number
  if (isNaN(row) || row <= 0) {
    console.log("Invalid input. Please enter a positive number of rows.");
  } else {
    // Print the number pyramid
    printNumberPyramid(row);
  }

  ///to print a triangle pattern

  function printRightAngleTriangle(rou) {
    for (let i = 1; i <= rou; i++) {
      let rou= '';
  
      
      for (let j = 1; j <= i; j++) {
        rou += '* ';
      }
  
      
      console.log(rou);
    }
  }
  
  // Get user input for the number of rows
  const rou = parseInt(prompt("Enter the number of rows:"));
  
  // Check if the input is a valid positive number
  if (isNaN(rou) || rou <= 0) {
    console.log("Invalid input. Please enter a positive number of rows.");
  } else {
    // Print the right-angled triangle pattern
    printRightAngleTriangle(rou);
  }



//Write a program that takes a day number (1 for Sunday, 2 for Monday, etc.) and
//uses a switch statement to display the corresponding day name.

function getDayName(dayNumber) {
  let dayName;

  switch (dayNumber) {
      case 1:
          dayName = "Sunday";
          break;
      case 2:
          dayName = "Monday";
          break;
      case 3:
          dayName = "Tuesday";
          break;
      case 4:
          dayName = "Wednesday";
          break;
      case 5:
          dayName = "Thursday";
          break;
      case 6:
          dayName = "Friday";
          break;
      case 7:
          dayName = "Saturday";
          break;
      default:
          dayName = "Invalid day number";
  }

  return dayName;
}

// Example usage:
const dayNumber = 3;
const dayName = getDayName(dayNumber);
console.log(`Day ${dayNumber} is ${dayName}`);

//Create a program that counts and prints the number of vowels in each string using
//a for loop

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
          vowelCount++;
      }
  }

  return vowelCount;
}

// Example strings
const strings = ["Hello World", "JavaScript is fun", "OpenAI GPT"];

// Count and print the number of vowels in each string
for (let i = 0; i < strings.length; i++) {
  const currentString = strings[i];
  const currentVowelCount = countVowels(currentString);
  console.log(`String: "${currentString}", Vowel Count: ${currentVowelCount}`);
}

//Using a for loop, calculate the sum of squares of the first 10 natural numbers.

let sumOfSquares = 0;

for (let i = 1; i <= 10; i++) {
    sumOfSquares += i * i;
}

console.log("Sum of squares of the first 10 natural numbers:", sumOfSquares);

//Write a for loop to print the multiplication table (up to 10) for a given number.

printMultiplicationTable=(number)=>{

  console.log(`Multiplication table for ${number}:`);

    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(`${number} * ${i} = ${result}`);
    }

}

printMultiplicationTable(5)

//Write a program to find the sum of all even numbers between 1 and 50 using a
//while loop.

let numbers = 1;

while (numbers <= 50) {
  if (numbers % 2 === 0) {
    console.log(numbers + " is an even number");
  }
  numbers++;
}

//Create a while loop that calculates the factorial of a given number.

//how to find even numbers in javascript by using while loop

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}


