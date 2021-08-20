// Creating a slideshow for viewport
var images = ['https://unbounce.com/photos/landing-page-convert-more-leads_sm-1.webp', 'https://unbounce.com/photos/landing-page-convert-more-sales_sm-1.webp', 'https://unbounce.com/photos/landing-page-convert-more-customers_sm-1.webp'];
var text = ['Conversions', 'Relevance', 'Confidence'];
var time = 4000;
var i = 0; 

function changeImgText() {
  document.slide.src = images[i]; 
  var t = document.getElementsByClassName('textSlide')[0];
  t.textContent = text[i];
  if( i < images.length-1 ) {
    i++;
  }
  else {
    i = 0;
  }      

  setTimeout('changeImgText()', time);
}
window.addEventListener('load', changeImgText);

//Giving a good white bg-color to header after scrolling y-axis
function bgChangeScrolly() {
  var header = document.querySelector('header');
  var windowPosition = window.scrollY > 0;
  
  header.classList.toggle('scrolling-active', windowPosition);
}
window.addEventListener('scroll', bgChangeScrolly);

// header list hover block
var headerList = document.getElementsByClassName('header-list-hover');
var list = document.getElementsByClassName('products-hover');
// product hover
headerList[0].addEventListener('mouseover', () => {
  list[0].style.display = 'flex';
})
list[0].addEventListener('mouseover', () => {
  list[0].style.display = 'flex';
})
headerList[0].addEventListener('mouseout', () => {
  list[0].style.display = 'none';
})
// solutions hover
headerList[1].addEventListener('mouseover', () => {
  list[1].style.display = 'flex';
})
list[1].addEventListener('mouseover', () => {
  list[1].style.display = 'flex';
})
headerList[1].addEventListener('mouseout', () => {
  list[1].style.display = 'none';
})
// learn hover
headerList[2].addEventListener('mouseover', () => {
  list[2].style.display = 'flex';
})
list[2].addEventListener('mouseover', () => {
  list[2].style.display = 'flex';
})
headerList[2].addEventListener('mouseout', () => {
  list[2].style.display = 'none';
})

// sidebar
var navBar = document.getElementById('navbar-menu');

navBar.addEventListener('click', () => {
  
})

// footer navigation
var footerNav = document.getElementsByClassName('footer-nav');
var footerMenu = document.getElementsByClassName('footer-menu');
var count = 0;

function nav0() {
  if( count%2 === 0 ){
    footerMenu[0].style.display = 'block';
  }
  else {
    footerMenu[0].style.display = 'none';
  }
  count++;
}
function nav1() {
  if( count%2 === 0 ){
    footerMenu[1].style.display = 'block';
  }
  else {
    footerMenu[1].style.display = 'none';
  }
  count++;
}
function nav2() {
  if( count%2 === 0 ){
    footerMenu[2].style.display = 'block';
  }
  else {
    footerMenu[2].style.display = 'none';
  }
  count++;
}
function nav3() {
  if( count%2 === 0 ){
    footerMenu[3].style.display = 'block';
  }
  else {
    footerMenu[3].style.display = 'none';
  }
  count++;
}
function nav4() {
  if( count%2 === 0 ){
    footerMenu[4].style.display = 'block';
  }
  else {
    footerMenu[4].style.display = 'none';
  }
  count++;
}

footerNav[0].addEventListener('click', nav0);
footerNav[1].addEventListener('click', nav1);
footerNav[2].addEventListener('click', nav2);
footerNav[3].addEventListener('click', nav3);
footerNav[4].addEventListener('click', nav4);