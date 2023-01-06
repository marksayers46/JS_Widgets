const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

// node list or array
const animated_bgs = document.querySelectorAll('animated-bg');
const animated_bg_texts = document.querySelectorAll('animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg" alt="" />';
    title.innerHTML = 'Cloud Computing AWS';
    excerpt.innerHTML = '"Cloud computing" plays a vital role in the creation of software products and services. It\'s also one of the most highly sought-after skills in the tech industry.';
    profile_img.innerHTML = '<img src="./assets/blank-profile.png" alt="" />';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08,2021';

    // looping over our node lists or arrays
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
};
