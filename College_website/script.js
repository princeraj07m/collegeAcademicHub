// Placeholder for Homepage functionality
console.log("Homepage loaded. Animations active!");





// Example: Adding a simple toggle to show/hide the announcement section
document.getElementById('announcement-toggle').addEventListener('click', function() {
    var announcementSection = document.querySelector('.announcement');
    if (announcementSection.style.display === 'none') {
      announcementSection.style.display = 'block';
    } else {
      announcementSection.style.display = 'none';
    }
  });
  




  // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
    // Function to trigger animations when elements come into view
    function animateOnScroll() {
      const elements = document.querySelectorAll('.animated');
      
      // Loop through all elements with the class 'animated'
      elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // Trigger animation when the element is in view
        if (position < windowHeight - 100) {
          element.classList.add('visible');  // Add 'visible' class to animate it
        } else {
          element.classList.remove('visible');  // Remove 'visible' class to reset
        }
      });
    }
  
    // Call the function on page load
    animateOnScroll();
  
    // Trigger animation on scroll
    window.addEventListener('scroll', function() {
      animateOnScroll();
    });
  
    // Additional Animation Triggers with setTimeout for delay effects
    setTimeout(function() {
      const welcomeMessage = document.querySelector('.section-title');
      welcomeMessage.classList.add('fadeIn');
    }, 500); // Trigger fade-in for the section title after 0.5 seconds
  
    setTimeout(function() {
      const eventList = document.querySelector('.upcoming-events ul');
      eventList.classList.add('slideUp');
    }, 1000); // Slide up for upcoming events after 1 second
  
    setTimeout(function() {
      const resourceCards = document.querySelectorAll('.resource-card');
      resourceCards.forEach(function(card, index) {
        setTimeout(function() {
          card.classList.add('scaleUp');
        }, index * 300); // Staggered animation for resource cards
      });
    }, 1500); // Start the staggered animation after 1.5 seconds
  });
  