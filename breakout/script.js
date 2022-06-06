const grid = document.querySelector('.grid')


// create block function
function addBlock() {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = '100px'
    block.style.bottom = '50px'
    grid.appendChild(block)
}
addBlock()