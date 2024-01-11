console.log('JS OK');

// - 1 Recupero gli elementi dal DOM - Retrieve elements from the DOM
const button = document.querySelector('button');
const resultElement = document.querySelector('#section-grid .grid');
const formElement = document.querySelector('.right-header form');
const selectElement = document.getElementById('user-select');
console.log(formElement, selectElement);

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

    for (let i = 1; i <= totalCells; i++) {

        // - 5 Creiamo una cella
        const newCells = createCells(i);

        // - 8 Creo il messaggio da stampare in console al click
        const message = 'Hai cliccato la cella numero: ' + i;

        // - 6 Creo un event listener al click della cella
        newCells.addEventListener('click', () => {

            // - 7 Al click aggiungo la classe clicked e la classe c-wh per cambiare il colore al testo
            newCells.classList.toggle('clicked');
            newCells.classList.toggle('c-wh');

            // - 9 Stampo il messaggio
            console.log(message);
        })

        // - 10 Stampo in pagina le celle
        resultElement.appendChild(newCells);
    }
});