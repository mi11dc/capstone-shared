import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class InputComponent {
    FB;
    className = "";
    inputClassName = "";
    placeHolder = "";
    value = "";
    required = false;
    pattern = "";
    label = "";
    requierdMessage = "";
    patternMessage = "";
    readonly = false;
    newValue = new EventEmitter();
    inputForm;
    textsubmit = false;
    counter = 0;
    constructor(FB) {
        this.FB = FB;
    }
    get f() {
        return this.inputForm.controls;
    }
    ngOnInit() {
        setTimeout(() => {
            this.setDefaultData();
        });
    }
    setDefaultData() {
        this.inputForm = this.FB.group({
            text: ['']
        });
        if (!this.className) {
            this.className = 'form-group';
        }
        if (!this.inputClassName) {
            this.inputClassName = 'form-control';
        }
        if (!this.placeHolder) {
            this.placeHolder = 'Enter text';
        }
        if (!this.value) {
            this.value = '';
        }
        if (!this.label) {
            this.label = 'This';
        }
        if (!this.requierdMessage) {
            if (this.label) {
                this.requierdMessage = `${this.label} is required`;
            }
        }
        if (!this.patternMessage) {
            if (this.label) {
                this.patternMessage = `${this.label} is invalid`;
            }
            else {
                this.patternMessage = `this is invalid`;
            }
        }
        if (this.readonly) {
            this.f.text.disable();
        }
        if (this.required && this.pattern) {
            this.f.text.setValidators([
                Validators.required,
                Validators.pattern(this.pattern),
            ]);
        }
        else if (this.required && !this.pattern) {
            this.f.text.setValidators([
                Validators.required
            ]);
        }
        else if (!this.required && this.pattern) {
            this.f.text.setValidators([
                Validators.pattern(this.pattern)
            ]);
        }
    }
    onBlurEvent() {
        this.textsubmit = true;
        if (!this.inputForm.valid) {
            return;
        }
        this.newValue.emit({
            count: this.counter,
            value: this.value
        });
    }
    onFocusEvent() {
        this.counter += 1;
        this.newValue.emit({
            count: this.counter,
            value: this.value
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: InputComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: InputComponent, selector: "app-input", inputs: { className: "className", inputClassName: "inputClassName", placeHolder: "placeHolder", value: "value", required: "required", pattern: "pattern", label: "label", requierdMessage: "requierdMessage", patternMessage: "patternMessage", readonly: "readonly" }, outputs: { newValue: "newValue" }, ngImport: i0, template: "<form [formGroup]=\"inputForm\">\n  <div [ngClass]=\"className\">\n    <input [ngClass]=\"inputClassName\" formControlName=\"text\" [attr.placeholder]=\"placeHolder\" type=\"text\"\n           [(ngModel)]=\"value\" (blur)=\"onBlurEvent()\" (focus)=\"onFocusEvent()\">\n    <div>\n      <small *ngIf=\"textsubmit && f.text.errors\" class=\"text-danger\">\n        <span *ngIf=\"f.text.errors.required\">{{ requierdMessage }}</span>\n        <span *ngIf=\"f.text.errors.pattern\">{{ patternMessage }}</span>\n      </small>\n    </div>\n  </div>\n</form>\n", styles: [".text-danger{color:#f03}.readonly-cursor{cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-input', template: "<form [formGroup]=\"inputForm\">\n  <div [ngClass]=\"className\">\n    <input [ngClass]=\"inputClassName\" formControlName=\"text\" [attr.placeholder]=\"placeHolder\" type=\"text\"\n           [(ngModel)]=\"value\" (blur)=\"onBlurEvent()\" (focus)=\"onFocusEvent()\">\n    <div>\n      <small *ngIf=\"textsubmit && f.text.errors\" class=\"text-danger\">\n        <span *ngIf=\"f.text.errors.required\">{{ requierdMessage }}</span>\n        <span *ngIf=\"f.text.errors.pattern\">{{ patternMessage }}</span>\n      </small>\n    </div>\n  </div>\n</form>\n", styles: [".text-danger{color:#f03}.readonly-cursor{cursor:not-allowed}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { className: [{
                type: Input
            }], inputClassName: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], value: [{
                type: Input
            }], required: [{
                type: Input
            }], pattern: [{
                type: Input
            }], label: [{
                type: Input
            }], requierdMessage: [{
                type: Input
            }], patternMessage: [{
                type: Input
            }], readonly: [{
                type: Input
            }], newValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQWMsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFPdkQsTUFBTSxPQUFPLGNBQWM7SUFxQmY7SUFuQkQsU0FBUyxHQUFXLEVBQUUsQ0FBQztJQUN2QixjQUFjLEdBQVcsRUFBRSxDQUFDO0lBQzVCLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLE9BQU8sR0FBVyxFQUFFLENBQUM7SUFDckIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUVuQixlQUFlLEdBQVcsRUFBRSxDQUFDO0lBQzdCLGNBQWMsR0FBVyxFQUFFLENBQUM7SUFDNUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUV6QixRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV4QyxTQUFTLENBQU07SUFDZixVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ25CLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFFWixZQUNVLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO0lBRXpCLENBQUM7SUFFRCxJQUFJLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxRQUFRO1FBQ04sVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLEVB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QUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt1R0F0R1UsY0FBYzsyRkFBZCxjQUFjLDRWQ1IzQiw0aUJBWUE7OzJGREphLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsV0FBVztrR0FNWixTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUVHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgaW5wdXRDbGFzc05hbWU6IHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcGF0dGVybjogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9IFwiXCI7XG5cbiAgQElucHV0KCkgcmVxdWllcmRNZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBwYXR0ZXJuTWVzc2FnZTogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaW5wdXRGb3JtOiBhbnk7XG4gIHRleHRzdWJtaXQgPSBmYWxzZTtcbiAgY291bnRlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBGQjogRm9ybUJ1aWxkZXIsXG4gICkge1xuICB9XG5cbiAgZ2V0IGYoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRGb3JtLmNvbnRyb2xzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldERlZmF1bHREYXRhKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREZWZhdWx0RGF0YSgpIHtcbiAgICB0aGlzLmlucHV0Rm9ybSA9IHRoaXMuRkIuZ3JvdXAoe1xuICAgICAgdGV4dDogWycnXVxuICAgIH0pO1xuICAgIGlmICghdGhpcy5jbGFzc05hbWUpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gJ2Zvcm0tZ3JvdXAnO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaW5wdXRDbGFzc05hbWUpIHtcbiAgICAgIHRoaXMuaW5wdXRDbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBsYWNlSG9sZGVyKSB7XG4gICAgICB0aGlzLnBsYWNlSG9sZGVyID0gJ0VudGVyIHRleHQnO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG4gICAgaWYgKCF0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsID0gJ1RoaXMnO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucmVxdWllcmRNZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICB0aGlzLnJlcXVpZXJkTWVzc2FnZSA9IGAke3RoaXMubGFiZWx9IGlzIHJlcXVpcmVkYDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhdHRlcm5NZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICB0aGlzLnBhdHRlcm5NZXNzYWdlID0gYCR7dGhpcy5sYWJlbH0gaXMgaW52YWxpZGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhdHRlcm5NZXNzYWdlID0gYHRoaXMgaXMgaW52YWxpZGA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLmYudGV4dC5kaXNhYmxlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIHRoaXMucGF0dGVybikge1xuICAgICAgdGhpcy5mLnRleHQuc2V0VmFsaWRhdG9ycyhbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pLFxuICAgICAgXSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlcXVpcmVkICYmICF0aGlzLnBhdHRlcm4pIHtcbiAgICAgIHRoaXMuZi50ZXh0LnNldFZhbGlkYXRvcnMoW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXG4gICAgICBdKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnJlcXVpcmVkICYmIHRoaXMucGF0dGVybikge1xuICAgICAgdGhpcy5mLnRleHQuc2V0VmFsaWRhdG9ycyhbXG4gICAgICAgIFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pXG4gICAgICBdKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXJFdmVudCgpIHtcbiAgICB0aGlzLnRleHRzdWJtaXQgPSB0cnVlO1xuICAgIGlmICghdGhpcy5pbnB1dEZvcm0udmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHtcbiAgICAgIGNvdW50OiB0aGlzLmNvdW50ZXIsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgb25Gb2N1c0V2ZW50KCkge1xuICAgIHRoaXMuY291bnRlciArPSAxO1xuICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7XG4gICAgICBjb3VudDogdGhpcy5jb3VudGVyLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICB9KTtcbiAgfVxufVxuXG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cImlucHV0Rm9ybVwiPlxuICA8ZGl2IFtuZ0NsYXNzXT1cImNsYXNzTmFtZVwiPlxuICAgIDxpbnB1dCBbbmdDbGFzc109XCJpbnB1dENsYXNzTmFtZVwiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChibHVyKT1cIm9uQmx1ckV2ZW50KClcIiAoZm9jdXMpPVwib25Gb2N1c0V2ZW50KClcIj5cbiAgICA8ZGl2PlxuICAgICAgPHNtYWxsICpuZ0lmPVwidGV4dHN1Ym1pdCAmJiBmLnRleHQuZXJyb3JzXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImYudGV4dC5lcnJvcnMucmVxdWlyZWRcIj57eyByZXF1aWVyZE1lc3NhZ2UgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZi50ZXh0LmVycm9ycy5wYXR0ZXJuXCI+e3sgcGF0dGVybk1lc3NhZ2UgfX08L3NwYW4+XG4gICAgICA8L3NtYWxsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5cbiJdfQ==