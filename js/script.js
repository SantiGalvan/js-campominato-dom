console.log('JS OK');

// - 1 Recupero gli elementi dal DOM - Retrieve elements from the DOM
const button = document.querySelector('button');
const resultElement = document.querySelector('#section-grid .grid');
const formElement = document.querySelector('.right-header form');
const selectElement = document.getElementById('user-select');
const scoreCounter = document.querySelector('strong');

// - 2 Creo le variabili per le righe e le colonne
const rows = 10;
const cells = 10;
const totalCells = rows * cells;

// ? FUNZIONI 
// - 3 Creo la funzione per la cella
const createCells = (number) => {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.innerText = number;
    return newCell;
};

// - 4 Creo un event listener al submit del form
formElement.addEventListener('submit', (event) => {

    // - 12 Evito che ricarichi la pagina
    event.preventDefault();

    // - 11 Evito che generi la griglia più volte
    resultElement.innerHTML = '';

    // - 19 Al submit del form inserisco uno 0 allo score
    scoreCounter.innerText = 0;

    // - 13 Creo una variabile per il valore della select
    const level = selectElement.value;

    // - 2 Creo le variabili per le righe e le colonne
    let rows = 10;
    let cols = 10;

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

            // - 18 Stampo in pagina lo score
            scoreCounter.innerText = score;
        })

        // - 10 Stampo in pagina le celle
        resultElement.appendChild(newCells);
    }
});