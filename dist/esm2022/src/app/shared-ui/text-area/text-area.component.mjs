import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class TextAreaComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvc2hhcmVkLXVpL3RleHQtYXJlYS90ZXh0LWFyZWEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvdGV4dC1hcmVhL3RleHQtYXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVl2RSxNQUFNLE9BQU8saUJBQWlCO0lBRW5CLFNBQVMsQ0FBUztJQUNsQixpQkFBaUIsQ0FBUztJQUMxQixXQUFXLEdBQUcsT0FBTyxDQUFDO0lBQ3RCLEtBQUssQ0FBUztJQUNkLEtBQUssQ0FBUztJQUVkLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDakIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLElBQUksR0FBRyxDQUFDLENBQUM7SUFDVCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBRVIsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFOUMsZ0JBQWdCLENBQUM7SUFFakIsaURBQWlEO0lBQ2pELGdDQUFnQztJQUN6QixVQUFVLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0VBQWdFO0lBQ3pELGdCQUFnQixDQUFDLEVBQU87UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDbEUsaUJBQWlCLENBQUMsRUFBTztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCw0RkFBNEY7SUFDNUYsU0FBUyxHQUFjLEdBQUcsRUFBRTtJQUM1QixDQUFDLENBQUE7SUFFRCwwRUFBMEU7SUFDMUUsZUFBZSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7SUFDN0IsQ0FBQyxDQUFBO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7dUdBckRVLGlCQUFpQjsyRkFBakIsaUJBQWlCLDZUQU5qQixDQUFDO2dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQywwQkNYSixrUkFNQTs7MkZET2EsaUJBQWlCO2tCQVY3QixTQUFTOytCQUNFLGVBQWUsYUFHZCxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsbUJBQW1COzRCQUM5QixLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDOzBFQUlPLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVJLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRleHQtYXJlYScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWFyZWEuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IFRleHRBcmVhQ29tcG9uZW50LFxuICAgIG11bHRpOiB0cnVlXG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHRBcmVhQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ0VudGVyJztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByb3dzID0gMTtcbiAgQElucHV0KCkgY29scyA9IDU7XG5cbiAgQE91dHB1dCgpIGFyZWFJbnB1dFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLy8gVGhpcyBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBzZXQgdG8gdGhlIGNvbXBvbmVudFxuICAvLyBAcGFyYW0gdmFsdWUgVGhlIGlucHV0IHZhbHVlLlxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gU2V0cyBhIG1ldGhvZCBpbiBvcmRlciB0byBwcm9wYWdhdGUgY2hhbmdlcyBiYWNrIHRvIHRoZSBmb3JtLlxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8vICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaGFzIGJlZW4gdG91Y2hlZC5cbiAgLy8gKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG51bWJlciBpbnB1dCBpcyB0b3VjaGVkLlxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8vIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlIHRocm91Z2ggdGhlIG1vZGVsXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLy8gQ2FsbGVkIHdoZW4gbnVtYmVyIGlucHV0IGlzIGJsdXJyZWQuIE5lZWRlZCB0byBwcm9wZXJseSBpbXBsZW1lbnQgYENvbnRyb2xWYWx1ZUFjY2Vzc29yYC5cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7XG4gIH1cblxuICAvLyBNZXRob2Qgc2V0IGluIGByZWdpc3Rlck9uQ2hhbmdlYCB0byBwcm9wYWdhdGUgY2hhbmdlcyBiYWNrIHRvIHRoZSBmb3JtLlxuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5hcmVhSW5wdXRWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbn1cbiIsIjxkaXYgW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCI+XG4gIDx0ZXh0YXJlYVxuICAgIFtuZ0NsYXNzXT1cInRleHRBcmVhQ2xhc3NOYW1lXCIgW3Jvd3NdPVwicm93c1wiIFtjb2xzXT1cImNvbHNcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbcmVhZE9ubHldPVwicmVhZG9ubHlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKClcIlxuICA+PC90ZXh0YXJlYT5cbjwvZGl2PlxuIl19