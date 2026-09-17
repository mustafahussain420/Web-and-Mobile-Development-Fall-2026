import { Car } from './car'

export class hybridCar extends Car {
    constructor(brand, model, year, fuelType, batterySize) {
        super(brand, model, year);
        this.fuelType = fuelType;
        this.batterySize = batterySize;
    }

    info() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}