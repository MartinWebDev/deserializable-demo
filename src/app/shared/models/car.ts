import { CarSpecs, CarSpecsDeserialized } from './carSpecs';
import { IDeserializable } from '../interfaces/IDeserializable';

export class Car {
    make: string;
    model: string;
    color: string;
    carSpecs: CarSpecs;

    constructor(car: Car) {
        this.make = car.make;
        this.model = car.model;
        this.color = car.color;
        this.carSpecs = new CarSpecs(car.carSpecs);
    }

    getFullName(): string {
        return `${this.make} ${this.model}`;
    }
}

export class CarDeserialized implements IDeserializable<CarDeserialized> {
    make: string;
    model: string;
    color: string;
    carSpecs: CarSpecsDeserialized;

    getFullName(): string {
        return `${this.make} ${this.model}`;
    }

    deserialize(input: CarDeserialized): CarDeserialized {
        Object.assign(this, input);

        this.carSpecs = new CarSpecsDeserialized().deserialize(input.carSpecs);

        return this;
    }
}
