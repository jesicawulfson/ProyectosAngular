import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanoEstilo]'
})
export class BooleanoEstiloDirective implements OnInit{
  @Input('appBooleanoEstilo') inscripcionAbierta!: boolean;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if(this.inscripcionAbierta){
      this.renderer.setStyle(this.elemento.nativeElement, 'color', 'green');
    }
    else 
    {
      this.renderer.setStyle(this.elemento.nativeElement, 'color', 'red');
    }
     
  }

}
