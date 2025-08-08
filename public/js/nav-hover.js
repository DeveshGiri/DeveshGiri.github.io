document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('nav.navigation');
  
    const navItems = [
      document.querySelector('.navigation-title'),
      ...document.querySelectorAll('.navigation-link')
    ].filter(item => item !== null);
  
    if (!navContainer || navItems.length === 0) {
      return;
    }
  
    // ** THE CORRECTED LOGIC IS HERE **
    const handleMouseOver = (event) => {
      // First, set ALL items to be dim.
      navItems.forEach(item => {
        item.style.opacity = '0.5';
      });
  
      // Then, immediately set the item being hovered to be fully opaque.
      event.target.style.opacity = '1';
    };
  
    // This function remains the same.
    const handleMouseOut = () => {
      navItems.forEach(item => {
        item.style.opacity = '1';
      });
    };
  
    // The event listeners remain the same.
    navItems.forEach(item => {
      item.addEventListener('mouseover', handleMouseOver);
    });
  
    navContainer.addEventListener('mouseleave', handleMouseOut);
  });