//
const navBar = document.querySelector('nav');
const navHeight = navBar.getBoundingClientRect().y;

//
const firstSub = document.querySelector('.sub1');
const secondSub = document.querySelector('.sub2');
const thirdSub = document.querySelector('.sub3');
const forthSub = document.querySelector('.sub4');

const product = document.querySelector('.product');
const shop = document.querySelector('.shop');
const customer = document.querySelector('.customer');
const subevent = document.querySelector('.subevent');
const navBg = document.querySelector('#nav-bg');

//
const hairButton = document.querySelector('#item-title ul li:first-of-type');
const lampButton = document.querySelector('#item-title ul li:nth-of-type(2)');
const vacuumButton = document.querySelector('#item-title ul li:nth-of-type(3)');
const airButton = document.querySelector('#item-title ul li:last-of-type');

const hairItem = document.querySelector('#item-section li:first-of-type');
const lampItem = document.querySelector('#item-section li:nth-of-type(2)');
const vacuumItem = document.querySelector('#item-section li:nth-of-type(3)');
const airItem = document.querySelector('#item-section li:last-of-type');

//
const flagPicker = document.querySelector('.flag');
const xBox = document.querySelector('#x-box');



//메뉴바 픽시드

document.addEventListener('scroll', () => {
  if (window.scrollY > navHeight) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
});


//서브메뉴

function subMenuActive(subMenuName){
    switch(subMenuName){
        case 'product' : firstSub.style.display = 'block';
        navBg.style.display = 'block';
        break;
        case 'shop' : secondSub.style.display = 'block';
        navBg.style.display = 'block';
        break;
        case 'customer' : thirdSub.style.display = 'block';
        navBg.style.display = 'block';
        break;
        case 'subevent' : forthSub.style.display = 'block';
        navBg.style.display = 'block';
        break;
    }
};


function subProductHidden(){
    firstSub.style.display = 'none';
    navBg.style.display = 'none';
};
function subShopHidden(){
    secondSub.style.display = 'none';
    navBg.style.display = 'none';
};
function subCustomerHidden(){
    thirdSub.style.display = 'none';
    navBg.style.display = 'none';
};
function subEventHidden(){
    forthSub.style.display = 'none';
    navBg.style.display = 'none';
};


product.addEventListener('mouseout',subProductHidden);
shop.addEventListener('mouseout', subShopHidden);
customer.addEventListener('mouseout', subCustomerHidden);
subevent.addEventListener('mouseout', subEventHidden);



//베스트아이템
function itemButtonEvent(buttonName){
    switch(buttonName){
        case 'hair': hairItem.style.display = 'block';
        hairButton.classList.add('clickafter');
        hairButton.classList.remove('clickbefore');
        lampButtonOffEvent();
        vacuumButtonOffEvent();
        airButtonOffEvent();
        break;
        case 'lamp': lampItem.style.display = 'block';
        lampButton.classList.add('clickafter');
        lampButton.classList.remove('clickbefore');
        hairButtonOffEvent();
        vacuumButtonOffEvent();
        airButtonOffEvent();
        break;
        case 'vacuum': vacuumItem.style.display = 'block';
        vacuumButton.classList.add('clickafter');
        vacuumButton.classList.remove('clickbefore');
        hairButtonOffEvent();
        lampButtonOffEvent();
        airButtonOffEvent();
        break;
        case 'air': airItem.style.display = 'block';
        airButton.classList.add('clickafter');
        airButton.classList.remove('clickbefore');
        hairButtonOffEvent();
        vacuumButtonOffEvent();
        lampButtonOffEvent();
        break;
    }
};



function lampButtonOffEvent(){
    lampItem.style.display = 'none';
    lampButton.classList.add('clickbefore');
    lampButton.classList.remove('clickafter');
    
};

function hairButtonOffEvent(){
    hairItem.style.display ='none';
    hairButton.classList.add('clickbefore');
    hairButton.classList.remove('clickafter');
};
function vacuumButtonOffEvent(){
    vacuumItem.style.display ='none';
    vacuumButton.classList.add('clickbefore');
    vacuumButton.classList.remove('clickafter');
};
function airButtonOffEvent(){
    airItem.style.display ='none';
    airButton.classList.add('clickbefore');
    airButton.classList.remove('clickafter');
};

//국가 선택창
function nationPage(){
    let ModalBox = document.querySelector('#modal-wrap');
    ModalBox.style.display = 'block'
};

flagPicker.addEventListener('click',nationPage);


function nationPageClose(){
    let ModalBox = document.querySelector('#modal-wrap');
    ModalBox.style.display = 'none';
};

xBox.addEventListener('click', nationPageClose);


//

const SHOWING_CLASS ='showing';
const firstSlide = document.querySelector('#slide ul li:first-of-type');

function slide(){
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if(nextSlide){
      nextSlide.classList.add(SHOWING_CLASS);
    }else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  }else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
};

slide();

setInterval(slide, 4000);