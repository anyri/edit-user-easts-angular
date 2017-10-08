import { Device } from '../devices/device.model';

export class User {
    userid: number;
    firstName: string;
    lastName: string;
    email: string;
    tel: number;
    devices: Device[] = [];
    
    constructor(user?: User) {
        if(user)
            Object.assign(this, user);
    }

}