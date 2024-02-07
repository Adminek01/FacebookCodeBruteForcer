const { exec } = require('child_process');

// Komenda do instalacji wymaganych modułów npm
const installCommand = 'npm install readline-sync axios';

// Funkcja do uruchamiania poleceń w terminalu
const runCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Błąd podczas wykonywania komendy: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.error(`Błąd standardowego wyjścia: ${stderr}`);
                reject(stderr);
                return;
            }
            console.log(`Wykonano komendę: ${command}`);
            console.log(`Standardowe wyjście: ${stdout}`);
            resolve(stdout);
        });
    });
};

// Instalacja wymaganych modułów npm
runCommand(installCommand)
    .then(() => console.log('Wszystkie moduły npm zostały pomyślnie zainstalowane.'))
    .catch((error) => console.error('Wystąpił błąd podczas instalowania modułów npm:', error));
