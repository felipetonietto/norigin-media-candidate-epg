import { format } from 'date-fns'


export const SCALE = 5; // 5px per minute
export const MINS_IN_AN_HOUR = 60;
export const HOURS_IN_A_DAY = 24;
export const MILLISECONDS_IN_A_SECOND = 1000;
export const MINUTES_IN_A_DAY = 1440;
export const TIME_ACCURACY = 1000; // 1 second

export const currentTime = format(new Date(), "HH:mm");

export const MONTH_YEAR_FORMAT = "MMM-yyyy";