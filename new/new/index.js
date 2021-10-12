const slideContainer =document.querySelector(`.container`);
const slide =document.querySelector(`.slides`);
const nextBtn =document.getElementById(`next-btn`);
const prevBtn =document.getElementById(`prev-btn`);
const interval=5000;

let slides=document.querySelectorAll(`.slide`);
let slideId;
let index =1;

const firstClone =slides[0].cloneNode(true);
const lastClone =slides[slides.length-1].cloneNode(true);

firstClone.id='first-clone';
lastClone.id='last-clone';
slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth =slides[index].clientWidth;

slide.style.transform=`translateX(${-slideWidth*index}px)`;

const startSLide =()=>{
    slideId=setInterval(() => {
        index++;
        slide.style.transform=`translateX(${-slideWidth*index}px)`
        slide.style.transition=`transform 1.5s ease-in-out`
    }, interval);

};

slide.addEventListener('transitionend',()=>{
    let slides=document.querySelectorAll(`.slide`);
    if(slides[index].id===firstClone.id){
        slide.style.transition='none';
        index=1;
        slide.style.transform=`translateX(${-slideWidth*index}px)`
    }
});
slide.addEventListener('mouseenter',()=>{
    clearInterval(slideId);
});

slide.addEventListener('mouseleave',startSLide);



startSLide();