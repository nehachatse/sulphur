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
