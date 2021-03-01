var blob;

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
    translate(width/2-blob.pos.x, height/2-blob.pos.y);
    blob.show(); 
    blob.update();
    for (let i = 0; i < 50; i++) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i,1);            
        }
                
    }
}