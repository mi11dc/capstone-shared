import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DatepickerComponent,
    multi: true
  }]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {

  @Input() dateRange = false;
  @Input() value: any;
  @Input() placeholder: string = "";
  @Input() class = 'form-group';
  @Input() inputClassName = 'form-control';
  @Input() disabled = false;
  @Input() outsideClick = true;

  @Input() theme: 'default' | 'green' | 'blue' | 'dark-blue' | 'red' | 'orange' = 'default';

  @Output() selectedDate = new EventEmitter();

  bsConfig = {};

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
    setTimeout(() => {
      this.bsConfig = {
        isAnimated: true,
        adaptivePosition: true,
        dateInputFormat: 'YYYY-MM-DD',
        containerClass: 'theme-' + this.theme
      };
    });
  }

  onDateChange() {
    this.selectedDate.emit(this.value);
  }
}
