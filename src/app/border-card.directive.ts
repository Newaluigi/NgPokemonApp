import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  // private initialColor: string; = '#f5f5f5';
  // private defaultColor: string; = '#009688';
  // private defaultHeight

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder("#f5f5f5");
  }

  @Input("pkmnBorderCard") borderColor: string; //alias
  @Input("pkmnBorderCard") borderHeight: number;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || "#009688");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.borderColor || "#f5f5f5");
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    let border = "solid 4px " + color;
    this.el.nativeElement.style.border = border;
  }
}
