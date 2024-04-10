import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/IPosition";

export class Triangle extends Shape {
    protected width: number;
    protected height: number;
    private rotate: number;


    constructor(ctx: CanvasRenderingContext2D, position: IPosition, width: number, height: number, color: IColor, degree: number = 0, isFilled: boolean = true) {
        super(ctx, position, color, degree, isFilled);
        this.width = width;
        this.height = height;

    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        this.ctx.beginPath();
        this.ctx.moveTo(0, -this.height / 2);
        this.ctx.lineTo(-this.width / 2, this.height / 2);
        this.ctx.lineTo(this.width / 2, this.height / 2);
        this.ctx.closePath();
        this.fillOrStroke();
        this.ctx.restore();
    }

    clear() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        if (this.isFilled) {
            this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
        } else {
            this.ctx.clearRect(-this.width / 2 - 2, -this.height / 2 - 2, this.width + 4, this.height + 4);
        }
        this.ctx.restore();
    }

}