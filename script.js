<script>
document.addEventListener('DOMContentLoaded', () => {

  // ===== FAQ Toggle =====
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');

      // Close other FAQ items (optional)
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });
    });
  });

  // ===== Mobile Menu Toggle =====
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('nav ul');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

});
</script>
