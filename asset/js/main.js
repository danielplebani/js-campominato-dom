/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

const startGame = document.querySelector('button');

startGame.addEventListener('click', function (){
    console.log("l'utente ha iniziato il gioco");

    const containerMarkup = document.getElementById('container');
    containerMarkup.className = 'containerMarkup';

    startGame.className = 'd-none';

    const grill = document.getElementById('grill');
    grill.className = 'd-flex flex-wrap cursorPointer';

    const limit100 = 100;
    for (let i = 1; i <= limit100; i++) {
        const cell = document.createElement('div');
        cell.className = 'markupCella';
        cell.style.width = `calc(100% / ${Math.sqrt(limit100)})`;

        grill.append(cell);

        cell.addEventListener('click', function (){
            cell.classList.toggle('bg-primary');
            console.log('hai cliccato sulla cella numero: ' + i);
        })
    }
})