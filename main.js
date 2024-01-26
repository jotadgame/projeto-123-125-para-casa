lipfilterX=0;
lipfilterY=0;

function preload() {
    moustache = loadImage('https://www.pngegg.com/pt/png-nakte');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet foi inicializado');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        lipfilterX = results[0].pose.lipfilter.x-15;
        lipfilterY = results[0].pose.lipfilter.y-15;
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, lipfilterX, lipfilterY, 30, 30);
}

function takeSnapshot(){
    save('myFilterImage.png');
}