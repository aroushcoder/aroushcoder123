
  window.addEventListener('scroll', function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0 );
  });
  /* When we scroll website down, white patch appears above*/