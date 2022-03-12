/* to jest plik ts. mozna go sprobowac
przetranspilowac do js poprzez komende:
tsc <nazwa-pliku>
*/
var Zwierze = /** @class */ (function () {
    function Zwierze() {
        console.log('urodziny zwierza');
    }
    Zwierze.prototype.glos = function () {
        console.log('wydaje odglos');
    };
    return Zwierze;
}());
var x = new Zwierze();
