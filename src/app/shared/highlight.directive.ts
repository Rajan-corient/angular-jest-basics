import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({ 
  selector: '[highlight]' 
})

export class HighlightDirective implements OnChanges, OnInit {
  defaultColor = 'rgb(211, 211, 211)'; // lightgray

  @Input('highlight') bgColor = '';

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = 'Red'
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = 
      this.bgColor || this.defaultColor;
  }

}
