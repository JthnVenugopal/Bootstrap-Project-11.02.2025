// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
  });
  
  // Add active class to nav items on scroll
  window.addEventListener('scroll', function() {
  let mainNavLinks = document.querySelectorAll(".navbar-nav .nav-link");
  let mainSections = document.querySelectorAll("section");
  
  let current = "";
  
  mainSections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  
  mainNavLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
  });