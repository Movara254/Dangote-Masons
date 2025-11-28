document.addEventListener('DOMContentLoaded', () => {

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Toggle active class
      item.classList.toggle('active');

      // Close other open FAQ items (optional)
      faqItems.forEach(other => {
        if(other !== item) {
          other.classList.remove('active');
        }
      });
    });
  });

});

const toggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});
