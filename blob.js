function Blob(x,y,r) {
    this.pos = createVector(x, y);
    this.r = r;

    this.update = function(){
        let val = createVector(mouseX-width/2, mouseY-height/2);
        val.setMag(9);
        this.pos.add(val);
    }

    this.eats = function(aBlob){
        let distance = dist(this.pos.x,this.pos.y,aBlob.pos.x,aBlob.pos.y);
        if (distance > 10)  
            return true
        else 
            return false
    }

    this.show = function(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2)
    }
     
}