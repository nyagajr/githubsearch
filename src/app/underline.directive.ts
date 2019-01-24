import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

    constructor(private elem:ElementRef){
      this.elem.nativeElement.style.textDecoration='underline overline';

 }
}
