import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule, Injectable, ErrorHandler, SkipSelf, Optional, Pipe } from '@angular/core';
import * as i2 from '@angular/forms';
import { Validators, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@ng-select/ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import * as i3$1 from 'ngx-bootstrap/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders, HttpParams, HttpErrorResponse, HttpResponse, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { retry, shareReplay, tap } from 'rxjs/operators';
import * as i1$2 from '@angular/router';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as _ from 'lodash';

class InputComponent {
    FB;
    className = "";
    inputClassName = "";
    placeHolder = "";
    value = "";
    required = false;
    pattern = "";
    label = "";
    requierdMessage = "";
    patternMessage = "";
    readonly = false;
    newValue = new EventEmitter();
    inputForm;
    textsubmit = false;
    counter = 0;
    constructor(FB) {
        this.FB = FB;
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
            }
            else {
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
        }
        else if (this.required && !this.pattern) {
            this.f.text.setValidators([
                Validators.required
            ]);
        }
        else if (!this.required && this.pattern) {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: InputComponent, deps: [{ token: i2.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: InputComponent, selector: "app-input", inputs: { className: "className", inputClassName: "inputClassName", placeHolder: "placeHolder", value: "value", required: "required", pattern: "pattern", label: "label", requierdMessage: "requierdMessage", patternMessage: "patternMessage", readonly: "readonly" }, outputs: { newValue: "newValue" }, ngImport: i0, template: "<form [formGroup]=\"inputForm\">\n  <div [ngClass]=\"className\">\n    <input [ngClass]=\"inputClassName\" formControlName=\"text\" [attr.placeholder]=\"placeHolder\" type=\"text\"\n           [(ngModel)]=\"value\" (blur)=\"onBlurEvent()\" (focus)=\"onFocusEvent()\">\n    <div>\n      <small *ngIf=\"textsubmit && f.text.errors\" class=\"text-danger\">\n        <span *ngIf=\"f.text.errors.required\">{{ requierdMessage }}</span>\n        <span *ngIf=\"f.text.errors.pattern\">{{ patternMessage }}</span>\n      </small>\n    </div>\n  </div>\n</form>\n", styles: [".text-danger{color:#f03}.readonly-cursor{cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-input', template: "<form [formGroup]=\"inputForm\">\n  <div [ngClass]=\"className\">\n    <input [ngClass]=\"inputClassName\" formControlName=\"text\" [attr.placeholder]=\"placeHolder\" type=\"text\"\n           [(ngModel)]=\"value\" (blur)=\"onBlurEvent()\" (focus)=\"onFocusEvent()\">\n    <div>\n      <small *ngIf=\"textsubmit && f.text.errors\" class=\"text-danger\">\n        <span *ngIf=\"f.text.errors.required\">{{ requierdMessage }}</span>\n        <span *ngIf=\"f.text.errors.pattern\">{{ patternMessage }}</span>\n      </small>\n    </div>\n  </div>\n</form>\n", styles: [".text-danger{color:#f03}.readonly-cursor{cursor:not-allowed}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.FormBuilder }]; }, propDecorators: { className: [{
                type: Input
            }], inputClassName: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], value: [{
                type: Input
            }], required: [{
                type: Input
            }], pattern: [{
                type: Input
            }], label: [{
                type: Input
            }], requierdMessage: [{
                type: Input
            }], patternMessage: [{
                type: Input
            }], readonly: [{
                type: Input
            }], newValue: [{
                type: Output
            }] } });

class SelectComponent {
    list = [];
    bindLabel = "";
    className = 'form-group';
    selectClassName = "";
    placeHolder = 'Select';
    value;
    label = 'List';
    disabled = false;
    multi = false;
    required = false;
    searchable = false;
    clearable = false;
    selectedValue = new EventEmitter();
    constructor() { }
    // This is the initial value set to the component
    // @param value The input value.
    writeValue(value) {
        this.value = value;
    }
    // Sets a method in order to propagate changes back to the form.
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // * Registers a callback to be triggered when the control has been touched.
    // * @param fn Callback to be triggered when the number input is touched.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Sets the disabled state through the model
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
    onTouched = () => {
    };
    // Method set in `registerOnChange` to propagate changes back to the form.
    propagateChange = (_) => {
    };
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
                }
                else {
                    const array = [];
                    array.push(val);
                    this.value = array;
                }
            }
            else {
                if (Array.isArray(val)) {
                    for (const item of this.value) {
                        if (item) {
                            this.value = item;
                            break;
                        }
                    }
                }
                else {
                    this.value = val;
                }
            }
        }
    }
    onSelectedValueChange() {
        this.selectedValue.emit(this.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: SelectComponent, selector: "app-select", inputs: { list: "list", bindLabel: "bindLabel", className: "className", selectClassName: "selectClassName", placeHolder: "placeHolder", value: "value", label: "label", disabled: "disabled", multi: "multi", required: "required", searchable: "searchable", clearable: "clearable" }, outputs: { selectedValue: "selectedValue" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectComponent,
                multi: true
            }], ngImport: i0, template: "<div [ngClass]=\"className\">\n    <ng-select\n            [items]=\"list\"\n            [bindLabel]=\"bindLabel\"\n            [placeholder]=\"placeHolder\"\n            [ngClass]=\"selectClassName\"\n            [multiple]=\"multi\"\n            [required]=\"required\"\n            [(ngModel)]=\"value\"\n            [disabled]=\"disabled\"\n            [clearable]=\"clearable\"\n            [searchable]=\"searchable\"\n            (ngModelChange)=\"onSelectedValueChange()\"\n    ></ng-select>\n</div>\n\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NgSelectComponent, selector: "ng-select", inputs: ["bindLabel", "bindValue", "markFirst", "placeholder", "notFoundText", "typeToSearchText", "addTagText", "loadingText", "clearAllText", "appearance", "dropdownPosition", "appendTo", "loading", "closeOnSelect", "hideSelected", "selectOnTab", "openOnEnter", "maxSelectedItems", "groupBy", "groupValue", "bufferAmount", "virtualScroll", "selectableGroup", "selectableGroupAsModel", "searchFn", "trackByFn", "clearOnBackspace", "labelForId", "inputAttrs", "tabIndex", "readonly", "searchWhileComposing", "minTermLength", "editableSearchTerm", "keyDownFn", "typeahead", "multiple", "addTag", "searchable", "clearable", "isOpen", "items", "compareWith", "clearSearchOnAdd", "deselectOnClick"], outputs: ["blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-select', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SelectComponent,
                            multi: true
                        }], template: "<div [ngClass]=\"className\">\n    <ng-select\n            [items]=\"list\"\n            [bindLabel]=\"bindLabel\"\n            [placeholder]=\"placeHolder\"\n            [ngClass]=\"selectClassName\"\n            [multiple]=\"multi\"\n            [required]=\"required\"\n            [(ngModel)]=\"value\"\n            [disabled]=\"disabled\"\n            [clearable]=\"clearable\"\n            [searchable]=\"searchable\"\n            (ngModelChange)=\"onSelectedValueChange()\"\n    ></ng-select>\n</div>\n\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { list: [{
                type: Input
            }], bindLabel: [{
                type: Input
            }], className: [{
                type: Input
            }], selectClassName: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], value: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], multi: [{
                type: Input
            }], required: [{
                type: Input
            }], searchable: [{
                type: Input
            }], clearable: [{
                type: Input
            }], selectedValue: [{
                type: Output
            }] } });

class Input2Component {
    className = 'form-group';
    inputClassName = 'form-control';
    placeHolder = 'Enter';
    value = '';
    label = 'Text';
    required = false;
    // @Input() pattern = null;
    readonly = false;
    disabled = false;
    newValue = new EventEmitter();
    constructor() {
    }
    // This is the initial value set to the component
    // @param value The input value.
    writeValue(value) {
        this.value = value;
    }
    // Sets a method in order to propagate changes back to the form.
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // * Registers a callback to be triggered when the control has been touched.
    // * @param fn Callback to be triggered when the number input is touched.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Sets the disabled state through the model
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
    onTouched = () => {
    };
    // Method set in `registerOnChange` to propagate changes back to the form.
    propagateChange = (_) => {
    };
    ngOnInit() {
    }
    onInputChange() {
        this.newValue.emit(this.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: Input2Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: Input2Component, selector: "app-input-new", inputs: { className: "className", inputClassName: "inputClassName", placeHolder: "placeHolder", value: "value", label: "label", required: "required", readonly: "readonly", disabled: "disabled" }, outputs: { newValue: "newValue" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: Input2Component,
                multi: true
            }], ngImport: i0, template: "<div [ngClass]=\"className\">\n  <input [ngClass]=\"inputClassName\"\n         [attr.placeholder]=\"placeHolder\"\n         type=\"text\"\n         [(ngModel)]=\"value\"\n         (input)=\"onInputChange()\"\n         [readOnly]=\"readonly\"\n         [disabled]=\"disabled\"\n         [required]=\"required\"\n  >\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: Input2Component, decorators: [{
            type: Component,
            args: [{ selector: 'app-input-new', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: Input2Component,
                            multi: true
                        }], template: "<div [ngClass]=\"className\">\n  <input [ngClass]=\"inputClassName\"\n         [attr.placeholder]=\"placeHolder\"\n         type=\"text\"\n         [(ngModel)]=\"value\"\n         (input)=\"onInputChange()\"\n         [readOnly]=\"readonly\"\n         [disabled]=\"disabled\"\n         [required]=\"required\"\n  >\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                type: Input
            }], inputClassName: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], value: [{
                type: Input
            }], label: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], newValue: [{
                type: Output
            }] } });

class FormErrorComponent {
    errorMessage = "";
    errorClass = "";
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: FormErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: FormErrorComponent, selector: "app-form-label", inputs: { errorMessage: "errorMessage", errorClass: "errorClass" }, ngImport: i0, template: "<span [ngClass]=\"errorClass\">{{ errorMessage }}</span>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: FormErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-form-label', template: "<span [ngClass]=\"errorClass\">{{ errorMessage }}</span>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { errorMessage: [{
                type: Input
            }], errorClass: [{
                type: Input
            }] } });

