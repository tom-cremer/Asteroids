import {IColor} from "../types/IColor";
import {IPosition} from "../types/IPosition";

export abstract class Shape implements IColor {
    protected readonly ctx: CanvasRenderingContext2D;
    public readonly position: IPosition;
    protected color: IColor;
    protected isFilled: boolean;
    public degree: number;

    protected constructor(ctx: CanvasRenderingContext2D, position: IPosition, color: IColor, degree: number = 0, isFilled: boolean = true) {
        this.ctx = ctx;
        this.position = position;
        this.color = color;
        this.isFilled = isFilled;
        this.degree = degree;
    }

    protected fillOrStroke() {
        if (this.isFilled) {
            this.ctx.fillStyle = this.color.toString();
            this.ctx.fill();
        } else {
            this.ctx.strokeStyle = this.color.toString();
            this.ctx.stroke();
        }
    }
}