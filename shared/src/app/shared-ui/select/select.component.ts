import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectComponent,
    multi: true
  }]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() list = [];
  @Input() bindLabel: string = "";
  @Input() className = 'form-group';
  @Input() selectClassName: string = "";
  @Input() placeHolder = 'Select';
  @Input() value: any;
  @Input() label = 'List';

  @Input() disabled = false;
  @Input() multi = false;
  @Input() required = false;
  @Input() searchable = false;
  @Input() clearable = false;

  @Output() selectedValue = new EventEmitter();

  constructor(
  ) { }

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
       this.setValue();
    });
  }

  setValue() {
    const val = this.value;
    if (val) {
      if (this.multi) {
        if (Array.isArray(val)) {
          this.value = val;
        } else {
          const array = [];
          array.push(val);
          this.value = array;
        }
      } else {
        if (Array.isArray(val)) {
          for (const item of this.value) {
            if (item) {
              this.value = item;
              break;
            }
          }
        } else {
          this.value = val;
        }
      }
    }
  }

  onSelectedValueChange() {
    this.selectedValue.emit(this.value);
  }
}
