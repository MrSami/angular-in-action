import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  // Set Change Detection Strategy to OnPush mode
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// OnChanges is added 
export class MetricComponent implements OnChanges {
  // converted to components
  //@Input() title: string = '';
  //@Input() description : string = '';

  @Input('used') value : number = 0;
  @Input('available') max : number =100;
  /* 
    To validate input values we use setter and getter methods.
    so we replace the following code segment:
      @Input('used) value :number = 0;
      @Input('available) max :number =100;

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

  */
  
  
  isDanger() {  return this.value / this.max > 0.7;  }

  constructor() { }

  // Used to detect invalid values and validate them during OnChanges life cycle hook
  ngOnChanges(changes){
    if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
    if (changes.max && isNaN(changes.max.currentValue)) this.max=0;
  }

}
