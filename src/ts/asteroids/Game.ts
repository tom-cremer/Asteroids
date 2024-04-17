import {settings} from "./settings";
import {Ship} from "./drawables/Ship";
import {Animate} from "../framework/Animate";
import {KeyController} from "./KeyController";
import {Asteroid} from "./drawables/Asteroid";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private ship: Ship;
    private animation: Animate;
    private keyController: KeyController;


    constructor(ctx: CanvasRenderingContext2D) {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', (e) => {
            this.resizeCanvas();
        });
        this.keyController = new KeyController();
        this.ship = new Ship(this.ctx, this.canvas, this.keyController);
        this.ship.clear();
        this.animation = new Animate(this.ctx, this.canvas);
        this.animation.registerForAnimation(this.ship);
        this.animation.start();
        for (let i = 0; i < settings.asteroid.initialCount; i++) {
            this.animation.registerForAnimation(new Asteroid(this.ctx, this.canvas));
        }
    }

    private resizeCanvas() {
        this.canvas.width = Math.min(window.innerHeight, window.innerWidth) - 2;
        this.canvas.height = Math.min(window.innerHeight, window.innerWidth) - 2;
    }


}