import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class Input2Component implements OnInit, ControlValueAccessor {
    className: string;
    inputClassName: string;
    placeHolder: string;
    value: string;
    label: string;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    newValue: EventEmitter<any>;
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    ngOnInit(): void;
    onInputChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Input2Component, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Input2Component, "app-input-new", never, { "className": { "alias": "className"; "required": false; }; "inputClassName": { "alias": "inputClassName"; "required": false; }; "placeHolder": { "alias": "placeHolder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "label": { "alias": "label"; "required": false; }; "required": { "alias": "required"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "newValue": "newValue"; }, never, never, false, never>;
}
