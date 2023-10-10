export declare const Constants: {
    limitOptions: {
        value: number;
    }[];
    ROUTES: ({
        id: number;
        path: string;
        title: string;
        type: string;
        icontype: string;
        collapse?: undefined;
        children?: undefined;
    } | {
        id: number;
        path: string;
        title: string;
        type: string;
        collapse: string;
        icontype: string;
        children: {
            path: string;
            title: string;
            ab: string;
        }[];
    })[];
};
