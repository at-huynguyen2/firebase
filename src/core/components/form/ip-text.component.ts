import {Component, Provider, forwardRef, OnInit, Injector} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

// const noop = () => {};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IpTextComponent),
  multi: true
};

@Component({
  selector: 'ip-text',
  template: `
    <input class="form-control" 
            [(ngModel)]="value"
            (blur)="onTouched()" />
    <span *ngIf="_ngControl.invalid">invalid</span>
  `,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class IpTextComponent implements ControlValueAccessor, OnInit{

  private _value: any = '';
  private _ngControl: NgControl;

  private _onTouchedCallback: () => void = () => {};
  private _onChangeCallback: (_:any) => void = () => {};
  
  constructor(private inject: Injector) { }  

  ngOnInit() {
    this._ngControl = this.inject.get(NgControl)
  }

  get value(): any { return this._value; };
  
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }

  //Set touched on blur
  onTouched(){
    this._onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value) {
      this._value = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

}