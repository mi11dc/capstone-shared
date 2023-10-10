/**
 * CoreModule is used mainly for singleton services, universal components, guards, interceptors etc...
 * It should be imported in AppModule, no other module should import this, since we need the singleton instance
 * If the CoreModule is imported more than once than it will throw the below error
 * 'Core Module is already loaded, You should only load CoreModule in AppModule'
 */
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { ApiService } from './services/api.service';
import { NotificationService } from './services/notification.service';
import { ErrorService } from './services/error.service';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { UtilityService } from './services/utility.service';
import { TokenInterceptService } from './interceptors/token.interceptor.service';
import * as i0 from "@angular/core";
export class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('Core Module is already loaded, You should only load CoreModule in AppModule');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.6", ngImport: i0, type: CoreModule, imports: [HttpClientModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: CoreModule, providers: [
            ApiService,
            NotificationService,
            ErrorService,
            AuthGuard,
            { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
            LoaderService,
            UtilityService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: LoaderInterceptorService,
                multi: true
            },
            {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptService,
                multi: true
            }
        ], imports: [HttpClientModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        HttpClientModule,
                    ],
                    declarations: [],
                    providers: [
                        ApiService,
                        NotificationService,
                        ErrorService,
                        AuthGuard,
                        { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
                        LoaderService,
                        UtilityService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: LoaderInterceptorService,
                            multi: true
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: TokenInterceptService,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: CoreModule, decorators: [{
                    type: SkipSelf
                }, {
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBNEJqRixNQUFNLE9BQU8sVUFBVTtJQUNuQixZQUFvQyxZQUF3QjtRQUN4RCxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ1gsNkVBQTZFLENBQ2hGLENBQUM7U0FDTDtJQUNMLENBQUM7dUdBUFEsVUFBVTt3R0FBVixVQUFVLFlBeEJmLGdCQUFnQjt3R0F3QlgsVUFBVSxhQXBCUjtZQUNQLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLFNBQVM7WUFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO1lBQzlELGFBQWE7WUFDYixjQUFjO1lBQ2Q7Z0JBQ0ksT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNEO2dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLEtBQUssRUFBRSxJQUFJO2FBQ2Q7U0FDSixZQXRCRyxnQkFBZ0I7OzJGQXdCWCxVQUFVO2tCQTFCdEIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsZ0JBQWdCO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUUsRUFDYjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsVUFBVTt3QkFDVixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO3dCQUM5RCxhQUFhO3dCQUNiLGNBQWM7d0JBQ2Q7NEJBQ0ksT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHdCQUF3Qjs0QkFDbEMsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7d0JBQ0Q7NEJBQ0ksT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQ0o7aUJBQ0o7OzBCQUVnQixRQUFROzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvcmVNb2R1bGUgaXMgdXNlZCBtYWlubHkgZm9yIHNpbmdsZXRvbiBzZXJ2aWNlcywgdW5pdmVyc2FsIGNvbXBvbmVudHMsIGd1YXJkcywgaW50ZXJjZXB0b3JzIGV0Yy4uLlxyXG4gKiBJdCBzaG91bGQgYmUgaW1wb3J0ZWQgaW4gQXBwTW9kdWxlLCBubyBvdGhlciBtb2R1bGUgc2hvdWxkIGltcG9ydCB0aGlzLCBzaW5jZSB3ZSBuZWVkIHRoZSBzaW5nbGV0b24gaW5zdGFuY2VcclxuICogSWYgdGhlIENvcmVNb2R1bGUgaXMgaW1wb3J0ZWQgbW9yZSB0aGFuIG9uY2UgdGhhbiBpdCB3aWxsIHRocm93IHRoZSBiZWxvdyBlcnJvclxyXG4gKiAnQ29yZSBNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQsIFlvdSBzaG91bGQgb25seSBsb2FkIENvcmVNb2R1bGUgaW4gQXBwTW9kdWxlJ1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXJyb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEdsb2JhbEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbC1lcnJvci1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBMb2FkZXJJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tICcuL2ludGVyY2VwdG9ycy9sb2FkZXItaW50ZXJjZXB0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vZ3VhcmRzL2F1dGguZ3VhcmQnO1xyXG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9rZW5JbnRlcmNlcHRTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvdG9rZW4uaW50ZXJjZXB0b3Iuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQXBpU2VydmljZSxcclxuICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEVycm9yU2VydmljZSxcclxuICAgICAgICBBdXRoR3VhcmQsXHJcbiAgICAgICAgeyBwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBHbG9iYWxFcnJvckhhbmRsZXJTZXJ2aWNlIH0sXHJcbiAgICAgICAgTG9hZGVyU2VydmljZSxcclxuICAgICAgICBVdGlsaXR5U2VydmljZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgICB1c2VDbGFzczogTG9hZGVySW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgICAgdXNlQ2xhc3M6IFRva2VuSW50ZXJjZXB0U2VydmljZSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xyXG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ0NvcmUgTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLCBZb3Ugc2hvdWxkIG9ubHkgbG9hZCBDb3JlTW9kdWxlIGluIEFwcE1vZHVsZSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19