class DatepickerComponent {
    dateRange = false;
    value;
    placeholder = "";
    class = 'form-group';
    inputClassName = 'form-control';
    disabled = false;
    outsideClick = true;
    theme = 'default';
    selectedDate = new EventEmitter();
    bsConfig = {};
    constructor() { }
    // This is the initial value set to the component
    // @param value The input value.
    writeValue(value) {
        this.value = value;
    }
    // Sets a method in order to propagate changes back to the form.
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // * Registers a callback to be triggered when the control has been touched.
    // * @param fn Callback to be triggered when the number input is touched.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Sets the disabled state through the model
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
    onTouched = () => {
    };
    // Method set in `registerOnChange` to propagate changes back to the form.
    propagateChange = (_) => {
    };
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: DatepickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: DatepickerComponent, selector: "app-datepicker", inputs: { dateRange: "dateRange", value: "value", placeholder: "placeholder", class: "class", inputClassName: "inputClassName", disabled: "disabled", outsideClick: "outsideClick", theme: "theme" }, outputs: { selectedDate: "selectedDate" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: DatepickerComponent,
                multi: true
            }], ngImport: i0, template: "<div [ngClass]=\"class\" class=\"col-xs-12 col-12 col-md-4 form-group\">\n  <input *ngIf=\"!dateRange\"\n         type=\"text\"\n         [attr.placeholder]=\"placeholder\"\n         [ngClass]=\"inputClassName\"\n         bsDatepicker\n         [bsConfig]=\"bsConfig\"\n         [(ngModel)]=\"value\"\n         [isDisabled]=\"disabled\"\n         style=\"border: 1px solid darkgray; background-color: #ffffff; cursor: auto;\" readonly\n         (ngModelChange)=\"onDateChange()\"\n  >\n\n  <input *ngIf=\"dateRange\"\n         type=\"text\"\n         [attr.placeholder]=\"placeholder\"\n         [ngClass]=\"inputClassName\"\n         bsDaterangepicker\n         [bsConfig]=\"bsConfig\"\n         [(ngModel)]=\"value\"\n         [isDisabled]=\"disabled\"\n         style=\"border: 1px solid darkgray; background-color: #ffffff; cursor: auto;\" readonly\n         (ngModelChange)=\"onDateChange()\"\n  >\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3$1.BsDatepickerDirective, selector: "[bsDatepicker]", inputs: ["placement", "triggers", "outsideClick", "container", "outsideEsc", "isDisabled", "minDate", "maxDate", "minMode", "daysDisabled", "datesDisabled", "datesEnabled", "dateCustomClasses", "dateTooltipTexts", "isOpen", "bsValue", "bsConfig"], outputs: ["onShown", "onHidden", "bsValueChange"], exportAs: ["bsDatepicker"] }, { kind: "directive", type: i3$1.BsDatepickerInputDirective, selector: "input[bsDatepicker]" }, { kind: "directive", type: i3$1.BsDaterangepickerDirective, selector: "[bsDaterangepicker]", inputs: ["placement", "triggers", "outsideClick", "container", "outsideEsc", "isOpen", "bsValue", "bsConfig", "isDisabled", "minDate", "maxDate", "dateCustomClasses", "daysDisabled", "datesDisabled", "datesEnabled"], outputs: ["onShown", "onHidden", "bsValueChange"], exportAs: ["bsDaterangepicker"] }, { kind: "directive", type: i3$1.BsDaterangepickerInputDirective, selector: "input[bsDaterangepicker]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: DatepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-datepicker', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: DatepickerComponent,
                            multi: true
                        }], template: "<div [ngClass]=\"class\" class=\"col-xs-12 col-12 col-md-4 form-group\">\n  <input *ngIf=\"!dateRange\"\n         type=\"text\"\n         [attr.placeholder]=\"placeholder\"\n         [ngClass]=\"inputClassName\"\n         bsDatepicker\n         [bsConfig]=\"bsConfig\"\n         [(ngModel)]=\"value\"\n         [isDisabled]=\"disabled\"\n         style=\"border: 1px solid darkgray; background-color: #ffffff; cursor: auto;\" readonly\n         (ngModelChange)=\"onDateChange()\"\n  >\n\n  <input *ngIf=\"dateRange\"\n         type=\"text\"\n         [attr.placeholder]=\"placeholder\"\n         [ngClass]=\"inputClassName\"\n         bsDaterangepicker\n         [bsConfig]=\"bsConfig\"\n         [(ngModel)]=\"value\"\n         [isDisabled]=\"disabled\"\n         style=\"border: 1px solid darkgray; background-color: #ffffff; cursor: auto;\" readonly\n         (ngModelChange)=\"onDateChange()\"\n  >\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { dateRange: [{
                type: Input
            }], value: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], class: [{
                type: Input
            }], inputClassName: [{
                type: Input
            }], disabled: [{
                type: Input
            }], outsideClick: [{
                type: Input
            }], theme: [{
                type: Input
            }], selectedDate: [{
                type: Output
            }] } });

class TextAreaComponent {
    className;
    textAreaClassName;
    placeholder = 'Enter';
    value;
    label;
    required = false;
    readonly = false;
    disabled = false;
    rows = 1;
    cols = 5;
    areaInputValue = new EventEmitter();
    constructor() { }
    // This is the initial value set to the component
    // @param value The input value.
    writeValue(value) {
        this.value = value;
    }
    // Sets a method in order to propagate changes back to the form.
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // * Registers a callback to be triggered when the control has been touched.
    // * @param fn Callback to be triggered when the number input is touched.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Sets the disabled state through the model
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
    onTouched = () => {
    };
    // Method set in `registerOnChange` to propagate changes back to the form.
    propagateChange = (_) => {
    };
    ngOnInit() {
    }
    onInputChange() {
        this.areaInputValue.emit(this.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TextAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: TextAreaComponent, selector: "app-text-area", inputs: { className: "className", textAreaClassName: "textAreaClassName", placeholder: "placeholder", value: "value", label: "label", required: "required", readonly: "readonly", disabled: "disabled", rows: "rows", cols: "cols" }, outputs: { areaInputValue: "areaInputValue" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: TextAreaComponent,
                multi: true
            }], ngImport: i0, template: "<div [ngClass]=\"className\">\n  <textarea\n    [ngClass]=\"textAreaClassName\" [rows]=\"rows\" [cols]=\"cols\" [(ngModel)]=\"value\"\n    [required]=\"required\" [readOnly]=\"readonly\" [disabled]=\"disabled\" (ngModelChange)=\"onInputChange()\"\n  ></textarea>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TextAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text-area', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: TextAreaComponent,
                            multi: true
                        }], template: "<div [ngClass]=\"className\">\n  <textarea\n    [ngClass]=\"textAreaClassName\" [rows]=\"rows\" [cols]=\"cols\" [(ngModel)]=\"value\"\n    [required]=\"required\" [readOnly]=\"readonly\" [disabled]=\"disabled\" (ngModelChange)=\"onInputChange()\"\n  ></textarea>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                type: Input
            }], textAreaClassName: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], label: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }], areaInputValue: [{
                type: Output
            }] } });

class CheckboxComponent {
    label = "";
    data = [];
    value = [];
    disabled = false;
    required = false;
    checkInputValue = new EventEmitter();
    constructor() { }
    // This is the initial value set to the component
    // @param value The input value.
    writeValue(value) {
        // this.value = value;
    }
    // Sets a method in order to propagate changes back to the form.
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // * Registers a callback to be triggered when the control has been touched.
    // * @param fn Callback to be triggered when the number input is touched.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Sets the disabled state through the model
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
    onTouched = () => {
    };
    // Method set in `registerOnChange` to propagate changes back to the form.
    propagateChange = (_) => {
    };
    ngOnInit() {
    }
    isChecked(item) {
        if (!item) {
            return false;
        }
        return this.value.filter(x => x.toString().toLowerCase() === item.toString().toLowerCase()).length > 0;
    }
    onCheckClick(item) {
        if (this.value.filter(x => x.toString().toLowerCase() === item.toString().toLowerCase()).length > 0) {
            this.value = this.value.filter(x => x.toString().toLowerCase() !== item.toString().toLowerCase());
        }
        else {
            this.value = [...this.value, ...item];
        }
        this.checkInputValue.emit(this.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: CheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: CheckboxComponent, selector: "app-checkbox", inputs: { label: "label", data: "data", value: "value", disabled: "disabled", required: "required" }, outputs: { checkInputValue: "checkInputValue" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: CheckboxComponent,
                multi: true
            }], ngImport: i0, template: "<div class=\"row\">\n  <ng-container *ngFor=\"let item of data; index as i\">\n    <div [ngClass]=\"item.className\">\n      <input\n        type=\"checkbox\" checked *ngIf=\"isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <input\n        type=\"checkbox\" *ngIf=\"!isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <app-form-label\n        class=\"mx-1\"\n        [errorClass]=\"'form-check-label'\"\n        [errorMessage]=\"item.label\"\n      ></app-form-label>\n    </div>\n  </ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: FormErrorComponent, selector: "app-form-label", inputs: ["errorMessage", "errorClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-checkbox', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: CheckboxComponent,
                            multi: true
                        }], template: "<div class=\"row\">\n  <ng-container *ngFor=\"let item of data; index as i\">\n    <div [ngClass]=\"item.className\">\n      <input\n        type=\"checkbox\" checked *ngIf=\"isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <input\n        type=\"checkbox\" *ngIf=\"!isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <app-form-label\n        class=\"mx-1\"\n        [errorClass]=\"'form-check-label'\"\n        [errorMessage]=\"item.label\"\n      ></app-form-label>\n    </div>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], data: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], checkInputValue: [{
                type: Output
            }] } });

