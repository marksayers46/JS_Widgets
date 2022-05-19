const grandparent = document.getElementById("grandparent-id")
const parents = document.querySelectorAll('.parent')

// grandparent.style.backgroundColor = "#333"


function changeColor(element) {
    element.style.backgroundColor = "#333"
}
// changeColor(grandparent)

parents.forEach(changeColor)

