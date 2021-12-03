import type { ComponentType } from 'react';
export declare type TInternalRoutes = Record<string, {
    name: string;
    component: ComponentType<any>;
}>;
export declare const internalRoutes: TInternalRoutes;
