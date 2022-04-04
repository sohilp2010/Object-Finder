cocossd = "";

function setup()
{
    canvas = createCanvas(0, 0, 320, 480);
    canvas.center()
    video = createCapture(VIDEO);
}

function start() 
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detection Objects";
    document.getElementById("input").value;
}

function modelLoaded() 
{
    console.log("Model loaded")
    status = true;
}

function draw() 
{
    image(VIDEO, 0, 0, 480, 380);
}