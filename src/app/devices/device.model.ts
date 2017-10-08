import { Line } from '../lines/line.model';

export class Device {
        constructor(public mac?: string, public deviceType?: string, public lines?: Line[]){}

}