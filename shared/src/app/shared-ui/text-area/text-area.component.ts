import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextAreaComponent,
    multi: true
  }]
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {

  @Input() className: string;
  @Input() textAreaClassName: string;
  @Input() placeholder = 'Enter';
  @Input() value: string;
  @Input() label: string;

  @Input() required = false;
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() rows = 1;
  @Input() cols = 5;

  @Output() areaInputValue = new EventEmitter();

  constructor() { }

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
    this.areaInputValue.emit(this.value);
  }

}
