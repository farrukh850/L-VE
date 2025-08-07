document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the signup/login page
    if (document.getElementById('signupTab') && document.getElementById('loginTab')) {
        // Form switching functionality
        const signupTab = document.getElementById('signupTab');
        const loginTab = document.getElementById('loginTab');
        
        // Get form elements
        const signupForm = document.getElementById('signupForm');
        const loginForm = document.getElementById('loginForm');
        
        // Add event listeners to tabs
        signupTab.addEventListener('click', function() {
            // Update tab styles
            signupTab.classList.remove('text-[#6A6A6A]');
            signupTab.classList.add('text-black');
            loginTab.classList.remove('text-black');
            loginTab.classList.add('text-[#6A6A6A]');
            
            // Show signup form with transition, hide login form
            loginForm.style.opacity = '0';
            setTimeout(() => {
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
                signupForm.classList.add('flex', 'flex-col');
                
                // Trigger reflow
                void signupForm.offsetWidth;
                
                // Fade in signup form
                signupForm.style.opacity = '1';
            }, 200);
        });
        
        loginTab.addEventListener('click', function() {
            // Update tab styles
            loginTab.classList.remove('text-[#6A6A6A]');
            loginTab.classList.add('text-black');
            signupTab.classList.remove('text-black');
            signupTab.classList.add('text-[#6A6A6A]');
            
            // Show login form with transition, hide signup form
            signupForm.style.opacity = '0';
            setTimeout(() => {
                signupForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
                loginForm.classList.add('flex', 'flex-col');
                
                // Trigger reflow
                void loginForm.offsetWidth;
                
                // Fade in login form
                loginForm.style.opacity = '1';
            }, 200);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all verification code inputs
    const codeInputs = document.querySelectorAll('input[maxlength="1"]');
    
    // Only run verification code logic if inputs exist
    if (codeInputs.length > 0) {
        // Add input event listeners to each input
        codeInputs.forEach((input, index) => {
            // Only allow numbers
            input.addEventListener('input', function(e) {
                // Replace any non-numeric value with empty string
                this.value = this.value.replace(/[^0-9]/g, '');
                
                // If input has a value and there's a next input, focus on it
                if (this.value !== '' && index < codeInputs.length - 1) {
                    codeInputs[index + 1].focus();
                }
            });
            
            // Handle backspace to go to previous input
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && this.value === '' && index > 0) {
                    codeInputs[index - 1].focus();
                }
            });
        });
        
        // Focus first input on page load
        codeInputs[0].focus();
    }
    
    // Event overlay toggle functionality
    const eventItems = document.querySelectorAll('.event-item');
    const eventDetailsOverlay = document.getElementById('eventDetailsOverlay');
    const eventDescriptionOverlay = document.getElementById('eventDescriptionOverlay');
    
    // Only run overlay logic if elements exist
    if (eventItems.length > 0 && eventDetailsOverlay && eventDescriptionOverlay) {
        // Track overlay visibility state
        let overlaysVisible = false;
        
        // Add click event listeners to each event item
        eventItems.forEach(function(item) {
            item.addEventListener('click', function() {
                if (overlaysVisible) {
                    // Start fade out
                    eventDetailsOverlay.classList.remove('opacity-100');
                    eventDetailsOverlay.classList.add('opacity-0');
                    eventDescriptionOverlay.classList.remove('opacity-100');
                    eventDescriptionOverlay.classList.add('opacity-0');
                    
                    // Hide overlays after fade out completes
                    setTimeout(function() {
                        eventDetailsOverlay.classList.add('hidden');
                        eventDescriptionOverlay.classList.add('hidden');
                    }, 100);
                    
                    overlaysVisible = false;
                } else {
                    // Show overlays first
                    eventDetailsOverlay.classList.remove('hidden');
                    eventDescriptionOverlay.classList.remove('hidden');
                    
                    // Start fade in after a brief delay to ensure display is applied
                    setTimeout(function() {
                        eventDetailsOverlay.classList.remove('opacity-0');
                        eventDetailsOverlay.classList.add('opacity-100');
                        eventDescriptionOverlay.classList.remove('opacity-0');
                        eventDescriptionOverlay.classList.add('opacity-100');
                    }, 10);
                    
                    overlaysVisible = true;
                }
            });
        });
    }
});