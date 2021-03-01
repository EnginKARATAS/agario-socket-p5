    function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.val = createVector(0, 0);

    this.update = function () {
        let newval = createVector(mouseX - width / 2, mouseY - height / 2);
        newval.setMag(3);
        this.val.lerp(newval, 0.2)
        this.pos.add(this.val);
    }

    this.constrain = function () {
        blob.pos.x = constrain(this.pos.x, 0, width);
        blob.pos.y = constrain(this.pos.y, 0, height);
    }

    this.eats = function (other) {
        let distance = p5.Vector.dist(this.pos, other.pos);//return a vectoral magnetude
        if (distance + 25 < this.r + other.r) {
            this.r += other.r * 0.1;
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