import {Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  private defaultColor:string="";  
  @Input() highlightColor:string=""; 
   
  @Input()color:string="";

  //private defaulttextcolor:string="";
  @Input() textcolor:string="";


  private isHighlighted: boolean = false;
  private initialColour: string;
 // private initialTextColor: string;



  @HostBinding('style.backgroundColor')
  get backgroundColour() {
    return this.isHighlighted ? this.color || "" :
      this.initialColour;
  }
  @HostBinding('style.color')
  get textColour() {
    return this.isHighlighted;
  }


  
  constructor(private elm: ElementRef) {
    this.initialColour = this.elm.nativeElement.style.backgroundColor;

  }

  @HostListener('click') onClick() {
    this.isHighlighted = !this.isHighlighted;
  }


   
@HostBinding('style.border') border:string=this.defaultColor;  
@HostBinding('style.color') tagcolor:string=this.defaultColor; 
 
  // constructor( private eleRef:ElementRef){}  
  
  @HostListener('mouseover') mouseover(eventData:Event){  
      this.border=this.highlightColor;  
      this.tagcolor=this.textcolor;
  
  }  
  @HostListener('mouseleave') mouseleave(eventData:Event){  
      this.border=this.defaultColor;  
      this.tagcolor=this.defaultColor;
      //this.eleRef.nativeElement.style.color="Black";  
  } 



}
