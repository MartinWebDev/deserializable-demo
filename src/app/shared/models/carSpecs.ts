import { IDeserializable } from '../interfaces/IDeserializable';

export class CarSpecs {
    powerBHP: number;

    constructor(carSpecs: CarSpecs) {
        this.powerBHP = carSpecs.powerBHP;
    }

    get powerKw(): number {
        return this.powerBHP / 1.341;
    }
}

export class CarSpecsDeserialized implements IDeserializable<CarSpecsDeserialized> {
    powerBHP: number;

    get powerKw(): number {
        return this.powerBHP / 1.341;
    }

    deserialize(input: CarSpecsDeserialized): CarSpecsDeserialized {
        Object.assign(this, input);
        return this;
    }
}
