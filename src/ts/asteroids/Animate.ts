import {IAnimatable} from "../framework/types/IAnimatable";

export class Animate {
    private iAnimates: IAnimatable[];

    constructor() {
        this.iAnimates = [];
        
    }

    private animate() {
        this.iAnimates.forEach((iAnimate) => {
           iAnimate.clear();
           iAnimate.update();
           iAnimate.draw();

        });
        requestAnimationFrame(this.animate.bind(this));
    }

    public start() {
        this.animate();
    }

    registerForAnimation(iAnimatable:IAnimatable):void {
        this.iAnimates.push(iAnimatable);

    }
}