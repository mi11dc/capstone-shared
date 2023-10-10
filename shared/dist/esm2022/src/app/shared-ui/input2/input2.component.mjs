import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class Input2Component {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvc2hhcmVkLXVpL2lucHV0Mi9pbnB1dDIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvaW5wdXQyL2lucHV0Mi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVl2RSxNQUFNLE9BQU8sZUFBZTtJQUVqQixTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQ3pCLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDaEMsV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUN0QixLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ1gsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUNmLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFMUIsMkJBQTJCO0lBRWxCLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDakIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUVoQixRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV4QztJQUNBLENBQUM7SUFFRCxpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUNsRSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELDRGQUE0RjtJQUM1RixTQUFTLEdBQWMsR0FBRyxFQUFFO0lBQzVCLENBQUMsQ0FBQTtJQUVELDBFQUEwRTtJQUMxRSxlQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtJQUM3QixDQUFDLENBQUE7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzt1R0F0RFUsZUFBZTsyRkFBZixlQUFlLCtRQU5mLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLGVBQWU7Z0JBQzVCLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQywwQkNYSixzVUFXQTs7MkZERWEsZUFBZTtrQkFWM0IsU0FBUzsrQkFDRSxlQUFlLGFBR2QsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLGlCQUFpQjs0QkFDNUIsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQzswRUFJTyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBSUcsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWlucHV0LW5ldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dDIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dDIuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IElucHV0MkNvbXBvbmVudCxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dDJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKSBjbGFzc05hbWUgPSAnZm9ybS1ncm91cCc7XG4gIEBJbnB1dCgpIGlucHV0Q2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJ0VudGVyJztcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgbGFiZWwgPSAnVGV4dCc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgLy8gQElucHV0KCkgcGF0dGVybiA9IG51bGw7XG5cbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XG4gIC8vIEBwYXJhbSB2YWx1ZSBUaGUgaW5wdXQgdmFsdWUuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyBTZXRzIGEgbWV0aG9kIGluIG9yZGVyIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLy8gKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udHJvbCBoYXMgYmVlbiB0b3VjaGVkLlxuICAvLyAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbnVtYmVyIGlucHV0IGlzIHRvdWNoZWQuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLy8gU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgdGhyb3VnaCB0aGUgbW9kZWxcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvLyBDYWxsZWQgd2hlbiBudW1iZXIgaW5wdXQgaXMgYmx1cnJlZC4gTmVlZGVkIHRvIHByb3Blcmx5IGltcGxlbWVudCBgQ29udHJvbFZhbHVlQWNjZXNzb3JgLlxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHtcbiAgfVxuXG4gIC8vIE1ldGhvZCBzZXQgaW4gYHJlZ2lzdGVyT25DaGFuZ2VgIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25JbnB1dENoYW5nZSgpIHtcbiAgICB0aGlzLm5ld1ZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxufVxuIiwiPGRpdiBbbmdDbGFzc109XCJjbGFzc05hbWVcIj5cbiAgPGlucHV0IFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NOYW1lXCJcbiAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgKGlucHV0KT1cIm9uSW5wdXRDaGFuZ2UoKVwiXG4gICAgICAgICBbcmVhZE9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gID5cbjwvZGl2PlxuIl19