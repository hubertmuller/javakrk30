import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'podzielna'})
export class PodzielnaPipe implements PipeTransform {
    transform(value: number, dzielnik = 2): string {
        if ((value % dzielnik) === 0) {
            return 'podzielna';
        } else {
            return 'niepodzielna';
        }
    }
}