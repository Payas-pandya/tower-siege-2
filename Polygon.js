class Polygon {
    constructor(x, y, r) {
        polygon = Bodies.circle (50, 200, 20);
        World.add(World, this.body);

        slingshot = new SlingShot(this.polygon, {x: 100, y: 200});
        
    }
    Display() {
        imageMode(CENTER)
        image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
        polygon.loadImage("polygon.png");
    }
}