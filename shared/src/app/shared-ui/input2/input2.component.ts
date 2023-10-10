import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input-new',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: Input2Component,
    multi: true
  }]
})
export class Input2Component implements OnInit, ControlValueAccessor {

  @Input() className = 'form-group';
  @Input() inputClassName = 'form-control';
  @Input() placeHolder = 'Enter';
  @Input() value = '';
  @Input() label = 'Text';
  @Input() required = false;

  // @Input() pattern = null;

  @Input() readonly = false;
  @Input() disabled = false;

  @Output() newValue = new EventEmitter();

  constructor() {
  }

  // This is the initial value set to the component
  // @param value The input value.
  public writeValue(value: any) {
    this.value = value;
  }

  // Sets a method in order to propagate changes back to the form.
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // * Registers a callback to be triggered when the control has been touched.
  // * @param fn Callback to be triggered when the number input is touched.
  public registerOnTouched(fn: any) {
      this.onTouched = fn;
  }

  // Sets the disabled state through the model
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
  onTouched: () => any = () => {
  }

  // Method set in `registerOnChange` to propagate changes back to the form.
  propagateChange = (_: any) => {
  }

  ngOnInit() {
  }

  onInputChange() {
    this.newValue.emit(this.value);
  }

}
