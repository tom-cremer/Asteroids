import {IAnimatable} from "./types/IAnimatable";

export class Animate {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private iAnimates: IAnimatable[];

    constructor(ctx?: CanvasRenderingContext2D, canvas?: HTMLCanvasElement) {
        this.iAnimates = [];
        this.ctx = ctx;
        this.canvas = canvas;
    }

    private animate() {
        requestAnimationFrame(this.animate.bind(this));

        if (this.canvas !== undefined && this.ctx !== undefined) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.iAnimates.forEach((iAnimate) => {
            if (this.canvas === undefined || this.ctx == undefined) {

                iAnimate.clear();
            }
            iAnimate.update();
            iAnimate.draw();
        })
    }

    public start() {
        this.animate();
    }

    registerForAnimation(iAnimatable: IAnimatable) {
        this.iAnimates.push(iAnimatable);
    }
}