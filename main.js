nosex=0;
nosey=0;
function preload(){
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotposes); 
}
function modeloaded(){
    console.log("modeloaded");
}
function draw() {
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(0,255,0);
    circle(nosex,nosey,50);
}
function takepic() {
 save('my_filter_pic.png');
}
function gotposes(results) {
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nose x postion"+results[0].pose.nose.x);
        console.log("nose y postion"+results[0].pose.nose.y);
        console.log("right eye x postion"+results[0].pose.rightEye);
        console.log("right eye y postion"+results[0].pose.rightEye);
    }
}