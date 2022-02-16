nose_x = 0;
nose_y = 0;

function preload(){
    mustache_filter = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Executed");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        nose_x = results[0].pose.nose.x - 50;
        nose_y = results[0].pose.nose.y - 10;
        console.log("Nose X Position = " + nose_x);
        console.log("Nose Y Position = " + nose_y);
    }
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(mustache_filter, nose_x, nose_y, 100, 100);
}

function take_snapshot(){
    save("Your Filter Image.png");
}