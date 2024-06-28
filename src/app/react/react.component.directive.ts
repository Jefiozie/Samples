import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import React, { ComponentProps } from 'react';
import { createRoot } from 'react-dom/client';
import {ReactPost} from './react-post';
@Directive({
  selector: '[appReactDirective]',
  standalone: true,
})
export class ReactComponentDirective<Comp extends React.ElementType>
  implements OnInit, OnDestroy
{
  @Input() props!: ComponentProps<Comp>;

  private root = createRoot(inject(ElementRef).nativeElement);

  ngOnInit(): void {
    this.initialize();
  }

  async initialize() {
    this.root.render(React.createElement(ReactPost, this.props));
  }

  ngOnDestroy(): void {
    this.root.unmount();
  }
}
