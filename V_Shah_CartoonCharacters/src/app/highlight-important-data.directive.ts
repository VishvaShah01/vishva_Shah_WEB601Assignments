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
  }

  @HostListener('mouseenter') onclick() {
    this.colorHighLight = !this.colorHighLight;
  }
  @HostListener('mouseout') onClick() {
    this.colorHighLight = !this.colorHighLight;
  }
}