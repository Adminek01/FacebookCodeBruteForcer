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
└──╼ $npm init 

- `sudo apt install nodejs` (dla systemów opartych na Debianie, takich jak Ubuntu)
- `sudo yum install nodejs` (dla systemów opartych na Red Hat, takich jak CentOS)
- `brew install node` (dla systemów macOS)

Więcej informacji o instalacji Node.js znajdziesz na [tej stronie](^1^).

Po zainstalowaniu Node.js, możesz zainstalować yarn, używając npm, tak jak zrobiłeś to z axios:

- `sudo npm install -g yarn`

To zainstaluje yarn globalnie, co oznacza, że będziesz mógł go używać w dowolnym projekcie. Możesz sprawdzić, czy yarn został poprawnie zainstalowany, wpisując w terminalu:

- `yarn --version`

Powinieneś zobaczyć numer wersji yarn, taki jak 1.22.11.

Po zainstalowaniu yarn, możesz użyć go do dodawania pakietów do swojego projektu, tak jak zrobiłeś to z npm. Na przykład, aby dodać axios za pomocą yarn, wpisz w terminalu:

- `yarn add axios`

To zainstaluje axios lokalnie w twoim projekcie i zaktualizuje plik package.json i yarn.lock. Możesz sprawdzić, czy axios został poprawnie zainstalowany, wpisując w terminalu:

- `yarn list axios`

Powinieneś zobaczyć nazwę i wersję axios, taką jak axios@0.24.0.

Więcej informacji o używaniu yarn znajdziesz na [tej stronie](^2^).

Mam nadzieję, że to ci pomoże. Jeśli masz jakieś pytania lub potrzebujesz więcej pomocy,

Źródło: Konwersacja za pomocą usługi Bing, 5.02.2024
(1) Getting Started | Yarn. https://classic.yarnpkg.com/lang/en/docs/getting-started/.
(2) How To Install and Use the Yarn Package Manager for Node.js. https://www.digitalocean.com/community/tutorials/how-to-install-and-use-the-yarn-package-manager-for-node-js.