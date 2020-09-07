class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true
        }

        this.image = loadImage("images/umbrella.png");

        this.body = Bodies.circle(x, y, 100, options);
        this.x = x;
        this.y = y;
        this.r = 100;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x + 15, pos.y + 79, 500, 400);  
    }
}