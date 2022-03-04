const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

// the first couple show up because invoking checkBoxes equation
// if we didn't want any cards to show up right away, remove this checkBoxes call.
checkBoxes()

function checkBoxes() {
    // console.log(window.innerHeight / 5 * 4);
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        /* getBoundingClientRect can take in more properties then just 
        .top used here. Find MDN doc at link below:
        https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect */
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } 
        else {
            box.classList.remove('show');
        }
    });

};

