import { Component, HostListener, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CODE } from './code';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  grantedKeysPressed = false;
  deniedKeysPressed = false;
  index = 0;
  code = '';

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject('Window') private readonly window: Window,
  ) {}

  @HostListener('window:keydown', ['$event']) onHostClick(event: KeyboardEvent): void {
    const isReset = event.key === 'Delete' && event.ctrlKey;
    if (isReset) {
      this.code = '';
      this.index = 0;
      return;
    }

    const isf11 = event.key === 'F11';
    const isCtrl = event.key === 'Control';

    if (!isf11 && !isCtrl) {
      this.grantedKeysPressed = event.key === 'Enter' && event.ctrlKey;
      this.deniedKeysPressed = event.key === 'Backspace' && event.ctrlKey;

      if (!event.ctrlKey) {
        this.code += CODE[this.index++];
        this.window.scrollTo(0, this.document.body.scrollHeight);
      }
    }
  }
}
