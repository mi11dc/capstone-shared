import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() className: string = "";
  @Input() inputClassName: string = "";
  @Input() placeHolder: string = "";
  @Input() value: string = "";
  @Input() required: boolean = false;
  @Input() pattern: string = "";
  @Input() label: string = "";

  @Input() requierdMessage: string = "";
  @Input() patternMessage: string = "";
  @Input() readonly: boolean = false;

  @Output() newValue = new EventEmitter();

  inputForm: any;
  textsubmit = false;
  counter = 0;

  constructor(
    private FB: FormBuilder,
  ) {
  }

  get f() {
    return this.inputForm.controls;
  }

  ngOnInit() {
    setTimeout(() => {
      this.setDefaultData();
    });
  }

  setDefaultData() {
    this.inputForm = this.FB.group({
      text: ['']
    });
    if (!this.className) {
      this.className = 'form-group';
    }
    if (!this.inputClassName) {
      this.inputClassName = 'form-control';
    }
    if (!this.placeHolder) {
      this.placeHolder = 'Enter text';
    }
    if (!this.value) {
      this.value = '';
    }
    if (!this.label) {
      this.label = 'This';
    }
    if (!this.requierdMessage) {
      if (this.label) {
        this.requierdMessage = `${this.label} is required`;
      }
    }
    if (!this.patternMessage) {
      if (this.label) {
        this.patternMessage = `${this.label} is invalid`;
      } else {
        this.patternMessage = `this is invalid`;
      }
    }
    if (this.readonly) {
      this.f.text.disable();
    }
    if (this.required && this.pattern) {
      this.f.text.setValidators([
        Validators.required,
        Validators.pattern(this.pattern),
      ]);
    } else if (this.required && !this.pattern) {
      this.f.text.setValidators([
        Validators.required
      ]);
    } else if (!this.required && this.pattern) {
      this.f.text.setValidators([
        Validators.pattern(this.pattern)
      ]);
    }
  }

  onBlurEvent() {
    this.textsubmit = true;
    if (!this.inputForm.valid) {
      return;
    }
    this.newValue.emit({
      count: this.counter,
      value: this.value
    });
  }

  onFocusEvent() {
    this.counter += 1;
    this.newValue.emit({
      count: this.counter,
      value: this.value
    });
  }
}

