const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // getting click position on viewport
        const x = e.clientX
        const y = e.clientY
        // console.log(x, y)

        // getting position of the button
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        // console.log(buttonTop, buttonLeft)

        // getting click position in the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // console.log(xInside, yInside)

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        // adding circle element to the DOM
        this.appendChild(circle)

        //removing circle element from DOM
        setTimeout(() => circle.remove(), 500)
    })
})