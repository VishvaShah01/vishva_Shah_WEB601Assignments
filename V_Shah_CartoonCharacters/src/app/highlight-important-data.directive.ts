//import { Directive } from '@angular/core';
import {Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  @Input() color?: string;
  private colorHighLight: boolean = false;
  private colorText: string;
 
  @HostBinding('style.border')
  get border() {
    return this.colorHighLight ? '2px double black' : this.colorText;
  }
  
  constructor(private el: ElementRef) {
    this.colorText = this.el.nativeElement.style.border;
    this.colorText = this.el.nativeElement.style.backgroundColor;
  }

   @HostListener('mouseenter') onclick() {
    this.colorHighLight = !this.colorHighLight;
  } 

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.colorHighLight ? this.color || "transparent" :
      this.colorText;
  }
  @HostListener('mouseout') onClick() {
    this.colorHighLight = !this.colorHighLight;
  }

  /* @HostBinding('style.border')
  get border() {
    return this.highlight ? '3px solid black' : this.initialBorder;
  } */

  
  @HostListener('click') onClickType() {
    this.colorHighLight = !this.colorHighLight;
  }
} 
