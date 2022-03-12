/* to jest plik ts. mozna go sprobowac 
przetranspilowac do js poprzez komende:
tsc <nazwa-pliku>
*/

interface Stwor {
    glos(extraglos: string): void;
    wiek: number;
    imie: string;
}

class Zwierze implements Stwor {

    public wiek = 5;
    public imie: string;
    private sekret = '';
    private grozny = true;
    public cokolwiek: any;


    constructor(public param1: string) {
        console.log('urodziny zwierza ' + param1);
        this.wiek = 55;
        this.imie = 'Azor';
        this.cokolwiek = 5;
        this.cokolwiek = 'uuu';
    }

    public glos(extraglos: string): number {
        console.log('wydaje odglos ' + extraglos);
        return 56;
    }
}

let x = new Zwierze('Azor');