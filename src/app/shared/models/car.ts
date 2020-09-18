import { CarSpecs, CarSpecsDeserialized } from './carSpecs';
import { IDeserializable } from '../interfaces/IDeserializable';

abstract class CarBase {
    make: string;
    model: string;
    color: string;
}

export class Car extends CarBase {
    carSpecs: CarSpecs;

    constructor(car: Car) {
        super();
        this.make = car.make;
        this.model = car.model;
        this.color = car.color;
        this.carSpecs = new CarSpecs(car.carSpecs);
    }

    getFullName(): string {
        return `${this.make} ${this.model}`;
    }
}

export class CarDeserialized extends CarBase implements IDeserializable<CarDeserialized> {
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
