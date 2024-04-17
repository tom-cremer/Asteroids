import {Circle} from "../../framework/shapes/Circle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {IPosition} from "../../framework/types/IPosition";
import {Vectors} from "../../framework/Vectors";
import {settings} from "../settings";

export class Bullet extends Circle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private speed: Vectors;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, degree: number, speed: Vectors) {
        super(ctx, new Vectors(position), settings.bullet.radius, settings.bullet.color, degree, false);
        this.speed = new Vectors(speed);
        this.update()
    }

    update(): void {
        this.speed.add(Vectors.fromAngle(this.degree, settings.bullet.speed));
        (this.position as Vectors).add(this.speed)
    }

    clear(): void {
    }
}