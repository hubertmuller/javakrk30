/* to jest plik ts. mozna go sprobowac 
przetranspilowac do js poprzez komende:
tsc <nazwa-pliku>
*/

interface Stwor {
    glos(): void;
}

class Zwierze implements Stwor {

    constructor() {
        console.log('urodziny zwierza');
    }

    glos() {
        console.log('wydaje odglos');
    }
}

let x = new Zwierze();