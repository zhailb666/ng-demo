import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMoveDiv]'
})

export class MoveDivDirective {
  private mousemoveHandler = null;
  constructor(private el: ElementRef, private render2: Renderer2) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.position = 'absolute';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mousedown') onMouseDown(event) {
    if (this.mousemoveHandler) {
      this.mousemoveHandler();
    }
    this.el.nativeElement.style.position = 'absolute';
    event = event || window.event;
    const distanceX = event.clientX - this.el.nativeElement.offsetLeft;
    const distanceY = event.clientY - this.el.nativeElement.offsetTop;
    this.mousemoveHandler = this.render2.listen('document', 'mousemove', function (e) {
      this.el.nativeElement.style.left = e.pageX - distanceX + 'px';
      this.el.nativeElement.style.top = e.pageY - distanceY + 'px';
    }.bind(this));
  }

  @HostListener('mouseup') onMouseUp() {
    // TODO_DOWN 如何解除事件绑定；
    this.mousemoveHandler();
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
