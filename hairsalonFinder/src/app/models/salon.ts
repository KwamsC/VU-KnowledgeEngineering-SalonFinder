import Hairservice from './hairService';
import { Stylist } from './stylist';

export class Salon {
    id: number;
    name: string;
    address: string;
    zone: string;
    hairservices: Hairservice[];
    gender: string;
    skill: string;
    stylists: Stylist[];

    // service: string;
    // address: string;
    // location: string;

    // location: { east, west, south, north, };
    // availability: boolean;
    // gender: {male, female, unisex, };
    // score: number;
    // location: string;
    // description: string;
    // open: string;
    // closed: string;
    // busy: boolean;
    // logo: string;
    // price: string;
    // stylist?: { [key: string]: { waiting: number, checkedIn: boolean } };
}
