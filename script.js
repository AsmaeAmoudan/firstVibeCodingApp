// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnButton = mobileMenuBtn.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnButton && navMenu.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
  
  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // ============================================
  // FADE IN ANIMATION
  // ============================================
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const checkFade = function() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = elementTop < window.innerHeight && elementBottom > 0;
      
      if (isVisible) {
        element.classList.add('visible');
      }
    });
  };
  
  if (fadeElements.length > 0) {
    window.addEventListener('scroll', checkFade);
    window.addEventListener('resize', checkFade);
    // Check on page load
    checkFade();
  }
  
  // ============================================
  // FORM VALIDATION
  // ============================================
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Simple validation
      let isValid = true;
      const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
      
      formInputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#dc3545';
        } else {
          input.style.borderColor = '';
        }
      });
      
      // Email validation
      const emailInput = contactForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
          isValid = false;
          emailInput.style.borderColor = '#dc3545';
        }
      }
      
      if (isValid) {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.backgroundColor = '#d4edda';
        successMessage.style.color = '#155724';
        successMessage.style.padding = '1rem';
        successMessage.style.borderRadius = '0.5rem';
        successMessage.style.marginTop = '1rem';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        
        contactForm.appendChild(successMessage);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(function() {
          successMessage.remove();
        }, 5000);
      }
    });
  }
  
  // ============================================
  // SUBSCRIPTION FORM
  // ============================================
  const subscriptionForm = document.getElementById('subscriptionForm');
  
  if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Simple validation
      const nameInput = subscriptionForm.querySelector('input[name="name"]');
      const emailInput = subscriptionForm.querySelector('input[name="email"]');
      let isValid = true;
      
      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.style.borderColor = '#dc3545';
      } else {
        nameInput.style.borderColor = '';
      }
      
      if (!emailInput.value.trim()) {
        isValid = false;
        emailInput.style.borderColor = '#dc3545';
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
          isValid = false;
          emailInput.style.borderColor = '#dc3545';
        } else {
          emailInput.style.borderColor = '';
        }
      }
      
      if (isValid) {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.backgroundColor = '#d4edda';
        successMessage.style.color = '#155724';
        successMessage.style.padding = '1rem';
        successMessage.style.borderRadius = '0.5rem';
        successMessage.style.marginTop = '1rem';
        successMessage.textContent = 'Thank you for subscribing! You will receive our updates soon.';
        
        subscriptionForm.appendChild(successMessage);
        
        // Reset form
        subscriptionForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(function() {
          successMessage.remove();
        }, 5000);
      }
    });
  }
  
  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});