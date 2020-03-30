$(function() {
    let persent = setInterval(function(){
        let x = document.getElementsByClassName(`pers`)[0].innerHTML 
   if(x<100){
        x++}
        else{
            clearInterval(persent)
        }
    
        document.getElementsByClassName(`pers`)[0].innerHTML = x
    },200)
    $(".dws-progress-bar").circularProgress({
        color: "#C5EFF7",
        line_width: 20,
        height: "350px",
        width: "350px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 50
    }).circularProgress('animate', 100, 20000);
})