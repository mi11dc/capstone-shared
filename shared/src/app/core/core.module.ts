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

@NgModule({
    imports: [
        HttpClientModule,
    ],
    declarations: [
    ],
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
})
export class CoreModule {
    constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'Core Module is already loaded, You should only load CoreModule in AppModule'
            );
        }
    }
}
