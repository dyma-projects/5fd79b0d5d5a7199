import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostListener("window:keydown",
  ['$event']) public changeColor($event:KeyboardEvent){
    
if($event.key === 'ArrowDown'){
  this.el.nativeElement.style.color = "red";
}else if($event.key === 'ArrowLeft'){
  this.el.nativeElement.style.color = "blue";
}else if($event.key === 'ArrowUp'){
  this.el.nativeElement.style.color = "green";
}else if($event.key === 'ArrowRight'){
  this.el.nativeElement.style.color = "yellow";
}
    console.log($event);
  }
 
  constructor(private el:ElementRef<any>) { }

}
