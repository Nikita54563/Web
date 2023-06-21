autoSlider();
var left = 0;
var timer = 0;

function autoSlider(){
    timer= setTimeout(function(){
        var polz = document.getElementById('polz');
        left = left - 304;
        if(left < -912){
            left = 0;
            clearTimeout(timer)
        }
        polz.style.left = left + 'px';
    
        autoSlider();
     
    }, 2000)
}









