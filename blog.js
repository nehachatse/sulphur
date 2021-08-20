const navbar = document.querySelector('.header');
window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  console.log(lastPosition);
  if (lastPosition > 30 ) {
    navbar.classList.add('active');
  }
  else{
    navbar.classList.remove('active')
  }
})