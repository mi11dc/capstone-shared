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
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/datepicker";
export class SharedUIModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SharedUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.6", ngImport: i0, type: SharedUIModule, declarations: [InputComponent,
            SelectComponent,
            Input2Component,
            FormErrorComponent,
            DatepickerComponent,
            TextAreaComponent,
            CheckboxComponent,
            RadioComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule, i1.BsDatepickerModule], exports: [InputComponent,
            SelectComponent,
            Input2Component,
            FormErrorComponent,
            DatepickerComponent,
            TextAreaComponent,
            CheckboxComponent,
            RadioComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SharedUIModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
            BsDatepickerModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: SharedUIModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXVpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvc2hhcmVkLXVpL3NoYXJlZC11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQWdDekQsTUFBTSxPQUFPLGNBQWM7dUdBQWQsY0FBYzt3R0FBZCxjQUFjLGlCQTVCbkIsY0FBYztZQUNkLGVBQWU7WUFDZixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGNBQWMsYUFHZCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixjQUFjLG9DQUtkLGNBQWM7WUFDZCxlQUFlO1lBQ2YsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixjQUFjO3dHQUdULGNBQWMsWUFsQm5CLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7OzJGQWN2QixjQUFjO2tCQTlCMUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7cUJBQy9CO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRTt3QkFDTCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGNBQWM7cUJBQ2pCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XHJcbmltcG9ydCB7IElucHV0MkNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQyL2lucHV0Mi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZXJyb3IvZm9ybS1lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgVGV4dEFyZWFDb21wb25lbnQgfSBmcm9tICcuL3RleHQtYXJlYS90ZXh0LWFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby9yYWRpby5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIElucHV0Q29tcG9uZW50LFxyXG4gICAgICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBJbnB1dDJDb21wb25lbnQsXHJcbiAgICAgICAgRm9ybUVycm9yQ29tcG9uZW50LFxyXG4gICAgICAgIERhdGVwaWNrZXJDb21wb25lbnQsXHJcbiAgICAgICAgVGV4dEFyZWFDb21wb25lbnQsXHJcbiAgICAgICAgQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICAgICAgUmFkaW9Db21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5nU2VsZWN0TW9kdWxlLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KClcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIElucHV0Q29tcG9uZW50LFxyXG4gICAgICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBJbnB1dDJDb21wb25lbnQsXHJcbiAgICAgICAgRm9ybUVycm9yQ29tcG9uZW50LFxyXG4gICAgICAgIERhdGVwaWNrZXJDb21wb25lbnQsXHJcbiAgICAgICAgVGV4dEFyZWFDb21wb25lbnQsXHJcbiAgICAgICAgQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICAgICAgUmFkaW9Db21wb25lbnQsXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRVSU1vZHVsZSB7XHJcbn0iXX0=