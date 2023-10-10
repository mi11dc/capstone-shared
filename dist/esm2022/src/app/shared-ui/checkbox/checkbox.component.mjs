import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../form-error/form-error.component";
export class CheckboxComponent {
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
            }], ngImport: i0, template: "<div class=\"row\">\n  <ng-container *ngFor=\"let item of data; index as i\">\n    <div [ngClass]=\"item.className\">\n      <input\n        type=\"checkbox\" checked *ngIf=\"isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <input\n        type=\"checkbox\" *ngIf=\"!isChecked(item.label)\"\n        [ngClass]=\"item.inputClassName\" (click)=\"onCheckClick(item.label)\"\n        [disabled]=\"disabled\" [required]=\"required\"\n      >\n      <app-form-label\n        class=\"mx-1\"\n        [errorClass]=\"'form-check-label'\"\n        [errorMessage]=\"item.label\"\n      ></app-form-label>\n    </div>\n  </ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FormErrorComponent, selector: "app-form-label", inputs: ["errorMessage", "errorClass"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFZdkUsTUFBTSxPQUFPLGlCQUFpQjtJQUVqQixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRVgsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRWhCLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRS9DLGdCQUFnQixDQUFDO0lBRWpCLGlEQUFpRDtJQUNqRCxnQ0FBZ0M7SUFDekIsVUFBVSxDQUFDLEtBQVU7UUFDeEIsc0JBQXNCO0lBQzFCLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsZ0JBQWdCLENBQUMsRUFBTztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUNsRSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVELDRGQUE0RjtJQUM1RixTQUFTLEdBQWMsR0FBRyxFQUFFO0lBQzVCLENBQUMsQ0FBQTtJQUVELDBFQUEwRTtJQUMxRSxlQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtJQUM3QixDQUFDLENBQUE7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBSTtRQUNiLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3JHO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzt1R0E1RFEsaUJBQWlCOzJGQUFqQixpQkFBaUIsOExBTmYsQ0FBQztnQkFDUixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixLQUFLLEVBQUUsSUFBSTthQUNkLENBQUMsMEJDWE4sNHZCQXFCQTs7MkZEUmEsaUJBQWlCO2tCQVY3QixTQUFTOytCQUNJLGNBQWMsYUFHYixDQUFDOzRCQUNSLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsbUJBQW1COzRCQUM5QixLQUFLLEVBQUUsSUFBSTt5QkFDZCxDQUFDOzBFQUlPLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFFSSxlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogQ2hlY2tib3hDb21wb25lbnQsXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBJbnB1dCgpIGRhdGEgPSBbXTtcbiAgICBASW5wdXQoKSB2YWx1ZSA9IFtdO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpIGNoZWNrSW5wdXRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XG4gICAgLy8gQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCB2YWx1ZS5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIC8vIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIGEgbWV0aG9kIGluIG9yZGVyIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIC8vICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaGFzIGJlZW4gdG91Y2hlZC5cbiAgICAvLyAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbnVtYmVyIGlucHV0IGlzIHRvdWNoZWQuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSB0aHJvdWdoIHRoZSBtb2RlbFxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiBudW1iZXIgaW5wdXQgaXMgYmx1cnJlZC4gTmVlZGVkIHRvIHByb3Blcmx5IGltcGxlbWVudCBgQ29udHJvbFZhbHVlQWNjZXNzb3JgLlxuICAgIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge1xuICAgIH1cblxuICAgIC8vIE1ldGhvZCBzZXQgaW4gYHJlZ2lzdGVyT25DaGFuZ2VgIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gICAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGlzQ2hlY2tlZChpdGVtKSB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmZpbHRlcih4ID0+IHgudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSBpdGVtLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBvbkNoZWNrQ2xpY2soaXRlbSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZS5maWx0ZXIoeCA9PiB4LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcih4ID0+IHgudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9PSBpdGVtLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gWy4uLnRoaXMudmFsdWUsIC4uLml0ZW1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tJbnB1dFZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgaW5kZXggYXMgaVwiPlxuICAgIDxkaXYgW25nQ2xhc3NdPVwiaXRlbS5jbGFzc05hbWVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkICpuZ0lmPVwiaXNDaGVja2VkKGl0ZW0ubGFiZWwpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiaXRlbS5pbnB1dENsYXNzTmFtZVwiIChjbGljayk9XCJvbkNoZWNrQ2xpY2soaXRlbS5sYWJlbClcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiICpuZ0lmPVwiIWlzQ2hlY2tlZChpdGVtLmxhYmVsKVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0uaW5wdXRDbGFzc05hbWVcIiAoY2xpY2spPVwib25DaGVja0NsaWNrKGl0ZW0ubGFiZWwpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgID5cbiAgICAgIDxhcHAtZm9ybS1sYWJlbFxuICAgICAgICBjbGFzcz1cIm14LTFcIlxuICAgICAgICBbZXJyb3JDbGFzc109XCInZm9ybS1jaGVjay1sYWJlbCdcIlxuICAgICAgICBbZXJyb3JNZXNzYWdlXT1cIml0ZW0ubGFiZWxcIlxuICAgICAgPjwvYXBwLWZvcm0tbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=