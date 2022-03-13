import { FormControl } from "@angular/forms";

export function parzysta(c: FormControl) {
    const wartosc = c.value;
    if ((wartosc % 2) === 1) {
        return {
            parzysta: {
                valid: false
            }
        }
    } else {
        return null;
    }
}