class RadioComponent {
    label = "";
    data = [];
    value = "";
    disabled = false;
    required = false;
    checkInputValue = new EventEmitter();
    constructor() { }
    // This is the initial value set to the component
    // @param value The input value.
    writeValue(value) {
        // this.value = value;
    }
    // Sets a method in order to propagate changes back to the form.
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // * Registers a callback to be triggered when the control has been touched.
    // * @param fn Callback to be triggered when the number input is touched.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Sets the disabled state through the model
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
    onTouched = () => {
    };
    // Method set in `registerOnChange` to propagate changes back to the form.
    propagateChange = (_) => {
    };
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: RadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: RadioComponent, selector: "app-radio", inputs: { label: "label", data: "data", value: "value", disabled: "disabled", required: "required" }, outputs: { checkInputValue: "checkInputValue" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: RadioComponent,
                multi: true
            }], ngImport: i0, template: "<div class=\"row\">\n  <ng-container *ngFor=\"let item of data; index as i\">\n    <div [ngClass]=\"item.className\">\n      <input\n        type=\"radio\" checked *ngIf=\"isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <input\n        type=\"radio\" *ngIf=\"!isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <app-form-label\n        class=\"mx-1\"\n        [errorClass]=\"'form-check-label'\"\n        [errorMessage]=\"item.label\"\n      ></app-form-label>\n    </div>\n  </ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: FormErrorComponent, selector: "app-form-label", inputs: ["errorMessage", "errorClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: RadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-radio', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: RadioComponent,
                            multi: true
                        }], template: "<div class=\"row\">\n  <ng-container *ngFor=\"let item of data; index as i\">\n    <div [ngClass]=\"item.className\">\n      <input\n        type=\"radio\" checked *ngIf=\"isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <input\n        type=\"radio\" *ngIf=\"!isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <app-form-label\n        class=\"mx-1\"\n        [errorClass]=\"'form-check-label'\"\n        [errorMessage]=\"item.label\"\n      ></app-form-label>\n    </div>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], data: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], checkInputValue: [{
                type: Output
            }] } });

class SharedUIModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SharedUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.6", ngImport: i0, type: SharedUIModule, declarations: [InputComponent,
            SelectComponent,
            Input2Component,
            FormErrorComponent,
            DatepickerComponent,
            TextAreaComponent,
            CheckboxComponent,
            RadioComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule, i3$1.BsDatepickerModule], exports: [InputComponent,
            SelectComponent,
            Input2Component,
            FormErrorComponent,
            DatepickerComponent,
            TextAreaComponent,
            CheckboxComponent,
            RadioComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SharedUIModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
            BsDatepickerModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SharedUIModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        InputComponent,
                        SelectComponent,
                        Input2Component,
                        FormErrorComponent,
                        DatepickerComponent,
                        TextAreaComponent,
                        CheckboxComponent,
                        RadioComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgSelectModule,
                        BsDatepickerModule.forRoot()
                    ],
                    providers: [],
                    exports: [
                        InputComponent,
                        SelectComponent,
                        Input2Component,
                        FormErrorComponent,
                        DatepickerComponent,
                        TextAreaComponent,
                        CheckboxComponent,
                        RadioComponent,
                    ]
                }]
        }] });

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    baseURL: '',
    // mapAPI: 'AIzaSyCitsCwvMWsltm4FrzPbD1rjksZXAmjwag',
};

class ApiService {
    http;
    constructor(http) {
        this.http = http;
    }
    get(path, queryParms, baseUrl = environment.baseURL) {
        let httpParams;
        let httpHeaders = new HttpHeaders();
        Object.keys(queryParms).forEach(key => {
            if (key === 'headers') {
                Object.keys(queryParms.headers).forEach(hkey => {
                    if (queryParms.headers[hkey] !== null && queryParms.headers[hkey] !== '') {
                        // tslint:disable-next-line: quotemark
                        httpHeaders = httpHeaders.set(hkey, queryParms.headers[hkey]);
                    }
                });
            }
            else {
                httpParams = this.getQueryParams(queryParms);
            }
        });
        return this.http
            .get(`${baseUrl + path}`, {
            headers: httpHeaders,
            observe: 'response',
            params: httpParams
        })
            .pipe(retry(1), shareReplay());
    }
    getSingle(path, httpHeaders = {}, baseUrl = environment.baseURL) {
        return this.http.get(`${baseUrl + path}`, { headers: httpHeaders, observe: 'response' }).pipe(retry(1), shareReplay());
    }
    post(path, requestObject, httpHeaders = {}, baseUrl = environment.baseURL) {
        return this.http
            .post(`${baseUrl + path}`, requestObject, {
            headers: httpHeaders,
            observe: 'response'
        })
            .pipe(retry(1), shareReplay());
    }
    postFormEncoded(path, requestObject, httpHeaders = {}, baseUrl = environment.baseURL) {
        const body = new URLSearchParams();
        if (requestObject) {
            Object.keys(requestObject).forEach(obj => {
                if (requestObject[obj] !== null || requestObject[obj] !== undefined) {
                    body.set(obj, requestObject[obj]);
                }
            });
        }
        return this.http
            .post(`${baseUrl + path}`, body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, observe: 'response' })
            .pipe(retry(1), shareReplay());
    }
    uploadFile(path, requestObject, baseUrl = environment.baseURL) {
        return this.http
            .post(`${baseUrl + path}`, requestObject, {
            reportProgress: true,
            observe: 'events'
        })
            .pipe(retry(1), shareReplay());
    }
    put(path, requestObject, httpHeaders = {}, baseUrl = environment.baseURL) {
        return this.http
            .put(`${baseUrl + path}`, requestObject, {
            headers: httpHeaders,
            observe: 'response'
        })
            .pipe(retry(1), shareReplay());
    }
    delete(path, httpHeaders = {}, baseUrl = environment.baseURL) {
        return this.http.delete(`${baseUrl + path}`, { headers: httpHeaders, observe: 'response' }).pipe(shareReplay());
    }
    getQueryParams(queryParams) {
        let queryString = new HttpParams();
        Object.keys(queryParams).forEach(param => {
            if (param !== 'headers') {
                if (queryParams[param] !== null && queryParams[param] !== '') {
                    const value = queryParams[param].toString().trim();
                    queryString = queryString.append(param, value);
                }
            }
        });
        return queryString;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ApiService, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ApiService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ApiService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }]; } });

// import { ToastrService } from 'ngx-toastr';
class NotificationService {
    zone;
    constructor(
    // private toastService: ToastrService,
    zone) {
        this.zone = zone;
    }
    showSuccess(message) {
        // Had an issue with the snackbar being ran outside of angular's zone.
        this.zone.run(() => {
            // this.toastService.success(message, 'Success');
        });
    }
    showError(message) {
        this.zone.run(() => {
            // The second parameter is the text in the button. 
            // In the third, we send in the css class for the snack bar.
            // this.toastService.error(message, 'Error');
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NotificationService, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NotificationService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; } });

class ErrorService {
    getClientErrorMessage(error) {
        return error.message ?
            error.message :
            error.toString();
    }
    getServerErrorMessage(error) {
        return navigator.onLine ?
            error.error.message ? error.error.message : error.message :
            'No Internet Connection';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ErrorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ErrorService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ErrorService, decorators: [{
            type: Injectable
        }] });

class GlobalErrorHandlerService {
    injector;
    constructor(injector) {
        this.injector = injector;
    }
    handleError(error) {
        const errorService = this.injector.get(ErrorService);
        // const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);
        const router = this.injector.get(Router);
        let message;
        if (error instanceof HttpErrorResponse) {
            // Server error
            console.log('server');
            if (error.status !== 401) {
                // UtilityService.clearLocalStorage();
                // router.navigate(['auth']);
                // console.log('status')
                message = errorService.getServerErrorMessage(error);
                notifier.showError(message);
            }
        }
        else {
            // Client Error
            // console.log('client')
            // message = errorService.getClientErrorMessage(error);
            // notifier.showError(message);
        }
        // Always log errors
        // logger.logError(message, stackTrace);
        console.error(error);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: GlobalErrorHandlerService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: GlobalErrorHandlerService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: GlobalErrorHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class LoaderService {
    // loader state maintain: not any
    loaderSubject = new Subject();
    loaderState = this.loaderSubject.asObservable();
    constructor() { }
    show() {
        // loader state maintain
        this.loaderSubject.next({ show: true });
    }
    hide() {
        // loader state maintain
        this.loaderSubject.next({ show: false });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class UtilityService {
    static convertObjectToJson(res) {
        return JSON.parse(JSON.stringify(res.body));
    }
    static setLocalStorage(property, value) {
        localStorage.setItem(property, value);
    }
    static setMultiLocalStorage(array) {
        array.forEach(item => {
            localStorage.setItem(item[0], item[1]);
        });
    }
    static getLocalStorage(property) {
        if (localStorage.getItem(property)) {
            return localStorage.getItem(property);
        }
        else {
            return null;
        }
    }
    static removeItemLocalStorage(property) {
        if (localStorage.getItem(property)) {
            localStorage.removeItem(property);
        }
    }
    static clearLocalStorage() {
        localStorage.clear();
    }
    static createParameterizedUrl(url, params) {
        let newUrl = url;
        Object.keys(params).forEach(param => {
            const regex = new RegExp('{' + param + '}', 'g');
            newUrl = newUrl.replace(regex, params[param]);
        });
        return newUrl;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: UtilityService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: UtilityService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: UtilityService, decorators: [{
            type: Injectable
        }] });

class LoaderInterceptorService {
    loaderService;
    injector;
    totalRequests = 0;
    constructor(loaderService, injector) {
        this.loaderService = loaderService;
        this.injector = injector;
    }
    intercept(req, next) {
        this.totalRequests++;
        this.showLoader();
        const notifier = this.injector.get(NotificationService);
        return next.handle(req).pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (event.body) {
                    // const doNotShowMsgUrl = Constants.DO_NOT_SHOW_MSG.find(url => event.url.indexOf(url) >= 0 || event.url.indexOf('display') >= 0);
                    const doNotShowMsgUrl = '';
                    if (!doNotShowMsgUrl) {
                        const { message } = UtilityService.convertObjectToJson(event);
                        if (message) {
                            notifier.showSuccess(message);
                        }
                    }
                }
                this.onEnd();
            }
        }, (err) => {
            this.onEnd();
        }));
    }
    onEnd() {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.hideLoader();
        }
    }
    showLoader() {
        this.loaderService.show();
    }
    hideLoader() {
        this.loaderService.hide();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderInterceptorService, deps: [{ token: LoaderService }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderInterceptorService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderInterceptorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: LoaderService }, { type: i0.Injector }]; } });

class AuthGuard {
    router;
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AuthGuard, deps: [{ token: i1$2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AuthGuard, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.Router }]; } });

