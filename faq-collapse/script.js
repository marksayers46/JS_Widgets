// 1. Bring in the toggle buttons (querySelectorAll)
// 2. Loop through nodelist (forEach)
// 3. Add click event (addEventListener)
// 4. Toggle the active class on the parent node (.parentnode & classList.toggle())

const toggles = document.querySelectorAll('.faq-toggle');


toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})