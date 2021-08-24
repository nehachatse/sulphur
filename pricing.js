const planButton=document.querySelectorAll('.duration>button');
const visibility=document.querySelectorAll('.visible');
planButton[0].classList.add('active_button');
visibility[0].style.display="flex";
var count =1;
window.addEventListener('click', function(e) {
    if (count==1) {
        planButton[0].classList.remove('active_button');
        planButton[1].classList.add('active_button');
        visibility[1].style.display="flex";
        visibility[0].style.display="none";
        count=0;
    }
    else if(count==0){
        planButton[1].classList.remove('active_button');
        planButton[0].classList.add('active_button');
        visibility[0].style.display="flex";
        visibility[1].style.display="none";
        count=1;
    }
  })

const button=document.querySelectorAll('.side-screen>div>button');
const hide=document.querySelectorAll('.hide');
hide[0].classList.remove('hide');
button[0].classList.add('active_button');
var sam =1;
window.addEventListener('click', function(e) {
    if (sam==1) {
        button[0].classList.remove('active_button');
        button[1].classList.add('active_button');
        hide[0].classList.add('hide');
        hide[1].classList.remove('hide');
        sam=0;
    }
    else if(sam==0){
        button[1].classList.remove('active_button');
        button[0].classList.add('active_button');
        hide[1].classList.add('hide');
        hide[0].classList.remove('hide');
        sam=1;
    }
  })

  // frequetly-asked-question
var asked = document.getElementById("faq");
var askedList = document.getElementById("frequently-list");
var j = 1;
asked.addEventListener("click", () => {
  if (j % 2 === 0) {
    askedList.style.display = "block";
  } else {
    askedList.style.display = "none";
  }
  console.log(j)
  j++;
});

var faqh = document.getElementsByClassName("faq-h");
var faqp = document.getElementsByClassName("faq-p");
var index = 1;
faqh[0].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[0].style.display = "none";
  } else {
    faqp[0].style.display = "block";
  }
  index++;
});
faqh[1].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[1].style.display = "none";
  } else {
    faqp[1].style.display = "block";
  }
  index++;
});
faqh[2].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[2].style.display = "none";
  } else {
    faqp[2].style.display = "block";
  }
  index++;
});
faqh[3].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[3].style.display = "none";
  } else {
    faqp[3].style.display = "block";
  }
  index++;
});
faqh[4].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[4].style.display = "none";
  } else {
    faqp[4].style.display = "block";
  }
  index++;
});
faqh[5].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[5].style.display = "none";
  } else {
    faqp[5].style.display = "block";
  }
  index++;
});
faqh[6].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[6].style.display = "none";
  } else {
    faqp[6].style.display = "block";
  }
  index++;
});
faqh[7].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[7].style.display = "none";
  } else {
    faqp[7].style.display = "block";
  }
  index++;
});faqh[8].addEventListener("click", () => {
  if (index % 2 === 0) {
    faqp[8].style.display = "none";
  } else {
    faqp[8].style.display = "block";
  }
  index++;
});
