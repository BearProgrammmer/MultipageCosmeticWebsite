  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const menu = document.querySelector("nav .container ul");


// Open sidebar
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

// Close sidebar
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
})


// Change active to clicked
const navItems = document.querySelectorAll('nav ul li');


// Remove active class
const removeActiveClass = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

// Active class clicked
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    removeActiveClass();
    link.classList.add('active');
  })
})

// Show and hide faqs
const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // Menu Icon
    const icon = faq.querySelector('.icon i');
    if(icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
  })
})

window.addEventListener("scroll", () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})