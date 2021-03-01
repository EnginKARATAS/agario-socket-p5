let blob;
let zoom = 1;
var blobs = [];

function setup() {
    createCanvas(600, 600);

    socket = io.connect("localhost:3000");

    blob = new Blob(random(width), random(height), random(8, 24))

    let data = {
        x: blob.pos.x,
        y: blob.pos.y,
        r: blob.r
    }
    socket.emit('start', data);

    socket.on('heartbeat', data=>{
        console.log(data);
        blobs = data;
    })
}

function draw() {
    
    //Arkaplan siliniyor
    background(0);

    let newzoom = 64 / blob.r;
    zoom = lerp(zoom, newzoom, 0.1);
    translate(width / 2, height / 2);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);
    blob.show();
    blob.update();
    blob.constrain();
    for (let i = blobs.length - 1; i >= 0; i--) {
        fill(0, 0 , 255);
        ellipse(blobs[i].x, blobs[i].y, blobs[i].r*2,  blobs[i].r*2);

        // blobs[i].show();
        // if (blob.eats(blobs[i])) {
        //     blobs.splice(i, 1);
        // }
    }

    let send = {
        x: blob.pos.x,
        y: blob.pos.y,
        r: blob.r
    }
    socket.emit('update', send);


}