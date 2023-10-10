import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TextAreaComponent implements OnInit, ControlValueAccessor {
    className: string;
    textAreaClassName: string;
    placeholder: string;
    value: string;
    label: string;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    rows: number;
    cols: number;
    areaInputValue: EventEmitter<any>;
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    ngOnInit(): void;
    onInputChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextAreaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextAreaComponent, "app-text-area", never, { "className": { "alias": "className"; "required": false; }; "textAreaClassName": { "alias": "textAreaClassName"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "label": { "alias": "label"; "required": false; }; "required": { "alias": "required"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "cols": { "alias": "cols"; "required": false; }; }, { "areaInputValue": "areaInputValue"; }, never, never, false, never>;
}
