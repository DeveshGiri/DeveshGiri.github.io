// Wait until the DOM (your website) is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  
  // Find the HTML element for the animation
  const typedTextSpan = document.getElementById('typed-text');

  // Check if the element for the animation exists on the page
  if (typedTextSpan) {
    // If it exists, create a new Typed.js animation instance
    new Typed('#typed-text', {
      // An array of strings to type out
      strings: ['Physics', 'Philosophy', 'Poetry'],
      
      // Speed settings for typing and deleting
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      
      // Set loop to true to repeat the animation forever
      loop: true,
      
      // Settings for the blinking cursor
      showCursor: true,
      cursorChar: '|',
    });
  }
});