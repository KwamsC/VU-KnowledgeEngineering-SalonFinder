import { WeekDay } from '@angular/common';

export interface Stylist {
    id: number;
    firstName?: string;
    lastName?: string;
    Schedule: WeekDay[];
}
