import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class UtilityService {
    static convertObjectToJson(res) {
        return JSON.parse(JSON.stringify(res.body));
    }
    static setLocalStorage(property, value) {
        localStorage.setItem(property, value);
    }
    static setMultiLocalStorage(array) {
        array.forEach(item => {
            localStorage.setItem(item[0], item[1]);
        });
    }
    static getLocalStorage(property) {
        if (localStorage.getItem(property)) {
            return localStorage.getItem(property);
        }
        else {
            return null;
        }
    }
    static removeItemLocalStorage(property) {
        if (localStorage.getItem(property)) {
            localStorage.removeItem(property);
        }
    }
    static clearLocalStorage() {
        localStorage.clear();
    }
    static createParameterizedUrl(url, params) {
        let newUrl = url;
        Object.keys(params).forEach(param => {
            const regex = new RegExp('{' + param + '}', 'g');
            newUrl = newUrl.replace(regex, params[param]);
        });
        return newUrl;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: UtilityService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: UtilityService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: UtilityService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb3JlL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sY0FBYztJQUNoQixNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBUTtRQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFnQixFQUFFLEtBQWE7UUFDekQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNNLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLO1FBQ3BDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFnQjtRQUMxQyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxRQUFnQjtRQUNqRCxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsaUJBQWlCO1FBQzNCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ00sTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQVcsRUFBRSxNQUFXO1FBQ3pELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO3VHQWxDUSxjQUFjOzJHQUFkLGNBQWM7OzJGQUFkLGNBQWM7a0JBRjFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbGl0eVNlcnZpY2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0T2JqZWN0VG9Kc29uKHJlczogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXMuYm9keSkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRMb2NhbFN0b3JhZ2UocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldE11bHRpTG9jYWxTdG9yYWdlKGFycmF5KTogdm9pZCB7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbVswXSwgaXRlbVsxXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExvY2FsU3RvcmFnZShwcm9wZXJ0eTogc3RyaW5nKTogc3RyaW5nfG51bGwge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb3BlcnR5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUl0ZW1Mb2NhbFN0b3JhZ2UocHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVBhcmFtZXRlcml6ZWRVcmwodXJsOiBzdHJpbmcsIHBhcmFtczogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgbmV3VXJsID0gdXJsO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgneycgKyBwYXJhbSArICd9JywgJ2cnKTtcclxuICAgICAgICAgICAgbmV3VXJsID0gbmV3VXJsLnJlcGxhY2UocmVnZXgsIHBhcmFtc1twYXJhbV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdVcmw7XHJcbiAgICB9XHJcbn1cclxuIl19