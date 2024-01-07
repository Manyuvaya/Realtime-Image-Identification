noseX=0
noseY=0
right_wristX=0
left_wristX=0
diffrence=0
function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 430)
    canvas.position(570, 80)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", got_results)
}

function modelLoaded() {
    console.log("poseNet Is Loaded")
}

function got_results(results) {
    if (results.length > 0) {
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
         right_wristX=results[0].pose.rightWrist.x;
         left_wristX=results[0].pose.leftWrist.x;
         diffrence=left_wristX-right_wristX
    }


}
function draw(){
    background("red")
circle(noseX,noseY,diffrence)
}