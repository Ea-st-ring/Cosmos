const scroll_btn = document.querySelector('.fa-scroll');
const equip_list = document.querySelector('.equip_list');
scroll_btn.addEventListener('click',()=>{
    equip_list.style.display = "flex";
    equip_list.classList.add('active');
    scrollIntoView('.equip_list');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}

const planet = document.querySelector('.fa-planet-ringed');

window.addEventListener('load',()=>{
    setTimeout(function() {
        planet.classList.add('active');
    }, 3000);
});