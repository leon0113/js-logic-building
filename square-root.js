

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a number: ', (input) => {
    const num = parseFloat(input); // Convert the input to a number
    if (!isNaN(num)) { // Check if the conversion was successful
        function findSqrt(x) {
            const result = Math.sqrt(x);
            return result;
        }
        console.log(`Square root of ${num} is: ${findSqrt(num)}`);
    } else {
        console.log('Invalid input. Please enter a valid number.');
    }

    rl.close();
});




