import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@ng-select/ng-select";
export class SelectComponent {
    list = [];
    bindLabel = "";
    className = 'form-group';
    selectClassName = "";
    placeHolder = 'Select';
    value;
    label = 'List';
    disabled = false;
    multi = false;
    required = false;
    searchable = false;
    clearable = false;
    selectedValue = new EventEmitter();
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
            this.setValue();
        });
    }
    setValue() {
        const val = this.value;
        if (val) {
            if (this.multi) {
                if (Array.isArray(val)) {
                    this.value = val;
                }
                else {
                    const array = [];
                    array.push(val);
                    this.value = array;
                }
            }
            else {
                if (Array.isArray(val)) {
                    for (const item of this.value) {
                        if (item) {
                            this.value = item;
                            break;
                        }
                    }
                }
                else {
                    this.value = val;
                }
            }
        }
    }
    onSelectedValueChange() {
        this.selectedValue.emit(this.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: SelectComponent, selector: "app-select", inputs: { list: "list", bindLabel: "bindLabel", className: "className", selectClassName: "selectClassName", placeHolder: "placeHolder", value: "value", label: "label", disabled: "disabled", multi: "multi", required: "required", searchable: "searchable", clearable: "clearable" }, outputs: { selectedValue: "selectedValue" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectComponent,
                multi: true
            }], ngImport: i0, template: "<div [ngClass]=\"className\">\n    <ng-select\n            [items]=\"list\"\n            [bindLabel]=\"bindLabel\"\n            [placeholder]=\"placeHolder\"\n            [ngClass]=\"selectClassName\"\n            [multiple]=\"multi\"\n            [required]=\"required\"\n            [(ngModel)]=\"value\"\n            [disabled]=\"disabled\"\n            [clearable]=\"clearable\"\n            [searchable]=\"searchable\"\n            (ngModelChange)=\"onSelectedValueChange()\"\n    ></ng-select>\n</div>\n\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NgSelectComponent, selector: "ng-select", inputs: ["bindLabel", "bindValue", "markFirst", "placeholder", "notFoundText", "typeToSearchText", "addTagText", "loadingText", "clearAllText", "appearance", "dropdownPosition", "appendTo", "loading", "closeOnSelect", "hideSelected", "selectOnTab", "openOnEnter", "maxSelectedItems", "groupBy", "groupValue", "bufferAmount", "virtualScroll", "selectableGroup", "selectableGroupAsModel", "searchFn", "trackByFn", "clearOnBackspace", "labelForId", "inputAttrs", "tabIndex", "readonly", "searchWhileComposing", "minTermLength", "editableSearchTerm", "keyDownFn", "typeahead", "multiple", "addTag", "searchable", "clearable", "isOpen", "items", "compareWith", "clearSearchOnAdd", "deselectOnClick"], outputs: ["blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-select', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SelectComponent,
                            multi: true
                        }], template: "<div [ngClass]=\"className\">\n    <ng-select\n            [items]=\"list\"\n            [bindLabel]=\"bindLabel\"\n            [placeholder]=\"placeHolder\"\n            [ngClass]=\"selectClassName\"\n            [multiple]=\"multi\"\n            [required]=\"required\"\n            [(ngModel)]=\"value\"\n            [disabled]=\"disabled\"\n            [clearable]=\"clearable\"\n            [searchable]=\"searchable\"\n            (ngModelChange)=\"onSelectedValueChange()\"\n    ></ng-select>\n</div>\n\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { list: [{
                type: Input
            }], bindLabel: [{
                type: Input
            }], className: [{
                type: Input
            }], selectClassName: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], value: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], multi: [{
                type: Input
            }], required: [{
                type: Input
            }], searchable: [{
                type: Input
            }], clearable: [{
                type: Input
            }], selectedValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvc2hhcmVkLXVpL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFZdkUsTUFBTSxPQUFPLGVBQWU7SUFFakIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNWLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFDdkIsU0FBUyxHQUFHLFlBQVksQ0FBQztJQUN6QixlQUFlLEdBQVcsRUFBRSxDQUFDO0lBQzdCLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDdkIsS0FBSyxDQUFNO0lBQ1gsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUVmLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDakIsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNkLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDakIsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNuQixTQUFTLEdBQUcsS0FBSyxDQUFDO0lBRWpCLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTdDLGdCQUNJLENBQUM7SUFFTCxpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUNsRSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELDRGQUE0RjtJQUM1RixTQUFTLEdBQWMsR0FBRyxFQUFFO0lBQzVCLENBQUMsQ0FBQTtJQUVELDBFQUEwRTtJQUMxRSxlQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtJQUM3QixDQUFDLENBQUE7SUFFRCxRQUFRO1FBQ04sVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDTCxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUNwQjthQUNGO2lCQUFNO2dCQUNMLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdEIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUM3QixJQUFJLElBQUksRUFBRTs0QkFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDbEIsTUFBTTt5QkFDUDtxQkFDRjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzt1R0FyRlUsZUFBZTsyRkFBZixlQUFlLDBXQU5mLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLGVBQWU7Z0JBQzVCLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQywwQkNYSixpZ0JBZ0JBOzsyRkRIYSxlQUFlO2tCQVYzQixTQUFTOytCQUNFLFlBQVksYUFHWCxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsaUJBQWlCOzRCQUM1QixLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDOzBFQUlPLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUksYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogU2VsZWN0Q29tcG9uZW50LFxuICAgIG11bHRpOiB0cnVlXG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIGxpc3QgPSBbXTtcbiAgQElucHV0KCkgYmluZExhYmVsOiBzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBjbGFzc05hbWUgPSAnZm9ybS1ncm91cCc7XG4gIEBJbnB1dCgpIHNlbGVjdENsYXNzTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnU2VsZWN0JztcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgQElucHV0KCkgbGFiZWwgPSAnTGlzdCc7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGkgPSBmYWxzZTtcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VhcmNoYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBjbGVhcmFibGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgc2VsZWN0ZWRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgKSB7IH1cblxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XG4gIC8vIEBwYXJhbSB2YWx1ZSBUaGUgaW5wdXQgdmFsdWUuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvLyBTZXRzIGEgbWV0aG9kIGluIG9yZGVyIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLy8gKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udHJvbCBoYXMgYmVlbiB0b3VjaGVkLlxuICAvLyAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbnVtYmVyIGlucHV0IGlzIHRvdWNoZWQuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLy8gU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgdGhyb3VnaCB0aGUgbW9kZWxcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvLyBDYWxsZWQgd2hlbiBudW1iZXIgaW5wdXQgaXMgYmx1cnJlZC4gTmVlZGVkIHRvIHByb3Blcmx5IGltcGxlbWVudCBgQ29udHJvbFZhbHVlQWNjZXNzb3JgLlxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHtcbiAgfVxuXG4gIC8vIE1ldGhvZCBzZXQgaW4gYHJlZ2lzdGVyT25DaGFuZ2VgIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgIHRoaXMuc2V0VmFsdWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMudmFsdWU7XG4gICAgaWYgKHZhbCkge1xuICAgICAgaWYgKHRoaXMubXVsdGkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgICBhcnJheS5wdXNoKHZhbCk7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGFycmF5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIiwiPGRpdiBbbmdDbGFzc109XCJjbGFzc05hbWVcIj5cbiAgICA8bmctc2VsZWN0XG4gICAgICAgICAgICBbaXRlbXNdPVwibGlzdFwiXG4gICAgICAgICAgICBbYmluZExhYmVsXT1cImJpbmRMYWJlbFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwic2VsZWN0Q2xhc3NOYW1lXCJcbiAgICAgICAgICAgIFttdWx0aXBsZV09XCJtdWx0aVwiXG4gICAgICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW2NsZWFyYWJsZV09XCJjbGVhcmFibGVcIlxuICAgICAgICAgICAgW3NlYXJjaGFibGVdPVwic2VhcmNoYWJsZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblNlbGVjdGVkVmFsdWVDaGFuZ2UoKVwiXG4gICAgPjwvbmctc2VsZWN0PlxuPC9kaXY+XG5cbiJdfQ==