# FacebookCodeBruteForcer
 atak brute-force na 6-cyfrowe kody


Aby uruchomić program w Parrot OS, wykonaj poniższe kroki. Zakładam, że twój program jest napisany w języku JavaScript i wymaga środowiska Node.js. Jeśli to nie jest prawda, dostosuj instrukcje do odpowiedniego języka lub środowiska.

Zainstaluj Node.js:
Upewnij się, że Node.js jest zainstalowane na twoim systemie. Jeśli nie jest, możesz zainstalować je za pomocą następującego polecenia w terminalu:

bash
Copy code
sudo apt-get update
sudo apt-get install nodejs
Zainstaluj npm:
npm (Node Package Manager) jest narzędziem do zarządzania pakietami w środowisku Node.js. Zainstaluj je za pomocą poniższego polecenia:

bash
Copy code
sudo apt-get install npm
Przejdź do Katalogu z Programem:
Otwórz terminal i przejdź do katalogu, w którym znajduje się twój program.

Zainstaluj Zależności:
Jeśli twój program korzysta z zależności, możesz je zainstalować za pomocą polecenia:

bash
Copy code
npm install
Uruchom Program:
Po zainstalowaniu zależności, możesz uruchomić swój program. Przyjmując, że program to plik JavaScript (np. app.js), możesz go uruchomić poniższym poleceniem:

bash
Copy code
node app.js



┌─[✗]─[user@parrot]─[~/FacebookCodeBruteForcer]
└──╼ $npm init -y
Wrote to /home/user/FacebookCodeBruteForcer/package.json:

{
  "name": "facebookcodebruteforcer",
  "version": "1.0.0",
  "description": "atak brute-force na 6-cyfrowe kody",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


┌─[user@parrot]─[~/FacebookCodeBruteForcer]
└──╼ $npm install

up to date, audited 1 package in 845ms

found 0 vulnerabilities
┌─[user@parrot]─[~/FacebookCodeBruteForcer]
└──╼ $
