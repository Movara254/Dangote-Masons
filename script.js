document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const toggleIcon = item.querySelector('.toggle-icon');

    item.addEventListener('click', () => {
      const isActive = item.classList.toggle('active');

      // Close other FAQ items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });
    });
  });
});
<script>
const toggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('header nav ul');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
</script>
