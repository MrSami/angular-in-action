import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})

export class MetricComponent  {

  // @Input() title: string = '';
  // @Input() description : string = '';
  /* 
    To validate input values we use setter and getter methods.
    so we replace the following code segment:
      @Input('used) value :number = 0;
      @Input('available) max :number =100;
  */
  private _value : number = 0;
  private _max : number = 100;

  @Input('used')
  set value(value:number) {
    if (isNaN(value)) value = 0;
    this._value = value;
  }
  get value() {
    return this._value;
  }

  @Input('available')
  set max(max:number){
    if (isNaN(max)) max=100;
    this._max = max;
  }

  get max(): number { return this._max;}
  
  isDanger() {  return this.value / this.max > 0.7;  }

  constructor() { }

}
