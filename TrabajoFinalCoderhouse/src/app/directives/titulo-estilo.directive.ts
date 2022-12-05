import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTituloEstilo]'
})
export class TituloEstiloDirective {

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color', '#707070');
    
  }
}
