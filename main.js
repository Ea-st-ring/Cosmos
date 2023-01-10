const scroll_btn = document.querySelector('.fa-scroll');
const equip_list = document.querySelector('.equip_list');
scroll_btn.addEventListener('click',()=>{
    equip_list.style.display = "flex";
    equip_list.classList.add('active');
    setTimeout(() => scrollIntoView('.equip_list'), 300);
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


const imgClasses = [
    '.celestron_imgs',
    '.skywatcher_imgs',
    '.vixen_imgs'
];

const btnIds = [
    '#celestron__btn',
    '#skywatcher__btn',
    '#vixen__btn'
];



const telescopeImgs = imgClasses.map(cls => document.querySelector(cls));
const telescopeBtns = btnIds.map(id =>document.querySelector(id));


telescopeBtns.forEach((target)=>{
    target.addEventListener('click',()=>{
        showImgs(target.id);
    });
});

function showImgs(btn){
    if(btn == 'celestron__btn'){
        telescopeImgs[0].classList.add('active');
        telescopeImgs[1].classList.remove('active');
        telescopeImgs[2].classList.remove('active');
    }
    else if(btn == 'skywatcher__btn'){
        telescopeImgs[0].classList.remove('active');
        telescopeImgs[1].classList.add('active');
        telescopeImgs[2].classList.remove('active');
    }
    else if(btn=='vixen__btn'){
        telescopeImgs[0].classList.remove('active');
        telescopeImgs[1].classList.remove('active');
        telescopeImgs[2].classList.add('active');
    }
    equip_list.classList.add('moveLeft');
}
