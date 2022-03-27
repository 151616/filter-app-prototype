noseX = "5";
noseY = "";
function preload(){
dog_filter = loadImage("dog-filter.png");
}
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}
function draw(){
    image(video, 0, 0, 400, 300);
image(dog_filter, noseX, noseY, 30, 30);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
         noseX= results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        console.log("nose x= " + noseX);
        console.log("nose y=" + noseY);
    }
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}