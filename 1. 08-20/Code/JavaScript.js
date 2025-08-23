// 1. Swap 2 numbers without temporary variable

let num1 = 23
let num2 = 41

num = num1 + num2
num2 = num1
num1 = num - num2

console.log("Number 1 is: ",num1)
console.log("Number 2 is: ",num2)
console.log()




// 2. Find three large numbers among given array of numbers

let numArray = [5,6,1,3,2,8,9,4,5]

// maxNum = numArray[0]
// for(let i=0; i<9; i++){
//       if(maxNum < numArray[i]){
//         maxNum = numArray[i]
//       }
// }

//sort
let l = numArray.length
for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - i - 1; j++) {
        if (numArray[j] > numArray[j+1]) {
            let temp = numArray[j];
            numArray[j] = numArray[j+1];
            numArray[j+1] = temp;
        }
    }
}

console.log(numArray)

for (let i=l-3; i<l; i++){
     console.log(numArray[i])
}

console.log()



// 3. Break a whole number into digits like 4562 -> 4,5,6,2


let number = 4562;
let tempArr = [];
let numberArr = [];
let i = 0;

// Step 1: extract digits (in reverse order)
while (number > 0) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    tempArr[i] = remainder;
    i++;
}

// Step 2: reverse manually into numberArr
for (let j = 0; j < i; j++) {
    numberArr[j] = tempArr[i - j - 1];
}

console.log(numberArr);
console.log()




// 4. Scale a matrix

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let scalar = 2
let scaledMx = []

for(let i=0; i<matrix.length; i++){
    scaledMx[i] = []
    for(let j=0; j<matrix[i].length; j++){
        scaledMx[i][j] = scalar*matrix[i][j]
    }
}

for(let i=0; i<scaledMx.length; i++){
   console.log(scaledMx[i])
}

console.log()



// 5. Multiply two matrix

let matrix1 = [
    [1, 2, 3],
    [3, 4, 5]
];

let matrix2 = [
    [5, 6],
    [7, 8],
    [9, 0]
];

let result = [];

// Loop through rows of matrix1
for (let i = 0; i < matrix1.length; i++) {
    result[i] = []; // Initialize row
    // Loop through columns of matrix2
    for (let j = 0; j < matrix2[0].length; j++) {
        let sum = 0;
        // Loop through columns of matrix1 / rows of matrix2
        for (let k = 0; k < matrix1[0].length; k++) {
            sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
    }
}

// Print the result
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}

console.log()




// 6. Create a function to print elements from multi dimensional array

function printMultiDimensionalArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(`Element at [${i}][${j}] is: ${arr[i][j]}`);
        }
    }
}

let mx = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printMultiDimensionalArray(mx);

