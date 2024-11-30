window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition   
   >= 100) { // Adjust the threshold as needed
      header.style.backgroundColor = 'white';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });