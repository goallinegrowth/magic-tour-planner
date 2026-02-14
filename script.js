// Magic Tour Planner - Interactive JavaScript

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all other FAQs
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('active');
        }
    });
});

// Form Type Selection - Show/Hide Fields
const tripTypeRadios = document.querySelectorAll('input[name="tripType"]');
const teamFields = document.getElementById('team-fields');
const familyFields = document.getElementById('family-fields');

tripTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'equipo') {
            teamFields.classList.remove('hidden');
            familyFields.classList.add('hidden');
            
            // Make team fields required
            teamFields.querySelectorAll('input').forEach(input => {
                input.setAttribute('required', 'required');
            });
            // Remove required from family fields
            familyFields.querySelectorAll('input').forEach(input => {
                input.removeAttribute('required');
            });
        } else if (e.target.value === 'familia') {
            familyFields.classList.remove('hidden');
            teamFields.classList.add('hidden');
            
            // Make family fields required
            familyFields.querySelectorAll('input').forEach(input => {
                input.setAttribute('required', 'required');
            });
            // Remove required from team fields
            teamFields.querySelectorAll('input').forEach(input => {
                input.removeAttribute('required');
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Get selected parks (checkboxes)
    const selectedParks = Array.from(document.querySelectorAll('input[name="parks"]:checked'))
        .map(checkbox => checkbox.value);
    data.parks = selectedParks;
    
    // Add timestamp
    data.submittedAt = new Date().toISOString();
    
    console.log('Form Data:', data);
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';
    submitBtn.disabled = true;
    
    try {
        // TODO: Replace with your actual API endpoint
        // Example: await fetch('https://api.magictourplanner.com/leads', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        
        // Simulate API call (remove this in production)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success modal
        showSuccessModal();
        
        // Reset form
        contactForm.reset();
        teamFields.classList.add('hidden');
        familyFields.classList.add('hidden');
        
        // Optional: Send data to Google Sheets, Airtable, or your CRM
        // await sendToGoogleSheets(data);
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Hubo un error al enviar tu solicitud. Por favor intenta nuevamente o contáctanos directamente.');
    } finally {
        // Restore button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Show Success Modal
function showSuccessModal() {
    successModal.classList.remove('hidden');
    successModal.classList.add('animate-fade-in');
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        closeModal();
    }, 5000);
}

// Close Modal
function closeModal() {
    successModal.classList.add('hidden');
}

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeModal();
    }
});

// Navigation Active State on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-purple-600', 'font-bold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-purple-600', 'font-bold');
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.service-card, .process-step, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.text-2xl.font-bold');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.match(/\d+/)[0]);
                animateCounter(stat, number, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('.grid.grid-cols-3.gap-4.text-center');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Form Validation Enhancement
contactForm.querySelectorAll('input[required], textarea[required]').forEach(field => {
    field.addEventListener('invalid', (e) => {
        e.preventDefault();
        field.classList.add('border-red-500');
        
        // Add error message
        let errorMsg = field.nextElementSibling;
        if (!errorMsg || !errorMsg.classList.contains('error-text')) {
            errorMsg = document.createElement('p');
            errorMsg.classList.add('error-text', 'text-red-500', 'text-sm', 'mt-1');
            errorMsg.textContent = 'Este campo es requerido';
            field.parentNode.appendChild(errorMsg);
        }
    });
    
    field.addEventListener('input', () => {
        field.classList.remove('border-red-500');
        const errorMsg = field.parentNode.querySelector('.error-text');
        if (errorMsg) {
            errorMsg.remove();
        }
    });
});

// Phone Number Formatting
const phoneInput = document.querySelector('input[name="phone"]');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        
        e.target.value = value;
    });
}

// Add to Calendar Functionality (placeholder)
function addToCalendar() {
    // This would integrate with Google Calendar, Apple Calendar, etc.
    alert('Funcionalidad de calendario próximamente');
}

// WhatsApp Direct Link
function openWhatsApp() {
    const phone = '15551234567'; // Replace with actual number
    const message = encodeURIComponent('Hola! Me gustaría información sobre viajes a Disney.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Newsletter Signup (if you add this feature)
function subscribeNewsletter(email) {
    console.log('Newsletter subscription:', email);
    // TODO: Integrate with email service (Mailchimp, SendGrid, etc.)
}

// Track Form Interactions (for analytics)
function trackFormInteraction(action, label) {
    // Google Analytics or similar
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': 'Form',
            'event_label': label
        });
    }
}

// Track when fields are filled
contactForm.addEventListener('input', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        trackFormInteraction('field_completed', e.target.name);
    }
});

console.log('Magic Tour Planner - Website Loaded Successfully! ✨');
