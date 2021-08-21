// Creating a slideshow of images and text
var imagesBig = [
  "https://unbounce.com/photos/landing-page-convert-more-leads_sm-1.webp",
  "https://unbounce.com/photos/landing-page-convert-more-sales_sm-1.webp",
  "https://unbounce.com/photos/landing-page-convert-more-customers_sm-1.webp",
];
var imagesSmall = [
  "https://unbounce.com/photos/get-more-leads-slide_sm-1.webp",
  "https://unbounce.com/photos/get-more-sales-slide_sm-1.webp",
  "https://unbounce.com/photos/get-more-customers-slide-1.webp",
];
var text = ["Conversions", "Relevance", "Confidence"];
var time = 4000;
var i = 0;
var j = 0;

//slideshow for big screen
function changeImgText() {
  if (window.innerWidth > "775") {
    document.slide.src = imagesBig[i];
    var t = document.getElementsByClassName("textSlide")[0];
    t.textContent = text[i];
    if (i < imagesBig.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
  setTimeout("changeImgText()", time);
}
window.addEventListener("load", changeImgText);
window.addEventListener("resize", changeImgText);

// slideshow for small screen
function resizeImg() {
  if (window.innerWidth <= "775") {
    document.slide.src = imagesSmall[j];
    var t = document.getElementsByClassName("textSlide")[0];
    t.textContent = text[j];
    if (j < imagesSmall.length - 1) {
      j++;
    } else {
      j = 0;
    }
    setTimeout("resizeImg()", time);
  }
}
window.addEventListener("load", resizeImg);
window.addEventListener("resize", resizeImg);

//applying a class to header after scrolling y-axis
window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  var windowPosition = window.scrollY > 0;

  header.classList.toggle("scrolling-active", windowPosition);
});

//color change .viewport div.head-para-a div
var color = ['#27cc90', '#fece00', '#fe9ea1'];


// header list on hover => appearing block
var headerList = document.getElementsByClassName("header-list-hover");
var list = document.getElementsByClassName("products-hover");

// product hover
headerList[0].addEventListener("mouseover", () => {
  list[0].style.display = "flex";
});
list[0].addEventListener("mouseover", () => {
  list[0].style.display = "flex";
});
headerList[0].addEventListener("mouseout", () => {
  list[0].style.display = "none";
});

// solutions hover
headerList[1].addEventListener("mouseover", () => {
  list[1].style.display = "flex";
});
list[1].addEventListener("mouseover", () => {
  list[1].style.display = "flex";
});
headerList[1].addEventListener("mouseout", () => {
  list[1].style.display = "none";
});

// learn hover
headerList[2].addEventListener("mouseover", () => {
  list[2].style.display = "flex";
});
list[2].addEventListener("mouseover", () => {
  list[2].style.display = "flex";
});
headerList[2].addEventListener("mouseout", () => {
  list[2].style.display = "none";
});

// sidebar
var navBar = document.getElementById("navbar-menu");
var menu = document.getElementById("menu");
navBar.addEventListener("click", () => {
  menu.style.display = "block";
});

//close modal
var close = document.getElementById("modal");

close.addEventListener("click", () => {
  menu.style.display = "none";
});

// footer navigation for smaller screen
var footerNav = document.getElementsByClassName("footer-nav");
var footerMenu = document.getElementsByClassName("footer-menu");
var count = 0;

footerNav[0].addEventListener("click", () => {
  if (count % 2 === 0) {
    footerMenu[0].style.display = "block";
  } else {
    footerMenu[0].style.display = "none";
  }
  count++;
});

footerNav[1].addEventListener("click", () => {
  if (count % 2 === 0) {
    footerMenu[1].style.display = "block";
  } else {
    footerMenu[1].style.display = "none";
  }
  count++;
});

footerNav[2].addEventListener("click", () => {
  if (count % 2 === 0) {
    footerMenu[2].style.display = "block";
  } else {
    footerMenu[2].style.display = "none";
  }
  count++;
});

footerNav[3].addEventListener("click", () => {
  if (count % 2 === 0) {
    footerMenu[3].style.display = "block";
  } else {
    footerMenu[3].style.display = "none";
  }
  count++;
});

footerNav[4].addEventListener("click", () => {
  if (count % 2 === 0) {
    footerMenu[4].style.display = "block";
  } else {
    footerMenu[4].style.display = "none";
  }
  count++;
});
