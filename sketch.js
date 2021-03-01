var blob;
let zoom = 1;
var blobs = [];
function setup() {
    createCanvas(600, 600);

    blob = new Blob(width/2, height/2,64)
    for (let i = 0; i < 50; i++) {
        var x = random(-width, width*2);
        let y = random(-height, height*2);
        blobs.push(new Blob(x, y, random(10,64)));
    }
}

function draw() {
    background(0);
    let newzoom = 64/blob.r;
    zoom = lerp(zoom, newzoom, 0.1);
    translate(width/2, height/2);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);
    blob.show(); 
    blob.update();
    for (let i = blobs.length-1; i >=0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i,1);            
        }
        
                
    }
}