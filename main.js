canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width = 100;
rover_height=90;
rover_x = 10;
rover_y  = 10;

bgimage = "mars.jpg";
rover_img = "rover.png";

function add(){
bgimg = new Image();
bgimg.onload = uploadbg;
bgimg.src = bgimage; 

 rvimg = new Image();
 rvimg.onload = uploadrv;
 rvimg.src = rover_img;

}
function uploadbg(){
    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);

}
function uploadrv(){
    ctx.drawImage(rvimg,rover_x,rover_y,rover_width,rover_height);
    
}

window.addEventListener("keydown", mydown );
function mydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    
    if (keypressed == '37'){
        left();
        console.log("left");
    }
 
    if (keypressed == '38'){
        up();
        console.log("up");
    }
     
    if (keypressed == '39'){
        right();
        console.log("right");
    }
    
     
    if (keypressed == '40'){
        down();
        console.log("down");
    }
}

function up(){
if(rover_y>=0)
{
    rover_y -= 10;//redusing rover y by 10px//
    console.log("When up arrow is pressed =" + rover_x + "-" + rover_y);
    uploadbg();
    uploadrv();
}

}
function down(){
    if(rover_y<=500)
    {
        rover_y += 10;//adding rover y by 10px//
        console.log("When down arrow is pressed =" + rover_x + "| y = " + rover_y);
        uploadbg();
        uploadrv();
    }
    
    }
    function left(){
        if(rover_x>=0)
        {
            rover_x -= 10;//redusing rover x by 10px//
            console.log("When left arrow is pressed =" + rover_x + "| y = " + rover_y);
            uploadbg();
            uploadrv();
        }
        
        }

        function right(){
            if(rover_x <=700)
            {
                rover_x += 10;//adding rover x by 10px//
                console.log("When right arrow is pressed =" + rover_x + "| y = " + rover_y);
                uploadbg();
                uploadrv();
            }
            
            }