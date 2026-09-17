import { Car } from './car'

export class hybridCar extends Car {
    constructor(brand, model, year, fuelType, batterySize) {
        super(brand, model, year);
        this.fuelType = fuelType;
        this.batterySize = batterySize;
    }

    mileage(model) {
        if (model === 'Prius') {
            return 50; //km per litre
        } else if (model === 'Volt') {
            return 42; //km per litre
        }
        return 0; //km per litre for unknown models
    }

    info() {
        return `${super.info} - ${this.fuelType}, Battery: ${this.batterySize}, Mileage: ${this.mileage(this.mileage)} km/L`;
    }
}