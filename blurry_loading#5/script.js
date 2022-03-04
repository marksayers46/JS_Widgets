const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

// this set our interval on our blur to 30 milliseconds
let int = setInterval(blurring, 30);

function blurring() {
    load++

    if (load >= 100) {
        clearInterval(int)
    };
    //console.log(load)
    //opacity goes from 0 to 1, 1 being visible and 0 being invisible state.
    loadText.innerText = `${load}%`;
    // this uses our scale function to set opacity of 1 (visible) to 0 (invisible) within the counter 0 to 100 percent.
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // this is calling a expression syntax for blur in our css.
    // we are telling it to scale from 30 to 0 opacity in the time load goes from 0 to 100.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// function to map one range of numbers to another range of numbers.
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}