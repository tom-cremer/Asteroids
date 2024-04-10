import {Triangle} from "../../framework/shapes/Triangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {settings} from "../settings";
import {KeyController} from "../KeyController";
import {Vectors} from "../../framework/Vectors";


export class Ship extends Triangle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private keyController: KeyController;
    private speed: Vectors;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyController: KeyController) {
        super(ctx, new Vectors({
                x: canvas.width / 2,
                y: canvas.height / 2
            }),
            settings.ship.width, settings.ship.height, settings.ship.color, 0, false);
        this.canvas = canvas;
        this.speed = new Vectors({
            x: 0,
            y: 0,
        });
        this.keyController = keyController;
        this.draw();
    }

    update(): void {
        this.handleKey();
        this.speed.multiply(settings.ship.friction);
        (this.position as Vectors).add(this.speed);


        this.checkEdges();
    }

    private handleKey() {
        this.keyController.activeKeys.forEach((key) => {
            switch (key) {
                case 'ArrowUp':
                    this.speed.add(Vectors.fromAngle(this.degree, settings.ship.speed));
                    break;
                case 'ArrowDown':
                    this.speed.multiply(settings.ship.friction);
                    break;
                case 'ArrowRight':
                    this.degree += settings.ship.right;
                    break;
                case 'ArrowLeft':
                    this.degree += settings.ship.left;
                    break;
            }
        });
    }

    private checkEdges() {
        if (this.position.y > this.canvas.height + settings.ship.height) {
            this.position.y = -settings.ship.height;
        }
        if (this.position.y < -settings.ship.height) {
            this.position.y = this.canvas.height + settings.ship.height;
        }
        if (this.position.x > this.canvas.width + settings.ship.width) {
            this.position.x = -settings.ship.width;
        }
        if (this.position.x < -settings.ship.width) {
            this.position.x = this.canvas.width + settings.ship.width;
        }
    }
}