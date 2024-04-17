
export class Random {

    static int(min:number, max:number):number {
        return Math.floor(this.float(min, max));
    }

    static float(min: number, max: number) :number {
        return Math.random() * (max - min + 1 ) + min
    }
}