class TokenInterceptService {
    constructor() { }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const user = localStorage.getItem('token');
        if (user && this.notByPassRoute(request.url)) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + user
                }
            });
        }
        return next.handle(request);
    }
    notByPassRoute(requestUrl) {
        return true;
        // return ! (requestUrl.includes(config.partialUrls.countries));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TokenInterceptService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TokenInterceptService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TokenInterceptService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

/**
 * CoreModule is used mainly for singleton services, universal components, guards, interceptors etc...
 * It should be imported in AppModule, no other module should import this, since we need the singleton instance
 * If the CoreModule is imported more than once than it will throw the below error
 * 'Core Module is already loaded, You should only load CoreModule in AppModule'
 */
class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('Core Module is already loaded, You should only load CoreModule in AppModule');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.6", ngImport: i0, type: CoreModule, imports: [HttpClientModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: CoreModule, providers: [
            ApiService,
            NotificationService,
            ErrorService,
            AuthGuard,
            { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
            LoaderService,
            UtilityService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: LoaderInterceptorService,
                multi: true
            },
            {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptService,
                multi: true
            }
        ], imports: [HttpClientModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        HttpClientModule,
                    ],
                    declarations: [],
                    providers: [
                        ApiService,
                        NotificationService,
                        ErrorService,
                        AuthGuard,
                        { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
                        LoaderService,
                        UtilityService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: LoaderInterceptorService,
                            multi: true
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: TokenInterceptService,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: CoreModule, decorators: [{
                    type: SkipSelf
                }, {
                    type: Optional
                }] }]; } });

class TableSearchPipe {
    transform(array, query, searchfrom) {
        if (query) {
            return this.filter(query, array, searchfrom);
        }
        return array;
    }
    filter(query, array, from) {
        for (const item in from) {
            let mustreturn = false;
            array.map(x => {
                if (x[from[parseInt(item, 10)]].toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1) {
                    mustreturn = true;
                }
            });
            if (mustreturn) {
                return _.filter(array, y => y[from[parseInt(item, 10)]].toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1);
            }
        }
        return [];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TableSearchPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.6", ngImport: i0, type: TableSearchPipe, name: "tableFilter" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TableSearchPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'tableFilter'
                }]
        }] });

