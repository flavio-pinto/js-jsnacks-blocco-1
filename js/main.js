/**
 * JSnack 1
 * L’utente inserisce due parole in successione, con due prompt
 * Il software stampa la parola più lunga
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
 */

console.log('********** JSNACK 1 - INSERISCI DUE PAROLE E STAMPA QUELLA PIÙ LUNGA **********');


// Inserimento prima parola
var primaParola = prompt('Inserisci la prima parola').trim();

// Inserimento seconda parola
var secondaParola = prompt('Inserisci la prima parola').trim();

// Stampare parola più lunga grazie alla funzione
var parolaPiùLunga = checkLunghezza(primaParola, secondaParola);
console.log(parolaPiùLunga);

// Creo funzione per controllare lunghezza parole
function checkLunghezza (parola1, parola2) {
    if (parola1.length > parola2.length) {
        return ('La parola più lunga è: ' + parola1);
    } else if (parola1.length < parola2.length) {
        return ('La parola più lunga è: ' + parola2);
    }

    return 'Le parole hanno lunghezza uguale'
}