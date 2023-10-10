import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RadioComponent,
    multi: true
  }]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() label: string = "";
  @Input() data = [];
  @Input() value: string = "";

  @Input() disabled = false;
  @Input() required = false;

  @Output() checkInputValue = new EventEmitter();

  constructor() { }

  // This is the initial value set to the component
  // @param value The input value.
  public writeValue(value: any) {
    // this.value = value;
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

  isChecked(item) {
    if (!item) {
      return false;
    }
    return this.value.toString().toLowerCase() === item.toString().toLowerCase();
  }

  onCheckClick(item) {
    this.value = item;
    this.checkInputValue.emit(this.value);
  }

}
