import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class InputComponent implements OnInit {
    private FB;
    className: string;
    inputClassName: string;
    placeHolder: string;
    value: string;
    required: boolean;
    pattern: string;
    label: string;
    requierdMessage: string;
    patternMessage: string;
    readonly: boolean;
    newValue: EventEmitter<any>;
    inputForm: any;
    textsubmit: boolean;
    counter: number;
    constructor(FB: FormBuilder);
    get f(): any;
    ngOnInit(): void;
    setDefaultData(): void;
    onBlurEvent(): void;
    onFocusEvent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "app-input", never, { "className": { "alias": "className"; "required": false; }; "inputClassName": { "alias": "inputClassName"; "required": false; }; "placeHolder": { "alias": "placeHolder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "required": { "alias": "required"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "label": { "alias": "label"; "required": false; }; "requierdMessage": { "alias": "requierdMessage"; "required": false; }; "patternMessage": { "alias": "patternMessage"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "newValue": "newValue"; }, never, never, false, never>;
}
