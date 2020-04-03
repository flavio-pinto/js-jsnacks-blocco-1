/**
 * JSnack 1
 * L’utente inserisce due parole in successione, con due prompt
 * Il software stampa la parola più lunga
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
 */

console.log('******************** JSNACK 1 ********************');

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


/**
 * JSnack 2
 * Inserisci un numero
 * se è pari stampa il numero
 * se è dispari stampa il numero successivo
 */

console.log('******************** JSNACK 2 ********************');

// Inserimento numero
var numUtente = parseInt(prompt('Inserisci un numero'));

// Stampo numero dopo aver sfruttato la funzione per capire se era pari
var stampaNumero = checkPari(numUtente);
console.log(stampaNumero);


// Funzione per controllare se il numero è pari e renderlo tale in caso in cui l'input fosse un numero dispari
function checkPari (num) {
    if (num % 2 == 0) {
        return num + ' - Hai inserito un numero pari';
    } 

    return num + 1 + ' - Hai inserito un numero dispari, quindi ho fatto aggiunto 1 per renderlo pari!';
}
