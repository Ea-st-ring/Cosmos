const scroll_btn = document.querySelector('.fa-scroll');
const equip_list = document.querySelector('.equip_list');
const equipment = document.querySelector('.equipments');
const planet = document.querySelector('.fa-planet-ringed');
const planetImgs = document.querySelectorAll('#planet_img');

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


scroll_btn.addEventListener('click',()=>{
    equip_list.style.display = "flex";
    equip_list.classList.add('active');
    
    setTimeout(() => scrollIntoView('.equip_list'), 300);
});

window.addEventListener('load',()=>{
    setTimeout(function() {
        planet.classList.add('active');
    }, 3000);
});


telescopeBtns.forEach((target)=>{
    target.addEventListener('click',()=>{
        showImgs(target.id);
    });
});

planetImgs.forEach((target)=>{
    target.addEventListener('click',()=>{
        equip_list.classList.remove('moveLeft');
        equip_list.classList.add('moveBack');
        target.style.animation = 'fade_out_anim 500ms'
        setTimeout(function() {
            target.classList.remove('active');
        }, 500);
    });
})



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}



function showImgs(btn){
// TO-DO: 스크롤 위치 처음부터
    console.log(equip_list.classList.contains('moveLeft'));
    if(!equip_list.classList.contains('moveLeft')){
        equip_list.classList.remove('moveBack');
        equip_list.classList.add('moveLeft');
    }

    if(btn == 'celestron__btn'){
        telescopeImgs[0].style.animation = 'fade_in_anim 500ms'
        telescopeImgs[0].classList.add('active');
        telescopeImgs[1].classList.remove('active');
        telescopeImgs[2].classList.remove('active');
    }
    else if(btn == 'skywatcher__btn'){
        telescopeImgs[1].style.animation = 'fade_in_anim 500ms'
        telescopeImgs[0].classList.remove('active');
        telescopeImgs[1].classList.add('active');
        telescopeImgs[2].classList.remove('active');
    }
    else if(btn=='vixen__btn'){
        telescopeImgs[2].style.animation = 'fade_in_anim 500ms'
        telescopeImgs[0].classList.remove('active');
        telescopeImgs[1].classList.remove('active');
        telescopeImgs[2].classList.add('active');
    }
}

