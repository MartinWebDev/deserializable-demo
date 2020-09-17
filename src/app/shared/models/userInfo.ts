import { IDeserializable } from '../interfaces/IDeserializable';

export class UserInfo {
    weightKG: number;
    favouriteHobby: string;

    constructor(userInfo: UserInfo) {
        this.weightKG = userInfo.weightKG;
        this.favouriteHobby = userInfo.favouriteHobby;
    }

    get weightLbs(): number {
        return this.weightKG * 2.205;
    }
}

export class UserInfoDeserialized implements IDeserializable<UserInfoDeserialized> {
    weightKG: number;
    favouriteHobby: string;

    get weightLbs(): number {
        return this.weightKG * 2.205;
    }

    deserialize(input: UserInfoDeserialized): UserInfoDeserialized {
        Object.assign(this, input);
        return this;
    }
}
