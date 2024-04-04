
import { Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-resize',
  standalone: true,
  imports: [],
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css'],
})
export default class ResizeComponent implements OnInit, OnDestroy {
  elm = inject(ElementRef).nativeElement as HTMLElement;

  resHandler = (e: ResizeObserverEntry[]) => {
    const [
      {
        borderBoxSize: [{ inlineSize, blockSize }],
      },
    ] = e;
    this.elm.style.setProperty('--_panel-width', `${inlineSize}px`);
    this.elm.style.setProperty('--_panel-height', `${blockSize}px`);
  };
  resObs = new ResizeObserver(debounce(this.resHandler, 250));

  ngOnInit(): void {
    this.resObs.observe(this.elm);
  }
  ngOnDestroy(): void {
    this.resObs.unobserve(this.elm);
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
function debounce(fn: Function, wait: number) {
  let timeout: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}