const Constants = {
    limitOptions: [
        { value: 5 },
        { value: 10 },
        { value: 20 },
        { value: 50 },
        { value: 100 },
        { value: 500 }
    ],
    ROUTES: [
        {
            id: 1,
            path: '/dashboard',
            title: 'Dashboard',
            type: 'link',
            icontype: 'nc-icon nc-bank'
        }, {
            id: 2,
            path: '/users',
            title: 'Users',
            type: 'link',
            icontype: 'nc-icon nc-single-02'
        }, {
            id: 3,
            path: '/posts',
            title: 'Posts',
            type: 'link',
            icontype: 'nc-icon nc-paper'
        }, {
            id: 4,
            path: '/staff',
            title: 'Staff management',
            type: 'sub',
            collapse: 'staff',
            icontype: 'nc-icon nc-laptop',
            children: [
                { path: 'list', title: 'View members', ab: 'V' },
                { path: 'create', title: 'Create member', ab: 'C' }
            ]
        }, {
            id: 5,
            path: '/tickets',
            title: 'Tickets',
            type: 'link',
            icontype: 'nc-icon nc-email-85'
        }, {
            id: 6,
            path: '/reports',
            title: 'Reports',
            type: 'link',
            icontype: 'nc-icon nc-chart-pie-36'
        }, {
            id: 7,
            path: '/settings',
            title: 'Settings',
            type: 'sub',
            collapse: 'settings',
            icontype: 'nc-icon nc-settings-gear-65',
            children: [
                { path: 'chat-categories', title: 'Chat categories', ab: 'CC' },
                { path: 'abusive-words', title: 'Abusive words', ab: 'AW' },
                { path: 'expression-icons', title: 'Expression Icons', ab: 'EI' },
                { path: 'cl-post', title: 'CL Post', ab: 'CP' },
                { path: 'plan-amount', title: 'Plan Amount', ab: 'PA' },
                { path: 'faq', title: 'FAQ', ab: 'FAQ' }
            ]
        }
    ]
    // ,
    // reaction: [
    //     {
    //         reactionId: 1,
    //         description: "one star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/one-star.png"
    //     },
    //     {
    //         reactionId: 2,
    //         description: "two star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/two-star.png"
    //     },
    //     {
    //         reactionId: 3,
    //         description: "three star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/three-star.png"
    //     },
    //     {
    //         reactionId: 4,
    //         description: "four star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/four-star.png"
    //     },
    //     {
    //         reactionId: 5,
    //         description: "five star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/five-star.png"
    //     }
    // ],
    // countries: [
    //     {
    //         "countryId": 1,
    //         "name": "Afghanistan",
    //         "iso2": "AF",
    //         "iso3": "AFG",
    //         "code": "+93",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AFG.png"
    //     },
    //     {
    //         "countryId": 2,
    //         "name": "Albania",
    //         "iso2": "AL",
    //         "iso3": "ALB",
    //         "code": "+355",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ALB.png"
    //     },
    //     {
    //         "countryId": 3,
    //         "name": "Algeria",
    //         "iso2": "DZ",
    //         "iso3": "DZA",
    //         "code": "+213",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DZA.png"
    //     },
    //     {
    //         "countryId": 4,
    //         "name": "American Samoa",
    //         "iso2": "AS",
    //         "iso3": "ASM",
    //         "code": "+1 684",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ASM.png"
    //     },
    //     {
    //         "countryId": 5,
    //         "name": "Andorra",
    //         "iso2": "AD",
    //         "iso3": "AND",
    //         "code": "+376",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AND.png"
    //     },
    //     {
    //         "countryId": 6,
    //         "name": "Angola",
    //         "iso2": "AO",
    //         "iso3": "AGO",
    //         "code": "+244",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AGO.png"
    //     },
    //     {
    //         "countryId": 7,
    //         "name": "Anguilla",
    //         "iso2": "AI",
    //         "iso3": "AIA",
    //         "code": "+1 264",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AIA.png"
    //     },
    //     {
    //         "countryId": 8,
    //         "name": "Antarctica",
    //         "iso2": "AQ",
    //         "iso3": "ATA",
    //         "code": "+672",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ATA.png"
    //     },
    //     {
    //         "countryId": 9,
    //         "name": "Argentina",
    //         "iso2": "AR",
    //         "iso3": "ARG",
    //         "code": "+54",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ARG.png"
    //     },
    //     {
    //         "countryId": 10,
    //         "name": "Armenia",
    //         "iso2": "AM",
    //         "iso3": "ARM",
    //         "code": "+374",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ARM.png"
    //     },
    //     {
    //         "countryId": 11,
    //         "name": "Aruba",
    //         "iso2": "AW",
    //         "iso3": "ABW",
    //         "code": "+297",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ABW.png"
    //     },
    //     {
    //         "countryId": 12,
    //         "name": "Australia",
    //         "iso2": "AU",
    //         "iso3": "AUS",
    //         "code": "+61",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AUS.png"
    //     },
    //     {
    //         "countryId": 13,
    //         "name": "Austria",
    //         "iso2": "AT",
    //         "iso3": "AUT",
    //         "code": "+43",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AUT.png"
    //     },
    //     {
    //         "countryId": 14,
    //         "name": "Azerbaijan",
    //         "iso2": "AZ",
    //         "iso3": "AZE",
    //         "code": "+994",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AZE.png"
    //     },
    //     {
    //         "countryId": 15,
    //         "name": "Bahamas",
    //         "iso2": "BS",
    //         "iso3": "BHS",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BHS.png"
    //     },
    //     {
    //         "countryId": 16,
    //         "name": "Bahrain",
    //         "iso2": "BH",
    //         "iso3": "BHR",
    //         "code": "+973",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BHR.png"
    //     },
    //     {
    //         "countryId": 17,
    //         "name": "Bangladesh",
    //         "iso2": "BD",
    //         "iso3": "BGD",
    //         "code": "+880",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BGD.png"
    //     },
    //     {
    //         "countryId": 18,
    //         "name": "Barbados",
    //         "iso2": "BB",
    //         "iso3": "BRB",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BRB.png"
    //     },
    //     {
    //         "countryId": 19,
    //         "name": "Belarus",
    //         "iso2": "BY",
    //         "iso3": "BLR",
    //         "code": "+375",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BLR.png"
    //     },
    //     {
    //         "countryId": 20,
    //         "name": "Belgium",
    //         "iso2": "BE",
    //         "iso3": "BEL",
    //         "code": "+32",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BEL.png"
    //     },
    //     {
    //         "countryId": 21,
    //         "name": "Belize",
    //         "iso2": "BZ",
    //         "iso3": "BLZ",
    //         "code": "+501",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BLZ.png"
    //     },
    //     {
    //         "countryId": 22,
    //         "name": "Benin",
    //         "iso2": "BJ",
    //         "iso3": "BEN",
    //         "code": "+229",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BEN.png"
    //     },
    //     {
    //         "countryId": 23,
    //         "name": "Bermuda",
    //         "iso2": "BM",
    //         "iso3": "BMU",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BMU.png"
    //     },
    //     {
    //         "countryId": 24,
    //         "name": "Bhutan",
    //         "iso2": "BT",
    //         "iso3": "BTN",
    //         "code": "+975",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BTN.png"
    //     },
    //     {
    //         "countryId": 25,
    //         "name": "Bolivia",
    //         "iso2": "BO",
    //         "iso3": "BOL",
    //         "code": "+591",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BOL.png"
    //     },
    //     {
    //         "countryId": 26,
    //         "name": "Bosnia and Herzegovina",
    //         "iso2": "BA",
    //         "iso3": "BIH",
    //         "code": "+387",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BIH.png"
    //     },
    //     {
    //         "countryId": 27,
    //         "name": "Botswana",
    //         "iso2": "BW",
    //         "iso3": "BWA",
    //         "code": "+267",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BWA.png"
    //     },
    //     {
    //         "countryId": 28,
    //         "name": "Brazil",
    //         "iso2": "BR",
    //         "iso3": "BRA",
    //         "code": "+55",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BRA.png"
    //     },
    //     {
    //         "countryId": 29,
    //         "name": "British Virgin Islands",
    //         "iso2": "VG",
    //         "iso3": "VGB",
    //         "code": "+1 284",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VGB.png"
    //     },
    //     {
    //         "countryId": 30,
    //         "name": "Brunei",
    //         "iso2": "BN",
    //         "iso3": "BRN",
    //         "code": "+673",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BRN.png"
    //     },
    //     {
    //         "countryId": 31,
    //         "name": "Bulgaria",
    //         "iso2": "BG",
    //         "iso3": "BGR",
    //         "code": "+359",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BGR.png"
    //     },
    //     {
    //         "countryId": 32,
    //         "name": "Burkina Faso",
    //         "iso2": "BF",
    //         "iso3": "BFA",
    //         "code": "+226",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BFA.png"
    //     },
    //     {
    //         "countryId": 33,
    //         "name": "Burundi",
    //         "iso2": "BI",
    //         "iso3": "BDI",
    //         "code": "+257",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BDI.png"
    //     },
    //     {
    //         "countryId": 34,
    //         "name": "Cambodia",
    //         "iso2": "KH",
    //         "iso3": "KHM",
    //         "code": "+855",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KHM.png"
    //     },
    //     {
    //         "countryId": 35,
    //         "name": "Cameroon",
    //         "iso2": "CM",
    //         "iso3": "CMR",
    //         "code": "+237",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CMR.png"
    //     },
    //     {
    //         "countryId": 36,
    //         "name": "Canada",
    //         "iso2": "CA",
    //         "iso3": "CAN",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CAN.png"
    //     },
    //     {
    //         "countryId": 37,
    //         "name": "Cape Verde",
    //         "iso2": "CV",
    //         "iso3": "CPV",
    //         "code": "+238",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CPV.png"
    //     },
    //     {
    //         "countryId": 38,
    //         "name": "Cayman Islands",
    //         "iso2": "KY",
    //         "iso3": "CYM",
    //         "code": "+1-345",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CYM.png"
    //     },
    //     {
    //         "countryId": 39,
    //         "name": "Central African Republic",
    //         "iso2": "CF",
    //         "iso3": "CAF",
    //         "code": "+236",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CAF.png"
    //     },
    //     {
    //         "countryId": 40,
    //         "name": "Chile",
    //         "iso2": "CL",
    //         "iso3": "CHL",
    //         "code": "+56",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CHL.png"
    //     },
    //     {
    //         "countryId": 41,
    //         "name": "China",
    //         "iso2": "CN",
    //         "iso3": "CHN",
    //         "code": "+86",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CHN.png"
    //     },
    //     {
    //         "countryId": 42,
    //         "name": "Colombia",
    //         "iso2": "CO",
    //         "iso3": "COL",
    //         "code": "+57",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COL.png"
    //     },
    //     {
    //         "countryId": 43,
    //         "name": "Comoros",
    //         "iso2": "KM",
    //         "iso3": "COM",
    //         "code": "+269",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COM.png"
    //     },
    //     {
    //         "countryId": 44,
    //         "name": "Cook Islands",
    //         "iso2": "CK",
    //         "iso3": "COK",
    //         "code": "+682",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COK.png"
    //     },
    //     {
    //         "countryId": 45,
    //         "name": "Costa Rica",
    //         "iso2": "CR",
    //         "iso3": "CRI",
    //         "code": "+506",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CRI.png"
    //     },
    //     {
    //         "countryId": 46,
    //         "name": "Croatia",
    //         "iso2": "HR",
    //         "iso3": "HRV",
    //         "code": "+385",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HRV.png"
    //     },
    //     {
    //         "countryId": 47,
    //         "name": "Cuba",
    //         "iso2": "CU",
    //         "iso3": "CUB",
    //         "code": "+53",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CUB.png"
    //     },
    //     {
    //         "countryId": 48,
    //         "name": "Curacao",
    //         "iso2": "CW",
    //         "iso3": "CUW",
    //         "code": "+599",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CUW.png"
    //     },
    //     {
    //         "countryId": 49,
    //         "name": "Cyprus",
    //         "iso2": "CY",
    //         "iso3": "CYP",
    //         "code": "+357",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CYP.png"
    //     },
    //     {
    //         "countryId": 50,
    //         "name": "Czech Republic",
    //         "iso2": "CZ",
    //         "iso3": "CZE",
    //         "code": "+420",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CZE.png"
    //     },
    //     {
    //         "countryId": 51,
    //         "name": "Democratic Republic of Congo",
    //         "iso2": "CD",
    //         "iso3": "COD",
    //         "code": "+243",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COD.png"
    //     },
    //     {
    //         "countryId": 52,
    //         "name": "Denmark",
    //         "iso2": "DK",
    //         "iso3": "DNK",
    //         "code": "+45",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DNK.png"
    //     },
    //     {
    //         "countryId": 53,
    //         "name": "Djibouti",
    //         "iso2": "DJ",
    //         "iso3": "DJI",
    //         "code": "+253",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DJI.png"
    //     },
    //     {
    //         "countryId": 54,
    //         "name": "Dominica",
    //         "iso2": "DM",
    //         "iso3": "DMA",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DMA.png"
    //     },
    //     {
    //         "countryId": 55,
    //         "name": "Dominican Republic",
    //         "iso2": "DO",
    //         "iso3": "DOM",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DOM.png"
    //     },
    //     {
    //         "countryId": 56,
    //         "name": "East Timor",
    //         "iso2": "TL",
    //         "iso3": "TLS",
    //         "code": "+670",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TLS.png"
    //     },
    //     {
    //         "countryId": 57,
    //         "name": "Ecuador",
    //         "iso2": "EC",
    //         "iso3": "ECU",
    //         "code": "+593",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ECU.png"
    //     },
    //     {
    //         "countryId": 58,
    //         "name": "Egypt",
    //         "iso2": "EG",
    //         "iso3": "EGY",
    //         "code": "+20",
    //         "flag": "https://www.countryareacode.net/pictures/flag/EGY.png"
    //     },
    //     {
    //         "countryId": 59,
    //         "name": "El Salvador",
    //         "iso2": "SV",
    //         "iso3": "SLV",
    //         "code": "+503",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SLV.png"
    //     },
    //     {
    //         "countryId": 60,
    //         "name": "Equatorial Guinea",
    //         "iso2": "GQ",
    //         "iso3": "GNQ",
    //         "code": "+240",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GNQ.png"
    //     },
    //     {
    //         "countryId": 61,
    //         "name": "Eritrea",
    //         "iso2": "ER",
    //         "iso3": "ERI",
    //         "code": "+291",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ERI.png"
    //     },
    //     {
    //         "countryId": 62,
    //         "name": "Estonia",
    //         "iso2": "EE",
    //         "iso3": "EST",
    //         "code": "+372",
    //         "flag": "https://www.countryareacode.net/pictures/flag/EST.png"
    //     },
    //     {
    //         "countryId": 63,
    //         "name": "Ethiopia",
    //         "iso2": "ET",
    //         "iso3": "ETH",
    //         "code": "+251",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ETH.png"
    //     },
    //     {
    //         "countryId": 64,
    //         "name": "Falkland Islands",
    //         "iso2": "FK",
    //         "iso3": "FLK",
    //         "code": "+500",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FLK.png"
    //     },
    //     {
    //         "countryId": 65,
    //         "name": "Faroe Islands",
    //         "iso2": "FO",
    //         "iso3": "FRO",
    //         "code": "+298",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FRO.png"
    //     },
    //     {
    //         "countryId": 66,
    //         "name": "Fiji",
    //         "iso2": "FJ",
    //         "iso3": "FJI",
    //         "code": "+679",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FJI.png"
    //     },
    //     {
    //         "countryId": 67,
    //         "name": "Finland",
    //         "iso2": "FI",
    //         "iso3": "FIN",
    //         "code": "+358",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FIN.png"
    //     },
    //     {
    //         "countryId": 68,
    //         "name": "France",
    //         "iso2": "FR",
    //         "iso3": "FRA",
    //         "code": "+33",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FRA.png"
    //     },
    //     {
    //         "countryId": 69,
    //         "name": "French Polynesia",
    //         "iso2": "PF",
    //         "iso3": "PYF",
    //         "code": "+689",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PYF.png"
    //     },
    //     {
    //         "countryId": 70,
    //         "name": "Gabon",
    //         "iso2": "GA",
    //         "iso3": "GAB",
    //         "code": "+241",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GAB.png"
    //     },
    //     {
    //         "countryId": 71,
    //         "name": "Gambia",
    //         "iso2": "GM",
    //         "iso3": "GMB",
    //         "code": "+220",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GMB.png"
    //     },
    //     {
    //         "countryId": 72,
    //         "name": "Georgia",
    //         "iso2": "GE",
    //         "iso3": "GEO",
    //         "code": "+995",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GEO.png"
    //     },
    //     {
    //         "countryId": 73,
    //         "name": "Germany",
    //         "iso2": "DE",
    //         "iso3": "DEU",
    //         "code": "+49",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DEU.png"
    //     },
    //     {
    //         "countryId": 74,
    //         "name": "Ghana",
    //         "iso2": "GH",
    //         "iso3": "GHA",
    //         "code": "+233",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GHA.png"
    //     },
    //     {
    //         "countryId": 75,
    //         "name": "Gibraltar",
    //         "iso2": "GI",
    //         "iso3": "GIB",
    //         "code": "+350",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GIB.png"
    //     },
    //     {
    //         "countryId": 76,
    //         "name": "Greece",
    //         "iso2": "GR",
    //         "iso3": "GRC",
    //         "code": "+30",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GRC.png"
    //     },
    //     {
    //         "countryId": 77,
    //         "name": "Greenland",
    //         "iso2": "GL",
    //         "iso3": "GRL",
    //         "code": "+299",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GRL.png"
    //     },
    //     {
    //         "countryId": 78,
    //         "name": "Guadeloupe",
    //         "iso2": "GP",
    //         "iso3": "GLP",
    //         "code": "+590",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GLP.png"
    //     },
    //     {
    //         "countryId": 79,
    //         "name": "Guam",
    //         "iso2": "GU",
    //         "iso3": "GUM",
    //         "code": "+1 671",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GUM.png"
    //     },
    //     {
    //         "countryId": 80,
    //         "name": "Guatemala",
    //         "iso2": "GT",
    //         "iso3": "GTM",
    //         "code": "+502",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GTM.png"
    //     },
    //     {
    //         "countryId": 81,
    //         "name": "Guinea",
    //         "iso2": "GN",
    //         "iso3": "GIN",
    //         "code": "+224",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GIN.png"
    //     },
    //     {
    //         "countryId": 82,
    //         "name": "Guinea-Bissau",
    //         "iso2": "GW",
    //         "iso3": "GNB",
    //         "code": "+245",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GNB.png"
    //     },
    //     {
    //         "countryId": 83,
    //         "name": "Guyana",
    //         "iso2": "GY",
    //         "iso3": "GUY",
    //         "code": "+592",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GUY.png"
    //     },
    //     {
    //         "countryId": 84,
    //         "name": "Haiti",
    //         "iso2": "HT",
    //         "iso3": "HTI",
    //         "code": "+509",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HTI.png"
    //     },
    //     {
    //         "countryId": 85,
    //         "name": "Honduras",
    //         "iso2": "HN",
    //         "iso3": "HND",
    //         "code": "+504",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HND.png"
    //     },
    //     {
    //         "countryId": 86,
    //         "name": "Hong Kong",
    //         "iso2": "HK",
    //         "iso3": "HKG",
    //         "code": "+852",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HKG.png"
    //     },
    //     {
    //         "countryId": 87,
    //         "name": "Hungary",
    //         "iso2": "HU",
    //         "iso3": "HUN",
    //         "code": "+36",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HUN.png"
    //     },
    //     {
    //         "countryId": 88,
    //         "name": "Iceland",
    //         "iso2": "IS",
    //         "iso3": "ISL",
    //         "code": "+354",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ISL.png"
    //     },
    //     {
    //         "countryId": 89,
    //         "name": "India",
    //         "iso2": "IN",
    //         "iso3": "IND",
    //         "code": "+91",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IND.png"
    //     },
    //     {
    //         "countryId": 90,
    //         "name": "Indonesia",
    //         "iso2": "ID",
    //         "iso3": "IDN",
    //         "code": "+62",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IDN.png"
    //     },
    //     {
    //         "countryId": 91,
    //         "name": "Iran",
    //         "iso2": "IR",
    //         "iso3": "IRN",
    //         "code": "+98",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IRN.png"
    //     },
    //     {
    //         "countryId": 92,
    //         "name": "Iraq",
    //         "iso2": "IQ",
    //         "iso3": "IRQ",
    //         "code": "+964",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IRQ.png"
    //     },
    //     {
    //         "countryId": 93,
    //         "name": "Ireland",
    //         "iso2": "IE",
    //         "iso3": "IRL",
    //         "code": "+353",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IRL.png"
    //     },
    //     {
    //         "countryId": 94,
    //         "name": "Isle of Man",
    //         "iso2": "IM",
    //         "iso3": "IMN",
    //         "code": "+44",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IMN.png"
    //     },
    //     {
    //         "countryId": 95,
    //         "name": "Israel",
    //         "iso2": "IL",
    //         "iso3": "ISR",
    //         "code": "+972",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ISR.png"
    //     },
    //     {
    //         "countryId": 96,
    //         "name": "Italy",
    //         "iso2": "IT",
    //         "iso3": "ITA",
    //         "code": "+39",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ITA.png"
    //     },
    //     {
    //         "countryId": 97,
    //         "name": "Ivory Coast",
    //         "iso2": "CI",
    //         "iso3": "CIV",
    //         "code": "+225",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CIV.png"
    //     },
    //     {
    //         "countryId": 98,
    //         "name": "Jamaica",
    //         "iso2": "JM",
    //         "iso3": "JAM",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/JAM.png"
    //     },
    //     {
    //         "countryId": 99,
    //         "name": "Japan",
    //         "iso2": "JP",
    //         "iso3": "JPN",
    //         "code": "+81",
    //         "flag": "https://www.countryareacode.net/pictures/flag/JPN.png"
    //     },
    //     {
    //         "countryId": 100,
    //         "name": "Jordan",
    //         "iso2": "JO",
    //         "iso3": "JOR",
    //         "code": "+962",
    //         "flag": "https://www.countryareacode.net/pictures/flag/JOR.png"
    //     },
    //     {
    //         "countryId": 101,
    //         "name": "Kazakhstan",
    //         "iso2": "KZ",
    //         "iso3": "KAZ",
    //         "code": "+7",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KAZ.png"
    //     },
    //     {
    //         "countryId": 102,
    //         "name": "Kenya",
    //         "iso2": "KE",
    //         "iso3": "KEN",
    //         "code": "+254",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KEN.png"
    //     },
    //     {
    //         "countryId": 103,
    //         "name": "Kiribati",
    //         "iso2": "KI",
    //         "iso3": "KIR",
    //         "code": "+686",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KIR.png"
    //     },
    //     {
    //         "countryId": 104,
    //         "name": "Kosovo",
    //         "iso2": "XK",
    //         "iso3": "XKX",
    //         "code": "+381",
    //         "flag": "https://www.countryareacode.net/pictures/flag/XKX.png"
    //     },
    //     {
    //         "countryId": 105,
    //         "name": "Kuwait",
    //         "iso2": "KW",
    //         "iso3": "KWT",
    //         "code": "+965",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KWT.png"
    //     },
    //     {
    //         "countryId": 106,
    //         "name": "Kyrgyzstan",
    //         "iso2": "KG",
    //         "iso3": "KGZ",
    //         "code": "+996",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KGZ.png"
    //     },
    //     {
    //         "countryId": 107,
    //         "name": "Laos",
    //         "iso2": "LA",
    //         "iso3": "LAO",
    //         "code": "+856",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LAO.png"
    //     },
    //     {
    //         "countryId": 108,
    //         "name": "Latvia",
    //         "iso2": "LV",
    //         "iso3": "LVA",
    //         "code": "+371",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LVA.png"
    //     },
    //     {
    //         "countryId": 109,
    //         "name": "Lebanon",
    //         "iso2": "LB",
    //         "iso3": "LBN",
    //         "code": "+961",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LBN.png"
    //     },
    //     {
    //         "countryId": 110,
    //         "name": "Lesotho",
    //         "iso2": "LS",
    //         "iso3": "LSO",
    //         "code": "+266",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LSO.png"
    //     },
    //     {
    //         "countryId": 111,
    //         "name": "Liberia",
    //         "iso2": "LR",
    //         "iso3": "LBR",
    //         "code": "+231",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LBR.png"
    //     },
    //     {
    //         "countryId": 112,
    //         "name": "Libya",
    //         "iso2": "LY",
    //         "iso3": "LBY",
    //         "code": "+218",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LBY.png"
    //     },
    //     {
    //         "countryId": 113,
    //         "name": "Liechtenstein",
    //         "iso2": "LI",
    //         "iso3": "LIE",
    //         "code": "+423",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LIE.png"
    //     },
    //     {
    //         "countryId": 114,
    //         "name": "Lithuania",
    //         "iso2": "LT",
    //         "iso3": "LTU",
    //         "code": "+370",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LTU.png"
    //     },
    //     {
    //         "countryId": 115,
    //         "name": "Luxembourg",
    //         "iso2": "LU",
    //         "iso3": "LUX",
    //         "code": "+352",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LUX.png"
    //     },
    //     {
    //         "countryId": 116,
    //         "name": "Macau",
    //         "iso2": "MO",
    //         "iso3": "MAC",
    //         "code": "+853",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MAC.png"
    //     },
    //     {
    //         "countryId": 117,
    //         "name": "Macedonia",
    //         "iso2": "MK",
    //         "iso3": "MKD",
    //         "code": "+389",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MKD.png"
    //     },
    //     {
    //         "countryId": 118,
    //         "name": "Madagascar",
    //         "iso2": "MG",
    //         "iso3": "MDG",
    //         "code": "+261",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MDG.png"
    //     },
    //     {
    //         "countryId": 119,
    //         "name": "Malawi",
    //         "iso2": "MW",
    //         "iso3": "MWI",
    //         "code": "+265",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MWI.png"
    //     },
    //     {
    //         "countryId": 120,
    //         "name": "Malaysia",
    //         "iso2": "MY",
    //         "iso3": "MYS",
    //         "code": "+60",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MYS.png"
    //     },
    //     {
    //         "countryId": 121,
    //         "name": "Maldives",
    //         "iso2": "MV",
    //         "iso3": "MDV",
    //         "code": "+960",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MDV.png"
    //     },
    //     {
    //         "countryId": 122,
    //         "name": "Mali",
    //         "iso2": "ML",
    //         "iso3": "MLI",
    //         "code": "+223",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MLI.png"
    //     },
    //     {
    //         "countryId": 123,
    //         "name": "Malta",
    //         "iso2": "MT",
    //         "iso3": "MLT",
    //         "code": "+356",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MLT.png"
    //     },
    //     {
    //         "countryId": 124,
    //         "name": "Marshall Islands",
    //         "iso2": "MH",
    //         "iso3": "MHL",
    //         "code": "+692",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MHL.png"
    //     },
    //     {
    //         "countryId": 125,
    //         "name": "Mauritania",
    //         "iso2": "MR",
    //         "iso3": "MRT",
    //         "code": "+222",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MRT.png"
    //     },
    //     {
    //         "countryId": 126,
    //         "name": "Mauritius",
    //         "iso2": "MU",
    //         "iso3": "MUS",
    //         "code": "+230",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MUS.png"
    //     },
    //     {
    //         "countryId": 127,
    //         "name": "Mexico",
    //         "iso2": "MX",
    //         "iso3": "MEX",
    //         "code": "+52",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MEX.png"
    //     },
    //     {
    //         "countryId": 128,
    //         "name": "Micronesia",
    //         "iso2": "FM",
    //         "iso3": "FSM",
    //         "code": "+691",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FSM.png"
    //     },
    //     {
    //         "countryId": 129,
    //         "name": "Moldova",
    //         "iso2": "MD",
    //         "iso3": "MDA",
    //         "code": "+373",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MDA.png"
    //     },
    //     {
    //         "countryId": 130,
    //         "name": "Monaco",
    //         "iso2": "MC",
    //         "iso3": "MCO",
    //         "code": "+377",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MCO.png"
    //     },
    //     {
    //         "countryId": 131,
    //         "name": "Mongolia",
    //         "iso2": "MN",
    //         "iso3": "MNG",
    //         "code": "+976",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MNG.png"
    //     },
    //     {
    //         "countryId": 132,
    //         "name": "Montenegro",
    //         "iso2": "ME",
    //         "iso3": "MNE",
    //         "code": "+382",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MNE.png"
    //     },
    //     {
    //         "countryId": 133,
    //         "name": "Montserrat",
    //         "iso2": "MS",
    //         "iso3": "MSR",
    //         "code": "+1 664",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MSR.png"
    //     },
    //     {
    //         "countryId": 134,
    //         "name": "Morocco",
    //         "iso2": "MA",
    //         "iso3": "MAR",
    //         "code": "+212",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MAR.png"
    //     },
    //     {
    //         "countryId": 135,
    //         "name": "Mozambique",
    //         "iso2": "MZ",
    //         "iso3": "MOZ",
    //         "code": "+258",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MOZ.png"
    //     },
    //     {
    //         "countryId": 136,
    //         "name": "Myanmar [Burma]",
    //         "iso2": "MM",
    //         "iso3": "MMR",
    //         "code": "+95",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MMR.png"
    //     },
    //     {
    //         "countryId": 137,
    //         "name": "Namibia",
    //         "iso2": "NA",
    //         "iso3": "NAM",
    //         "code": "+264",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NAM.png"
    //     },
    //     {
    //         "countryId": 138,
    //         "name": "Nauru",
    //         "iso2": "NR",
    //         "iso3": "NRU",
    //         "code": "+674",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NRU.png"
    //     },
    //     {
    //         "countryId": 139,
    //         "name": "Nepal",
    //         "iso2": "NP",
    //         "iso3": "NPL",
    //         "code": "+977",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NPL.png"
    //     },
    //     {
    //         "countryId": 140,
    //         "name": "Netherlands",
    //         "iso2": "NL",
    //         "iso3": "NLD",
    //         "code": "+31",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NLD.png"
    //     },
    //     {
    //         "countryId": 141,
    //         "name": "New Caledonia",
    //         "iso2": "NC",
    //         "iso3": "NCL",
    //         "code": "+687",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NCL.png"
    //     },
    //     {
    //         "countryId": 142,
    //         "name": "New Zealand",
    //         "iso2": "NZ",
    //         "iso3": "NZL",
    //         "code": "+64",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NZL.png"
    //     },
    //     {
    //         "countryId": 143,
    //         "name": "Nicaragua",
    //         "iso2": "NI",
    //         "iso3": "NIC",
    //         "code": "+505",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NIC.png"
    //     },
    //     {
    //         "countryId": 144,
    //         "name": "Niger",
    //         "iso2": "NE",
    //         "iso3": "NER",
    //         "code": "+227",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NER.png"
    //     },
    //     {
    //         "countryId": 145,
    //         "name": "Nigeria",
    //         "iso2": "NG",
    //         "iso3": "NGA",
    //         "code": "+234",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NGA.png"
    //     },
    //     {
    //         "countryId": 146,
    //         "name": "Niue",
    //         "iso2": "NU",
    //         "iso3": "NIU",
    //         "code": "+683",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NIU.png"
    //     },
    //     {
    //         "countryId": 147,
    //         "name": "Norfolk Island",
    //         "iso2": "NF",
    //         "iso3": "NFK",
    //         "code": "+672",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NFK.png"
    //     },
    //     {
    //         "countryId": 148,
    //         "name": "North Korea",
    //         "iso2": "KP",
    //         "iso3": "PRK",
    //         "code": "+850",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PRK.png"
    //     },
    //     {
    //         "countryId": 149,
    //         "name": "Northern Mariana Islands",
    //         "iso2": "MP",
    //         "iso3": "MNP",
    //         "code": "+1 670",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MNP.png"
    //     },
    //     {
    //         "countryId": 150,
    //         "name": "Norway",
    //         "iso2": "NO",
    //         "iso3": "NOR",
    //         "code": "+47",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NOR.png"
    //     },
    //     {
    //         "countryId": 151,
    //         "name": "Oman",
    //         "iso2": "OM",
    //         "iso3": "OMN",
    //         "code": "+968",
    //         "flag": "https://www.countryareacode.net/pictures/flag/OMN.png"
    //     },
    //     {
    //         "countryId": 152,
    //         "name": "Pakistan",
    //         "iso2": "PK",
    //         "iso3": "PAK",
    //         "code": "+92",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PAK.png"
    //     },
    //     {
    //         "countryId": 153,
    //         "name": "Palau",
    //         "iso2": "PW",
    //         "iso3": "PLW",
    //         "code": "+680",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PLW.png"
    //     },
    //     {
    //         "countryId": 154,
    //         "name": "Panama",
    //         "iso2": "PA",
    //         "iso3": "PAN",
    //         "code": "+507",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PAN.png"
    //     },
    //     {
    //         "countryId": 155,
    //         "name": "Papua New Guinea",
    //         "iso2": "PG",
    //         "iso3": "PNG",
    //         "code": "+675",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PNG.png"
    //     },
    //     {
    //         "countryId": 156,
    //         "name": "Paraguay",
    //         "iso2": "PY",
    //         "iso3": "PRY",
    //         "code": "+595",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PRY.png"
    //     },
    //     {
    //         "countryId": 157,
    //         "name": "Peru",
    //         "iso2": "PE",
    //         "iso3": "PER",
    //         "code": "+51",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PER.png"
    //     },
    //     {
    //         "countryId": 158,
    //         "name": "Philippines",
    //         "iso2": "PH",
    //         "iso3": "PHL",
    //         "code": "+63",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PHL.png"
    //     },
    //     {
    //         "countryId": 159,
    //         "name": "Pitcairn Islands",
    //         "iso2": "PN",
    //         "iso3": "PCN",
    //         "code": "+870",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PCN.png"
    //     },
    //     {
    //         "countryId": 160,
    //         "name": "Poland",
    //         "iso2": "PL",
    //         "iso3": "POL",
    //         "code": "+48",
    //         "flag": "https://www.countryareacode.net/pictures/flag/POL.png"
    //     },
    //     {
    //         "countryId": 161,
    //         "name": "Portugal",
    //         "iso2": "PT",
    //         "iso3": "PRT",
    //         "code": "+351",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PRT.png"
    //     },
    //     {
    //         "countryId": 162,
    //         "name": "Puerto Rico",
    //         "iso2": "PR",
    //         "iso3": "PRI",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PRI.png"
    //     },
    //     {
    //         "countryId": 163,
    //         "name": "Qatar",
    //         "iso2": "QA",
    //         "iso3": "QAT",
    //         "code": "+974",
    //         "flag": "https://www.countryareacode.net/pictures/flag/QAT.png"
    //     },
    //     {
    //         "countryId": 164,
    //         "name": "Republic of the Congo",
    //         "iso2": "CG",
    //         "iso3": "COG",
    //         "code": "+242",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COG.png"
    //     },
    //     {
    //         "countryId": 165,
    //         "name": "Reunion",
    //         "iso2": "RE",
    //         "iso3": "REU",
    //         "code": "+262",
    //         "flag": "https://www.countryareacode.net/pictures/flag/REU.png"
    //     },
    //     {
    //         "countryId": 166,
    //         "name": "Romania",
    //         "iso2": "RO",
    //         "iso3": "ROU",
    //         "code": "+40",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ROU.png"
    //     },
    //     {
    //         "countryId": 167,
    //         "name": "Russia",
    //         "iso2": "RU",
    //         "iso3": "RUS",
    //         "code": "+7",
    //         "flag": "https://www.countryareacode.net/pictures/flag/RUS.png"
    //     },
    //     {
    //         "countryId": 168,
    //         "name": "Rwanda",
    //         "iso2": "RW",
    //         "iso3": "RWA",
    //         "code": "+250",
    //         "flag": "https://www.countryareacode.net/pictures/flag/RWA.png"
    //     },
    //     {
    //         "countryId": 169,
    //         "name": "Saint Barthélemy",
    //         "iso2": "BL",
    //         "iso3": "BLM",
    //         "code": "+590",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BLM.png"
    //     },
    //     {
    //         "countryId": 170,
    //         "name": "Saint Helena",
    //         "iso2": "SH",
    //         "iso3": "SHN",
    //         "code": "+290",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SHN.png"
    //     },
    //     {
    //         "countryId": 171,
    //         "name": "Saint Kitts and Nevis",
    //         "iso2": "KN",
    //         "iso3": "KNA",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KNA.png"
    //     },
    //     {
    //         "countryId": 172,
    //         "name": "Saint Lucia",
    //         "iso2": "LC",
    //         "iso3": "LCA",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LCA.png"
    //     },
    //     {
    //         "countryId": 173,
    //         "name": "Saint Martin",
    //         "iso2": "MF",
    //         "iso3": "MAF",
    //         "code": "+1 599",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MAF.png"
    //     },
    //     {
    //         "countryId": 174,
    //         "name": "Saint Pierre and Miquelon",
    //         "iso2": "PM",
    //         "iso3": "SPM",
    //         "code": "+508",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SPM.png"
    //     },
    //     {
    //         "countryId": 175,
    //         "name": "Saint Vincent and the Grenadines",
    //         "iso2": "VC",
    //         "iso3": "VCT",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VCT.png"
    //     },
    //     {
    //         "countryId": 176,
    //         "name": "Samoa",
    //         "iso2": "WS",
    //         "iso3": "WSM",
    //         "code": "+685",
    //         "flag": "https://www.countryareacode.net/pictures/flag/WSM.png"
    //     },
    //     {
    //         "countryId": 177,
    //         "name": "San Marino",
    //         "iso2": "SM",
    //         "iso3": "SMR",
    //         "code": "+378",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SMR.png"
    //     },
    //     {
    //         "countryId": 178,
    //         "name": "Sao Tome and Principe",
    //         "iso2": "ST",
    //         "iso3": "STP",
    //         "code": "+239",
    //         "flag": "https://www.countryareacode.net/pictures/flag/STP.png"
    //     },
    //     {
    //         "countryId": 179,
    //         "name": "Saudi Arabia",
    //         "iso2": "SA",
    //         "iso3": "SAU",
    //         "code": "+966",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SAU.png"
    //     },
    //     {
    //         "countryId": 180,
    //         "name": "Senegal",
    //         "iso2": "SN",
    //         "iso3": "SEN",
    //         "code": "+221",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SEN.png"
    //     },
    //     {
    //         "countryId": 181,
    //         "name": "Serbia",
    //         "iso2": "RS",
    //         "iso3": "SRB",
    //         "code": "+381",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SRB.png"
    //     },
    //     {
    //         "countryId": 182,
    //         "name": "Seychelles",
    //         "iso2": "SC",
    //         "iso3": "SYC",
    //         "code": "+248",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SYC.png"
    //     },
    //     {
    //         "countryId": 183,
    //         "name": "Sierra Leone",
    //         "iso2": "SL",
    //         "iso3": "SLE",
    //         "code": "+232",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SLE.png"
    //     },
    //     {
    //         "countryId": 184,
    //         "name": "Singapore",
    //         "iso2": "SG",
    //         "iso3": "SGP",
    //         "code": "+65",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SGP.png"
    //     },
    //     {
    //         "countryId": 185,
    //         "name": "Slovakia",
    //         "iso2": "SK",
    //         "iso3": "SVK",
    //         "code": "+421",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SVK.png"
    //     },
    //     {
    //         "countryId": 186,
    //         "name": "Slovenia",
    //         "iso2": "SI",
    //         "iso3": "SVN",
    //         "code": "+386",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SVN.png"
    //     },
    //     {
    //         "countryId": 187,
    //         "name": "Solomon Islands",
    //         "iso2": "SB",
    //         "iso3": "SLB",
    //         "code": "+677",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SLB.png"
    //     },
    //     {
    //         "countryId": 188,
    //         "name": "Somalia",
    //         "iso2": "SO",
    //         "iso3": "SOM",
    //         "code": "+252",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SOM.png"
    //     },
    //     {
    //         "countryId": 189,
    //         "name": "South Africa",
    //         "iso2": "ZA",
    //         "iso3": "ZAF",
    //         "code": "+27",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ZAF.png"
    //     },
    //     {
    //         "countryId": 190,
    //         "name": "South Korea",
    //         "iso2": "KR",
    //         "iso3": "KOR",
    //         "code": "+82",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KOR.png"
    //     },
    //     {
    //         "countryId": 191,
    //         "name": "South Sudan",
    //         "iso2": "SS",
    //         "iso3": "SSD",
    //         "code": "+211",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SSD.png"
    //     },
    //     {
    //         "countryId": 192,
    //         "name": "Spain",
    //         "iso2": "ES",
    //         "iso3": "ESP",
    //         "code": "+34",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ESP.png"
    //     },
    //     {
    //         "countryId": 193,
    //         "name": "Sri Lanka",
    //         "iso2": "LK",
    //         "iso3": "LKA",
    //         "code": "+94",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LKA.png"
    //     },
    //     {
    //         "countryId": 194,
    //         "name": "Sudan",
    //         "iso2": "SD",
    //         "iso3": "SDN",
    //         "code": "+249",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SDN.png"
    //     },
    //     {
    //         "countryId": 195,
    //         "name": "Suriname",
    //         "iso2": "SR",
    //         "iso3": "SUR",
    //         "code": "+597",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SUR.png"
    //     },
    //     {
    //         "countryId": 196,
    //         "name": "Swaziland",
    //         "iso2": "SZ",
    //         "iso3": "SWZ",
    //         "code": "+268",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SWZ.png"
    //     },
    //     {
    //         "countryId": 197,
    //         "name": "Sweden",
    //         "iso2": "SE",
    //         "iso3": "SWE",
    //         "code": "+46",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SWE.png"
    //     },
    //     {
    //         "countryId": 198,
    //         "name": "Switzerland",
    //         "iso2": "CH",
    //         "iso3": "CHE",
    //         "code": "+41",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CHE.png"
    //     },
    //     {
    //         "countryId": 199,
    //         "name": "Syria",
    //         "iso2": "SY",
    //         "iso3": "SYR",
    //         "code": "+963",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SYR.png"
    //     },
    //     {
    //         "countryId": 200,
    //         "name": "Taiwan",
    //         "iso2": "TW",
    //         "iso3": "TWN",
    //         "code": "+886",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TWN.png"
    //     },
    //     {
    //         "countryId": 201,
    //         "name": "Tajikistan",
    //         "iso2": "TJ",
    //         "iso3": "TJK",
    //         "code": "+992",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TJK.png"
    //     },
    //     {
    //         "countryId": 202,
    //         "name": "Tanzania",
    //         "iso2": "TZ",
    //         "iso3": "TZA",
    //         "code": "+255",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TZA.png"
    //     },
    //     {
    //         "countryId": 203,
    //         "name": "Thailand",
    //         "iso2": "TH",
    //         "iso3": "THA",
    //         "code": "+66",
    //         "flag": "https://www.countryareacode.net/pictures/flag/THA.png"
    //     },
    //     {
    //         "countryId": 204,
    //         "name": "Togo",
    //         "iso2": "TG",
    //         "iso3": "TGO",
    //         "code": "+228",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TGO.png"
    //     },
    //     {
    //         "countryId": 205,
    //         "name": "Tokelau",
    //         "iso2": "TK",
    //         "iso3": "TKL",
    //         "code": "+690",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TKL.png"
    //     },
    //     {
    //         "countryId": 206,
    //         "name": "Trinidad and Tobago",
    //         "iso2": "TT",
    //         "iso3": "TTO",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TTO.png"
    //     },
    //     {
    //         "countryId": 207,
    //         "name": "Tunisia",
    //         "iso2": "TN",
    //         "iso3": "TUN",
    //         "code": "+216",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TUN.png"
    //     },
    //     {
    //         "countryId": 208,
    //         "name": "Turkey",
    //         "iso2": "TR",
    //         "iso3": "TUR",
    //         "code": "+90",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TUR.png"
    //     },
    //     {
    //         "countryId": 209,
    //         "name": "Turkmenistan",
    //         "iso2": "TM",
    //         "iso3": "TKM",
    //         "code": "+993",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TKM.png"
    //     },
    //     {
    //         "countryId": 210,
    //         "name": "Tuvalu",
    //         "iso2": "TV",
    //         "iso3": "TUV",
    //         "code": "+688",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TUV.png"
    //     },
    //     {
    //         "countryId": 211,
    //         "name": "Uganda",
    //         "iso2": "UG",
    //         "iso3": "UGA",
    //         "code": "+256",
    //         "flag": "https://www.countryareacode.net/pictures/flag/UGA.png"
    //     },
    //     {
    //         "countryId": 212,
    //         "name": "Ukraine",
    //         "iso2": "UA",
    //         "iso3": "UKR",
    //         "code": "+380",
    //         "flag": "https://www.countryareacode.net/pictures/flag/UKR.png"
    //     },
    //     {
    //         "countryId": 213,
    //         "name": "United Arab Emirates",
    //         "iso2": "AE",
    //         "iso3": "ARE",
    //         "code": "+971",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ARE.png"
    //     },
    //     {
    //         "countryId": 214,
    //         "name": "United Kingdom",
    //         "iso2": "GB",
    //         "iso3": "GBR",
    //         "code": "+44",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GBR.png"
    //     },
    //     {
    //         "countryId": 215,
    //         "name": "United States",
    //         "iso2": "US",
    //         "iso3": "USA",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/USA.png"
    //     },
    //     {
    //         "countryId": 216,
    //         "name": "Uruguay",
    //         "iso2": "UY",
    //         "iso3": "URY",
    //         "code": "+598",
    //         "flag": "https://www.countryareacode.net/pictures/flag/URY.png"
    //     },
    //     {
    //         "countryId": 217,
    //         "name": "Uzbekistan",
    //         "iso2": "UZ",
    //         "iso3": "UZB",
    //         "code": "+998",
    //         "flag": "https://www.countryareacode.net/pictures/flag/UZB.png"
    //     },
    //     {
    //         "countryId": 218,
    //         "name": "Vanuatu",
    //         "iso2": "VU",
    //         "iso3": "VUT",
    //         "code": "+678",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VUT.png"
    //     },
    //     {
    //         "countryId": 219,
    //         "name": "Vatican",
    //         "iso2": "VA",
    //         "iso3": "VAT",
    //         "code": "+39",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VAT.png"
    //     },
    //     {
    //         "countryId": 220,
    //         "name": "Venezuela",
    //         "iso2": "VE",
    //         "iso3": "VEN",
    //         "code": "+58",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VEN.png"
    //     },
    //     {
    //         "countryId": 221,
    //         "name": "Vietnam",
    //         "iso2": "VN",
    //         "iso3": "VNM",
    //         "code": "+84",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VNM.png"
    //     },
    //     {
    //         "countryId": 222,
    //         "name": "Western Sahara",
    //         "iso2": "EH",
    //         "iso3": "ESH",
    //         "code": "+212",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ESH.png"
    //     },
    //     {
    //         "countryId": 223,
    //         "name": "Yemen",
    //         "iso2": "YE",
    //         "iso3": "YEM",
    //         "code": "+967",
    //         "flag": "https://www.countryareacode.net/pictures/flag/YEM.png"
    //     },
    //     {
    //         "countryId": 224,
    //         "name": "Zambia",
    //         "iso2": "ZM",
    //         "iso3": "ZMB",
    //         "code": "+260",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ZMB.png"
    //     },
    //     {
    //         "countryId": 225,
    //         "name": "Zimbabwe",
    //         "iso2": "ZW",
    //         "iso3": "ZWE",
    //         "code": "+263",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ZWE.png"
    //     }
    // ]
};

/**
 * Generated bundle index. Do not edit.
 */

export { ApiService, AuthGuard, CheckboxComponent, Constants, CoreModule, DatepickerComponent, ErrorService, FormErrorComponent, Input2Component, InputComponent, LoaderInterceptorService, LoaderService, RadioComponent, SelectComponent, SharedUIModule, TableSearchPipe, TextAreaComponent, UtilityService };
//# sourceMappingURL=shared.mjs.map
