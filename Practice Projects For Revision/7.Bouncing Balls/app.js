//global variables
var timer;
var marginTop=360;
var bottomToTop=true;
 
//method to jump the ball
function jumpBall () {
    var ball=document.getElementById("ball");
    if(bottomToTop){
        marginTop -=10;
    }else{
        marginTop +=10;
    }
     
    ball.style.marginTop= marginTop+"px";
    if(marginTop==60){
        bottomToTop=false;
    }
    if(marginTop==360){
        bottomToTop=true;
    }
}
 
//method to handle start/stop of jumping ball
function start(){
    var btn=document.getElementById("start-btn");
    if(btn.innerHTML.trim()==='Start Red ball'){
        //start jumping the ball
        timer=setInterval(function () {
            jumpBall();         
        },10);
        btn.innerHTML='Stop red ball';
    }else{
        //stop jumping the ball
        clearInterval(timer);
        btn.innerHTML='Start Red ball';
    }
}

function jumpBall2 () {
    var ball=document.getElementById("ball2");
    if(bottomToTop){
        marginTop -=10;
    }else{
        marginTop +=10;
    }
     
    ball.style.marginTop= marginTop+"px";
    if(marginTop==60){
        bottomToTop=false;
    }
    if(marginTop==360){
        bottomToTop=true;
    }
}
 
//method to handle start/stop of jumping ball
function start2(){
    var btn=document.getElementById("start-btn2");
    if(btn.innerHTML.trim()==='Start blue ball'){
        //start jumping the ball
        timer=setInterval(function () {
            jumpBall2();         
        },10);
        btn.innerHTML='Stop Blue Ball';
    }else{
        //stop jumping the ball
        clearInterval(timer);
        btn.innerHTML='Start blue ball';
    }
}
