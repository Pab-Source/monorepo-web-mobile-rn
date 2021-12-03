import { theme as defaultTheme } from '../constants/theme';
import type { ComponentType, ReactNode } from 'react';
export declare type TRoutes = Record<
  string,
  {
    name: string;
    component: ReactNode;
  }
>;
export declare type Screens =
  | 'Home'
  | 'PayTo'
  | 'PayFrom'
  | 'Amount'
  | 'Review'
  | 'Alert';
export declare type Route = {
  name: Screens;
  component: ComponentType<any>;
};
export declare type Routes = Route[];
export interface IRootComponent {
  secureRoutes?: Record<string, Route>;
  theme?: typeof defaultTheme;
}
export declare type RootStackParamList =
  | {
      Home: undefined;
      PayTo: undefined;
      PayFrom: {
        payTo: {
          label: string;
          value: string;
        };
      };
      Amount: {
        payTo: {
          label: string;
          value: string;
        };
        payFrom: {
          label: string;
          value: string;
          accountCode?: string;
          accountType?: string;
          accountAmount?: string;
        };
      };
      When: {
        payTo: {
          name: string;
          phone: string;
        };
        payFrom: {
          label: string;
          value: string;
          accountCode?: string;
          accountType?: string;
          accountAmount?: string;
        };
        amount: {
          label: string;
          value: string;
        };
      };
      Review: {
        payTo: {
          name: string;
          phone: string;
        };
        payFrom: {
          label: string;
          value: string;
          accountCode?: string;
          accountType?: string;
          accountAmount?: string;
        };
        amount: {
          label: string;
          value: string;
        };
        when: {
          label: string;
          value: string;
        };
      };
      Alert: undefined;
    }
  | Record<string, object | undefined>;
