import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CheckboxComponent implements OnInit, ControlValueAccessor {
    label: string;
    data: any[];
    value: any[];
    disabled: boolean;
    required: boolean;
    checkInputValue: EventEmitter<any>;
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    ngOnInit(): void;
    isChecked(item: any): boolean;
    onCheckClick(item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "app-checkbox", never, { "label": { "alias": "label"; "required": false; }; "data": { "alias": "data"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, { "checkInputValue": "checkInputValue"; }, never, never, false, never>;
}
