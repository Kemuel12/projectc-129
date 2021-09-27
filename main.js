song1=""
song2=""
leftWristX=0
rightWristX=0
leftWristY=0
rightWristY=0

function preload()
{
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}

function modelLoaded()
{
    console.log("Posenet is Initialised");
}

function gotPoses(results)
{
  if (results.length>0)
  {
    console.log(results);
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    
    console.log("scoreLeftWrist= "+ scoreLeftWrist);
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    console.log("leftWristX = " + leftWristX +" leftWristY = " + leftWristY);
    
    leftWristY= results[0].pose.leftWrist.y;
    rightWristY= results[0].pose.leftWrist.y;
    console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY);
  }
}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,500,500)
    circle(leftWristX,leftWristY,70);
    song1.isPlaying()
    document.getElementById("song_name").innerHTML="song_name= "+song1;
}

