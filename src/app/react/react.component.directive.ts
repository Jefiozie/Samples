import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input
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
  readonly props = input.required<ComponentProps<Comp>>();

  private root = createRoot(inject(ElementRef).nativeElement);

  ngOnInit(): void {
    this.initialize();
  }

  async initialize() {
    this.root.render(React.createElement(ReactPost, this.props()));
  }

  ngOnDestroy(): void {
    this.root.unmount();
  }
}
