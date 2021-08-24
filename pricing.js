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
