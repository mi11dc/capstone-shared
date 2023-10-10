import * as _ from 'lodash';
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TableSearchPipe {
    transform(array, query, searchfrom) {
        if (query) {
            return this.filter(query, array, searchfrom);
        }
        return array;
    }
    filter(query, array, from) {
        for (const item in from) {
            let mustreturn = false;
            array.map(x => {
                if (x[from[parseInt(item, 10)]].toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1) {
                    mustreturn = true;
                }
            });
            if (mustreturn) {
                return _.filter(array, y => y[from[parseInt(item, 10)]].toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1);
            }
        }
        return [];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TableSearchPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.6", ngImport: i0, type: TableSearchPipe, name: "tableFilter" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: TableSearchPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'tableFilter'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvcmUvcGlwZS90YWJsZS1zZWFyY2gucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFNcEQsTUFBTSxPQUFPLGVBQWU7SUFDeEIsU0FBUyxDQUFDLEtBQVUsRUFBRSxLQUFhLEVBQUUsVUFBb0I7UUFDckQsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLEtBQVUsRUFBRSxJQUFjO1FBQzVDLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3JCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNWLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUc7b0JBQ3BHLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3JCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLFVBQVUsRUFBRTtnQkFDWixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNwRyxDQUFDO2FBQ0w7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzt1R0F2QlEsZUFBZTtxR0FBZixlQUFlOzsyRkFBZixlQUFlO2tCQUozQixJQUFJO21CQUFDO29CQUNGLElBQUksRUFBRSxhQUFhO2lCQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3RhYmxlRmlsdGVyJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGFycmF5OiBhbnksIHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaGZyb206IHN0cmluZ1tdKTogYW55IHtcclxuICAgICAgICBpZiAocXVlcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKHF1ZXJ5LCBhcnJheSwgc2VhcmNoZnJvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIocXVlcnk6IHN0cmluZywgYXJyYXk6IGFueSwgZnJvbTogc3RyaW5nW10pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gZnJvbSkge1xyXG4gICAgICAgICAgICBsZXQgbXVzdHJldHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhcnJheS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeFtmcm9tW3BhcnNlSW50KGl0ZW0sIDEwKV1dLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPiAtMSApIHtcclxuICAgICAgICAgICAgICAgICAgICBtdXN0cmV0dXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChtdXN0cmV0dXJuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIHkgPT5cclxuICAgICAgICAgICAgICAgICAgICB5W2Zyb21bcGFyc2VJbnQoaXRlbSwgMTApXV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iXX0=