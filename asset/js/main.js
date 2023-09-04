/*
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
-difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
-difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
-difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

const difficulty = document.querySelector('select');

const startGame = document.querySelector('button');

startGame.addEventListener('click', function (){
    console.log("l'utente ha iniziato il gioco");

    startGame.className = 'd-none';
    difficulty.className = 'd-none';

    const containerMarkup = document.getElementById('container');
    containerMarkup.className = 'containerMarkup';

    const grill = document.getElementById('grill');
    grill.className = 'd-flex flex-wrap cursorPointer';

    let limit;
    if (difficulty.value === '1') {
       limit = 100;
    } else if (difficulty.value === '2') {
       limit = 81;
    } else {
       limit = 49;
    }

    for (let i = 1; i <= limit; i++) {
        const cell = document.createElement('div');
        cell.className = 'markupCella';
        cell.style.width = `calc(100% / ${Math.sqrt(limit)})`;

        grill.append(cell);

        cell.addEventListener('click', function (){
            cell.classList.toggle('bg-primary');
            console.log('hai cliccato sulla cella numero: ' + i);
        })
    }

    const bombNumbers = [];
    
    while (bombNumbers.length < 16) {
        const bomb = Math.floor(Math.random() * limit + 1);
        if (!bombNumbers.includes(bomb)) {
            bombNumbers.push(bomb);
        }
    }
    
    for (let i = 1; i <= limit; i++) {
        if (bombNumbers.includes(i)) {
            console.log('Il numero ' + i + ' è una bomba!');
        } 
    }
}) 