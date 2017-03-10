import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[errorHandler]'
})
export class ErrorHandlerDirective {
  constructor(private el: ElementRef) { }
  @Input('isError') isError: string;
  @HostListener('mouseenter') onMouseEnter() {
    //TODO
  }
  @HostListener('mouseleave') onMouseLeave() {
    //TODO
  }

}
