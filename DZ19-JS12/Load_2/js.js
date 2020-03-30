$(function() {
    //  setTimeout(function(){
    //         $( ".xphone" ).slideDown();
    //     },0)
 
    
    setTimeout(function(){
        $( ".xphone" ).slideDown(60000);
        
    },0)
    
       setTimeout(function(){
           document.querySelector(`.time`).innerHTML = 1
        $( ".xphone" ).slideUp( 60000 );
    },60000)
    setTimeout(function(){
        document.querySelector(`.time`).innerHTML = 0
   
 },60000*2-5)
})