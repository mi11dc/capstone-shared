import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DatepickerComponent implements OnInit, ControlValueAccessor {
    dateRange: boolean;
    value: any;
    placeholder: string;
    class: string;
    inputClassName: string;
    disabled: boolean;
    outsideClick: boolean;
    theme: 'default' | 'green' | 'blue' | 'dark-blue' | 'red' | 'orange';
    selectedDate: EventEmitter<any>;
    bsConfig: {};
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    ngOnInit(): void;
    onDateChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerComponent, "app-datepicker", never, { "dateRange": { "alias": "dateRange"; "required": false; }; "value": { "alias": "value"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "class": { "alias": "class"; "required": false; }; "inputClassName": { "alias": "inputClassName"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "outsideClick": { "alias": "outsideClick"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; }, { "selectedDate": "selectedDate"; }, never, never, false, never>;
}
