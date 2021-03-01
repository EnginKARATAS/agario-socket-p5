function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;

    this.update = function () {
        let val = createVector(mouseX - width / 2, mouseY - height / 2);
        val.setMag(9);
        this.pos.add(val);
    }

    this.eats = function (other) {
        let distance = p5.Vector.dist(this.pos, other.pos);//return a vectoral magnetude
        if (distance + 25 < this.r + other.r) {
            this.r += other.r*0.1;
            return true
        }
        else
            return false
    }

    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }

}