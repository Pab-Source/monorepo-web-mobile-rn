import { FC } from 'react';
import './config/locales.ts';
export interface ICalendar {
    onChange: (value: string) => void;
}
export declare const Calendar: FC<ICalendar>;
