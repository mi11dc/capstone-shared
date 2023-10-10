import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-bootstrap/datepicker";
export class DatepickerComponent {
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
            }], ngImport: i0, template: "<div [ngClass]=\"class\" class=\"col-xs-12 col-12 col-md-4 form-group\">\n  <input *ngIf=\"!dateRange\"\n         type=\"text\"\n         [attr.placeholder]=\"placeholder\"\n         [ngClass]=\"inputClassName\"\n         bsDatepicker\n         [bsConfig]=\"bsConfig\"\n         [(ngModel)]=\"value\"\n         [isDisabled]=\"disabled\"\n         style=\"border: 1px solid darkgray; background-color: #ffffff; cursor: auto;\" readonly\n         (ngModelChange)=\"onDateChange()\"\n  >\n\n  <input *ngIf=\"dateRange\"\n         type=\"text\"\n         [attr.placeholder]=\"placeholder\"\n         [ngClass]=\"inputClassName\"\n         bsDaterangepicker\n         [bsConfig]=\"bsConfig\"\n         [(ngModel)]=\"value\"\n         [isDisabled]=\"disabled\"\n         style=\"border: 1px solid darkgray; background-color: #ffffff; cursor: auto;\" readonly\n         (ngModelChange)=\"onDateChange()\"\n  >\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.BsDatepickerDirective, selector: "[bsDatepicker]", inputs: ["placement", "triggers", "outsideClick", "container", "outsideEsc", "isDisabled", "minDate", "maxDate", "minMode", "daysDisabled", "datesDisabled", "datesEnabled", "dateCustomClasses", "dateTooltipTexts", "isOpen", "bsValue", "bsConfig"], outputs: ["onShown", "onHidden", "bsValueChange"], exportAs: ["bsDatepicker"] }, { kind: "directive", type: i3.BsDatepickerInputDirective, selector: "input[bsDatepicker]" }, { kind: "directive", type: i3.BsDaterangepickerDirective, selector: "[bsDaterangepicker]", inputs: ["placement", "triggers", "outsideClick", "container", "outsideEsc", "isOpen", "bsValue", "bsConfig", "isDisabled", "minDate", "maxDate", "dateCustomClasses", "daysDisabled", "datesDisabled", "datesEnabled"], outputs: ["onShown", "onHidden", "bsValueChange"], exportAs: ["bsDaterangepicker"] }, { kind: "directive", type: i3.BsDaterangepickerInputDirective, selector: "input[bsDaterangepicker]" }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL3NoYXJlZC11aS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVl2RSxNQUFNLE9BQU8sbUJBQW1CO0lBRXJCLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsS0FBSyxDQUFNO0lBQ1gsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQ3JCLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDaEMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO0lBRXBCLEtBQUssR0FBa0UsU0FBUyxDQUFDO0lBRWhGLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFFZCxnQkFBZ0IsQ0FBQztJQUVqQixpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUNsRSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELDRGQUE0RjtJQUM1RixTQUFTLEdBQWMsR0FBRyxFQUFFO0lBQzVCLENBQUMsQ0FBQTtJQUVELDBFQUEwRTtJQUMxRSxlQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtJQUM3QixDQUFDLENBQUE7SUFFRCxRQUFRO1FBQ04sVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGVBQWUsRUFBRSxZQUFZO2dCQUM3QixjQUFjLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ3RDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7dUdBN0RVLG1CQUFtQjsyRkFBbkIsbUJBQW1CLDBSQU5uQixDQUFDO2dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxtQkFBbUI7Z0JBQ2hDLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQywwQkNYSixrNUJBeUJBOzsyRkRaYSxtQkFBbUI7a0JBVi9CLFNBQVM7K0JBQ0UsZ0JBQWdCLGFBR2YsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLHFCQUFxQjs0QkFDaEMsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQzswRUFJTyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUksWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogRGF0ZXBpY2tlckNvbXBvbmVudCxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgZGF0ZVJhbmdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBjbGFzcyA9ICdmb3JtLWdyb3VwJztcbiAgQElucHV0KCkgaW5wdXRDbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gdHJ1ZTtcblxuICBASW5wdXQoKSB0aGVtZTogJ2RlZmF1bHQnIHwgJ2dyZWVuJyB8ICdibHVlJyB8ICdkYXJrLWJsdWUnIHwgJ3JlZCcgfCAnb3JhbmdlJyA9ICdkZWZhdWx0JztcblxuICBAT3V0cHV0KCkgc2VsZWN0ZWREYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGJzQ29uZmlnID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XG4gIC8vIEBwYXJhbSB2YWx1ZSBUaGUgaW5wdXQgdmFsdWUuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyBTZXRzIGEgbWV0aG9kIGluIG9yZGVyIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLy8gKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udHJvbCBoYXMgYmVlbiB0b3VjaGVkLlxuICAvLyAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbnVtYmVyIGlucHV0IGlzIHRvdWNoZWQuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLy8gU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgdGhyb3VnaCB0aGUgbW9kZWxcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvLyBDYWxsZWQgd2hlbiBudW1iZXIgaW5wdXQgaXMgYmx1cnJlZC4gTmVlZGVkIHRvIHByb3Blcmx5IGltcGxlbWVudCBgQ29udHJvbFZhbHVlQWNjZXNzb3JgLlxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHtcbiAgfVxuXG4gIC8vIE1ldGhvZCBzZXQgaW4gYHJlZ2lzdGVyT25DaGFuZ2VgIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ic0NvbmZpZyA9IHtcbiAgICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgYWRhcHRpdmVQb3NpdGlvbjogdHJ1ZSxcbiAgICAgICAgZGF0ZUlucHV0Rm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgICAgIGNvbnRhaW5lckNsYXNzOiAndGhlbWUtJyArIHRoaXMudGhlbWVcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBvbkRhdGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIiwiPGRpdiBbbmdDbGFzc109XCJjbGFzc1wiIGNsYXNzPVwiY29sLXhzLTEyIGNvbC0xMiBjb2wtbWQtNCBmb3JtLWdyb3VwXCI+XG4gIDxpbnB1dCAqbmdJZj1cIiFkYXRlUmFuZ2VcIlxuICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc05hbWVcIlxuICAgICAgICAgYnNEYXRlcGlja2VyXG4gICAgICAgICBbYnNDb25maWddPVwiYnNDb25maWdcIlxuICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICBbaXNEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBjdXJzb3I6IGF1dG87XCIgcmVhZG9ubHlcbiAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRGF0ZUNoYW5nZSgpXCJcbiAgPlxuXG4gIDxpbnB1dCAqbmdJZj1cImRhdGVSYW5nZVwiXG4gICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzTmFtZVwiXG4gICAgICAgICBic0RhdGVyYW5nZXBpY2tlclxuICAgICAgICAgW2JzQ29uZmlnXT1cImJzQ29uZmlnXCJcbiAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgW2lzRGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgY3Vyc29yOiBhdXRvO1wiIHJlYWRvbmx5XG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkRhdGVDaGFuZ2UoKVwiXG4gID5cbjwvZGl2PlxuIl19