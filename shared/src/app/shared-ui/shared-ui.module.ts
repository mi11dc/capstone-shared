import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Input2Component } from './input2/input2.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TextAreaComponent } from './text-area/text-area.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
    declarations: [
        InputComponent,
        SelectComponent,
        Input2Component,
        FormErrorComponent,
        DatepickerComponent,
        TextAreaComponent,
        CheckboxComponent,
        RadioComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        BsDatepickerModule.forRoot()
    ],
    providers: [],
    exports: [
        InputComponent,
        SelectComponent,
        Input2Component,
        FormErrorComponent,
        DatepickerComponent,
        TextAreaComponent,
        CheckboxComponent,
        RadioComponent,
    ]
})
export class SharedUIModule {
}