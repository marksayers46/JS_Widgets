const grandparent = document.querySelector(".grandparent")
const parents = document.querySelectorAll(".parent")
const childOne = grandparent.querySelector(".child")


//  change grandparent color
grandparent.style.backgroundColor = "#0349"


// change both parent color
function changeParentColor(element) {
    element.style.backgroundColor = "#333"
}
parents.forEach(changeParentColor)

// change selected child color
function changeSelectedChild(element) {
    element.style.backgroundColor = "#644"
}
changeSelectedChild(childOne)