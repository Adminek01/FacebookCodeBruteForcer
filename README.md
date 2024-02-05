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

┌─[✗]─[user@parrot]─[~/FacebookCodeBruteForcer]
└──╼ $ll
total 12K
-rw-r--r-- 1 user user 2.7K Feb  5 16:37 FacebookCodeBruteForcer
-rw-r--r-- 1 user user 2.7K Feb  5 16:37 index.js
-rw-r--r-- 1 user user 1.9K Feb  5 16:37 README.md
┌─[user@parrot]─[~/FacebookCodeBruteForcer]
└──╼ $ls
FacebookCodeBruteForcer  index.js  README.md
┌─[user@parrot]─[~/FacebookCodeBruteForcer]
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
└──╼ $npm install readline-sync

added 1 package, and audited 2 packages in 5s

found 0 vulnerabilities
┌─[user@parrot]─[~/FacebookCodeBruteForcer]
└──╼ $node index.js

[1] id
[2] email
[3] phone
[0] CANCEL

Select the identifier type [1, 2, 3, 0]: 

