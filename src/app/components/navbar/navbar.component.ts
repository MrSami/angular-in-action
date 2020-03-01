import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // The last style declared wins
  // Inline style declarations overrides styles declared in styleUrls and styles!!!
  // lookup order for styling
  // - Inline style attribute rules
  // - Inline style block rules in templates
  // - Component styles rules or styleUrls rules (if both, then the last declared one)
  // - Global CSS Rules
  styles: [`.btn { background-color: #e32738;}`],
  // there are 3 types of style encapsulation
  // 1- None
  // 2- Emulated (default)
  // 3- Native
  // Emulated is default, but it can be declared explicitly.
  //
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent {
  @Output() OnRefresh: EventEmitter<null> = new EventEmitter<null>();
  constructor() { }

  // Emits event on click
  // fires the event and alerts the parent component that is listening.
  refresh(){ this.OnRefresh.emit();}

}
