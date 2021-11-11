canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverwidth=100;
roverheight=90;

roverx=10;
rovery=10;

bimg="mars.jpg";
rimg="rover.png";

function add()
{
    bimg_tag=new Image();
    bimg_tag.onload=uploadbg;
    bimg_tag.src=bimg;

    rimg_tag=new Image();
    rimg_tag.onload=uploadrg;
    rimg_tag.src=rimg;  
}
function uploadbg(){
    ctx.drawImage(bimg_tag,0,0,canvas.width,canvas.height);
}
function uploadrg(){
    ctx.drawImage(rimg_tag,roverx,rovery,roverwidth,roverheight);
}

canvas.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }

    if(keypressed=='40')
    {
        down();
        console.log("down");
    }

    if(keypressed=='37')
    {
        left();
        console.log("left");
    }

    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
}
function up (){
    if (rovery>=0){
        rovery=rovery-10;
        console.log("when up arrow is pressed,x="+roverx+"y="+rovery);
        uploadrg();
        uploadbg();
    }
}

function down (){
    if (rovery<=550){
        rovery=rovery+10;
        console.log("when down arrow is pressed,x="+roverx+"y="+rovery);
        uploadrg();
        uploadbg();
    }
}

function right (){
    if (roverx<=750){
        roverx=roverx+10;
        console.log("when right arrow is pressed,x="+roverx+"y="+rovery);
        uploadrg();
        uploadbg();
    }
}

function left (){
    if (roverx>=0){
        roverx=roverx-10;
        console.log("when left arrow is pressed,x="+roverx+"y="+rovery);
        uploadrg();
        uploadbg();
    }
}


