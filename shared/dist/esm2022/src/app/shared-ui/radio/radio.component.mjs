import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../form-error/form-error.component";
export class RadioComponent {
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
            }], ngImport: i0, template: "<div class=\"row\">\n  <ng-container *ngFor=\"let item of data; index as i\">\n    <div [ngClass]=\"item.className\">\n      <input\n        type=\"radio\" checked *ngIf=\"isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <input\n        type=\"radio\" *ngIf=\"!isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <app-form-label\n        class=\"mx-1\"\n        [errorClass]=\"'form-check-label'\"\n        [errorMessage]=\"item.label\"\n      ></app-form-label>\n    </div>\n  </ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FormErrorComponent, selector: "app-form-label", inputs: ["errorMessage", "errorClass"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvcmFkaW8vcmFkaW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFZdkUsTUFBTSxPQUFPLGNBQWM7SUFFaEIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUVuQixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFaEIsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFL0MsZ0JBQWdCLENBQUM7SUFFakIsaURBQWlEO0lBQ2pELGdDQUFnQztJQUN6QixVQUFVLENBQUMsS0FBVTtRQUMxQixzQkFBc0I7SUFDeEIsQ0FBQztJQUVELGdFQUFnRTtJQUN6RCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCw0RUFBNEU7SUFDNUUseUVBQXlFO0lBQ2xFLGlCQUFpQixDQUFDLEVBQU87UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDRDQUE0QztJQUM1QyxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEZBQTRGO0lBQzVGLFNBQVMsR0FBYyxHQUFHLEVBQUU7SUFDNUIsQ0FBQyxDQUFBO0lBRUQsMEVBQTBFO0lBQzFFLGVBQWUsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO0lBQzdCLENBQUMsQ0FBQTtJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsU0FBUyxDQUFDLElBQUk7UUFDWixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0UsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7dUdBeERVLGNBQWM7MkZBQWQsY0FBYywyTEFOZCxDQUFDO2dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxjQUFjO2dCQUMzQixLQUFLLEVBQUUsSUFBSTthQUNaLENBQUMsMEJDWEosc3ZCQXFCQTs7MkZEUmEsY0FBYztrQkFWMUIsU0FBUzsrQkFDRSxXQUFXLGFBR1YsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLGdCQUFnQjs0QkFDM0IsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQzswRUFJTyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksZUFBZTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogUmFkaW9Db21wb25lbnQsXG4gICAgbXVsdGk6IHRydWVcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gXCJcIjtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBjaGVja0lucHV0VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XG4gIC8vIEBwYXJhbSB2YWx1ZSBUaGUgaW5wdXQgdmFsdWUuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAvLyB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyBTZXRzIGEgbWV0aG9kIGluIG9yZGVyIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLy8gKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udHJvbCBoYXMgYmVlbiB0b3VjaGVkLlxuICAvLyAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbnVtYmVyIGlucHV0IGlzIHRvdWNoZWQuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLy8gU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgdGhyb3VnaCB0aGUgbW9kZWxcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvLyBDYWxsZWQgd2hlbiBudW1iZXIgaW5wdXQgaXMgYmx1cnJlZC4gTmVlZGVkIHRvIHByb3Blcmx5IGltcGxlbWVudCBgQ29udHJvbFZhbHVlQWNjZXNzb3JgLlxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHtcbiAgfVxuXG4gIC8vIE1ldGhvZCBzZXQgaW4gYHJlZ2lzdGVyT25DaGFuZ2VgIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaXNDaGVja2VkKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSBpdGVtLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIG9uQ2hlY2tDbGljayhpdGVtKSB7XG4gICAgdGhpcy52YWx1ZSA9IGl0ZW07XG4gICAgdGhpcy5jaGVja0lucHV0VmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgaW5kZXggYXMgaVwiPlxuICAgIDxkaXYgW25nQ2xhc3NdPVwiaXRlbS5jbGFzc05hbWVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFkaW9cIiBjaGVja2VkICpuZ0lmPVwiaXNDaGVja2VkKGl0ZW0ubGFiZWwpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiaXRlbS5pbnB1dENsYXNzTmFtZVwiIChjbGljayk9XCJvbkNoZWNrQ2xpY2soaXRlbS5sYWJlbClcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiICpuZ0lmPVwiIWlzQ2hlY2tlZChpdGVtLmxhYmVsKVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0uaW5wdXRDbGFzc05hbWVcIiAoY2xpY2spPVwib25DaGVja0NsaWNrKGl0ZW0ubGFiZWwpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgID5cbiAgICAgIDxhcHAtZm9ybS1sYWJlbFxuICAgICAgICBjbGFzcz1cIm14LTFcIlxuICAgICAgICBbZXJyb3JDbGFzc109XCInZm9ybS1jaGVjay1sYWJlbCdcIlxuICAgICAgICBbZXJyb3JNZXNzYWdlXT1cIml0ZW0ubGFiZWxcIlxuICAgICAgPjwvYXBwLWZvcm0tbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=