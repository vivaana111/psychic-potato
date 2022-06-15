song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
    song = loadSong("music.mp3");
    song = loadSong("music2.mp3");

}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0,0,600,500 );
}
function play(){
    song.play();
    song.setVolume(5);
    song.rate(1.5);
}
function modelLoaded(){
    console.log("poseNet is initalized");
}
function modelLoaded(results){
    if (results.length>0)
    {
    console.log(results)
    leftWristX = results[0].pose.leftWrist.X;
    leftWristY = results[0].pose.leftWrist.Y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.X;
    rightWristY = results[0].pose.rightWrist.Y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}