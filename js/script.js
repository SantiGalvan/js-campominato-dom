console.log('JS OK');

// - 1 Recupero gli elementi dal DOM - Retrieve elements from the DOM
const button = document.querySelector('button');
const resultElement = document.querySelector('#section-grid .grid');
const formElement = document.querySelector('.right-header form');
const selectElement = document.getElementById('user-select');
const scoreCounter = document.querySelector('strong');

// - 2 Creo le variabili per le righe e le colonne
let rows = 10;
let cols = 10;

// ? FUNZIONI 
// - 3 Creo la funzione per la cella
const createCells = (number) => {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.innerText = number;
    return newCell;
};

// - 22 Creo la funzione startGame
const startGame = (event) => {

    // - 12 Evito che ricarichi la pagina
    event.preventDefault();

    // - 11 Evito che generi la griglia più volte
    resultElement.innerHTML = '';

    // - 19 Al submit del form inserisco uno 0 allo score
    scoreCounter.innerText = 0;

    // - 13 Creo una variabile per il valore della select
    const level = selectElement.value;



    // - 14 Creo lo switch per le difficoltà
    switch (level) {
        case 'normal':
            rows = 9;
            cols = 9;
            break;
        case 'hard':
            rows = 7;
            cols = 7;
            break;
    }

    // - 15 Cambio il valore della root in CSS in base al livello
    const root = document.querySelector(':root');
    root.style.setProperty('--cols-for-rows', cols);

    // - Variabile con il totale delle celle
    const totalCells = rows * cols;

    // - 16 Creo una variabile score
    let score = 0;

    for (let i = 1; i <= totalCells; i++) {

        // - 5 Creiamo una cella
        const newCells = createCells(i);

        // - 8 Creo il messaggio da stampare in console al click
        const message = 'Hai cliccato la cella numero: ' + i;

        // - 6 Creo un event listener al click della cella
        newCells.addEventListener('click', () => {

            // - 20 Creo un if per controllare che la cella non sia già stata cliccata e bloccare l'incremento dello score
            if (!newCells.classList.contains('clicked')) {

                // - 7 Al click aggiungo la classe clicked e la classe c-wh per cambiare il colore al testo
                newCells.classList.add('clicked');
                newCells.classList.add('c-wh');

                // - 17 Incremento lo score ad ogni click
                score++;

                // - 9 Stampo il messaggio
                console.log(message);
            }

            // - 29 Creo un if per aggiungere la classe bomb alle celle dentro l'array
            if (bombs.includes(parseInt(newCells.innerText))) {
                newCells.classList.add('bomb');
            }

            // - 30 Creo un if per determinare la sconfitta
            if (newCells.classList.contains('bomb')) {
                alert('Hai perso il tuo punteggi è: ' + score);
            }

            // - 31 Creo un if per stabilire se l'utente ha vinto
            if (score === maxScore) {
                alert('Complimenti, hai vinto. Il tuo punteggio è di: ' + score);
            }

            // - 18 Stampo in pagina lo score
            scoreCounter.innerText = score;
        })

        // - 10 Stampo in pagina le celle
        resultElement.appendChild(newCells);
    }

    // - 23 Creo una variabile per il numero di bombe
    const totalBombs = 16;

    // - 24 Creo una variabile per il punteggio più alto
    const maxScore = totalCells - totalBombs;

    // - 25 Creo un array per contenere le bombe
    const bombs = [];

    // - 21 Creo una funzione per generare 16 numeri casuali
    const createBombs = (max, numberOfBombs, bombList) => {

        // - 26 Creo un ciclo while
        while (bombList.length < numberOfBombs) {

            // - 27 Creo un numero random
            const randomBombs = Math.floor(Math.random() * max) + 1;

            // - 28 Se il numero random non è all'interno della lista allora mettilo nella lista
            if (!bombList.includes(randomBombs)) {
                bombList.push(randomBombs);
            }
        }
    }


    createBombs(totalCells, totalBombs, bombs);
    console.log(bombs);
}

// - 4 Creo un event listener al submit del form
formElement.addEventListener('submit', startGame);