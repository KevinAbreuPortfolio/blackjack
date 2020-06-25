// const square = document.getElementsByClassName('square');
const square = document.querySelector('.square');
const circle = document.querySelector('.circle');


// square.style.backgroundColor = "blue";
// square.style.height = "500px";
// square.style.width = "100px";
// square.style.opacity = '0.5';
// square.style.transformOrigin= "bottom center";

function wave(ele,msec,loop){
    ele.style.transformOrigin = "bottom center";
    var wave = [
        { transform: `rotate(0deg)` },
        { transform: `rotate(-45deg)`},
        { transform: `rotate(45deg)` },
        { transform: `rotate(0deg)` }
    ]
    var waveTiming = {
        duration: msec,
        iterations: loop,
        direction: 'normal',
        easing:'cubic-bezier(0,.27,.77,.47)'
    }
    ele.animate(
        wave,
        waveTiming
    )
}

// wave(square,1000,Infinity);

function tap(ele, msec, loop) {
    ele.style.transformOrigin = "bottom center";
    
    var tap = [
        { transform: `rotateX(0deg)`},
        { transform: `rotateX(25deg)`},
    ]
    var tapTiming = {
        duration: msec,
        iterations: loop,
        direction: 'alternate',
        easing: 'cubic-bezier(0,.27,.77,.47)'
    }
    ele.animate(
        tap,
        tapTiming
    )
}
