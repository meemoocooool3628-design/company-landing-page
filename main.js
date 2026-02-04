


const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

document.querySelectorAll('nav .nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    // لو على الموبايل، اقفل القائمة
    navLinks.classList.remove('active');
  });
});

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


window.scrollTo(0, 0);




const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();

  // Basic validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill all fields!";
    return;
  }

  // Success message (Temporary, بدون Backend)
  formMsg.style.color = "green";
  formMsg.textContent = "Message sent successfully!";

  // Reset form
  contactForm.reset();
});




window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 50){
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});



