class Block extends Brick {
    constructor(x, y) {
        super(x, y, 30, 40);
        this.visible = 255;
        this.image = loadImage("brick.png");
    }

    score() {
        if (this.visible < 0 && this.visible > -500) {
            score += 1;
        }
    }

    display() {
        if (this.body.speed < 3) {
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.visible = this.visible - 5;
            tint(255, this.visible);
            image(this.image, this.body.position.x, this.body.position.y, 30, 40);
            pop();
        }
    }
}