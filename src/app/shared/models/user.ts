import { Car, CarDeserialized } from './car';
import { UserInfo, UserInfoDeserialized } from './userInfo';
import { IDeserializable } from '../interfaces/IDeserializable';

export class User {
    id: string;
    name: string;
    cars: Car[];
    userInfo: UserInfo;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.cars = user.cars.map(c => new Car(c));
        this.userInfo = new UserInfo(user.userInfo);
    }

    tellMeSomething(): string {
        return 'No';
    }
}

export class UserDeserialized implements IDeserializable<UserDeserialized> {
    id: string;
    name: string;
    cars: CarDeserialized[];
    userInfo: UserInfoDeserialized;

    tellMeSomething(): string {
        return 'No';
    }

    deserialize(input: UserDeserialized): UserDeserialized {
        Object.assign(this, input);

        this.cars = input.cars.map(c => new CarDeserialized().deserialize(c));
        this.userInfo = new UserInfoDeserialized().deserialize(input.userInfo);

        return this;
    }
}
