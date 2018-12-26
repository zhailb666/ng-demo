import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'myDate'})
export class MyDatePipe implements PipeTransform {
  transform(value: number, formDate: string): any {
    return this.formatDate(new Date(value), formDate);
  }

  formatDate(t: Date, f: string) {
    const obj = {
      yyyy: t.getFullYear(),
      yy: ('' + t.getFullYear()).slice(-2),
      M: t.getMonth() + 1,
      MM: ('0' + (t.getMonth() + 1)).slice(-2),
      d: t.getDate(),
      dd: ('0' + t.getDate()).slice(-2)
    };
    return f.replace(/([a-z]+)/ig, function (r) {
       return obj[r];
    });
  }
}
