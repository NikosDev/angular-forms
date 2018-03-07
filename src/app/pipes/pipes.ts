import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filterPipe',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any[]): any {
        return  value.filter(item => {
            return args.length ? args.indexOf(item.status) != -1 : value;
        });
    }
}
