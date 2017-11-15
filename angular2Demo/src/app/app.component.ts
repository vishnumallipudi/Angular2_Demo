import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>This si change {{name}}</h1>`,
})
export class AppComponent  { name = 'vishnu'; }
