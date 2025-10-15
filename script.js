document.addEventListener('DOMContentLoaded', () => {

    /**
     * Task 5: Display Current Date and Time
     */
    const datetimeContainer = document.getElementById('datetime-container');
    if (datetimeContainer) {
        function updateDateTime() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            datetimeContainer.textContent = now.toLocaleString('en-US', options);
        }
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }

    /**
     * Task 4: Change Background Color
     */
    const colorChangerBtn = document.getElementById('color-changer-btn');
    if (colorChangerBtn) {
        const colors = ['#e8ecef', '#f0f8ff', '#faebd7', '#f5f5dc', '#fffacd'];
        let currentColorIndex = 0;
        colorChangerBtn.addEventListener('click', () => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[currentColorIndex];
        });
    }

    /**
     * Task 2: Accordion for FAQs
     */
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            header.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    /**
     * Task 3: Popup Subscription Form
     */
    const popupContainer = document.getElementById('popup-form-container');
    const openPopupBtn = document.getElementById('open-popup-btn');
    const closePopupBtn = document.getElementById('close-popup-btn');

    if (popupContainer && openPopupBtn && closePopupBtn) {
        openPopupBtn.addEventListener('click', () => {
            popupContainer.classList.add('show');
        });
        closePopupBtn.addEventListener('click', () => {
            popupContainer.classList.remove('show');
        });
        popupContainer.addEventListener('click', (event) => {
            if (event.target === popupContainer) {
                popupContainer.classList.remove('show');
            }
        });
    }

    /**
     * Task 1: Form Validation
     */
    const subscriptionForm = document.getElementById('subscription-form');
    if (subscriptionForm) {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        subscriptionForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailValue = emailInput.value.trim();
            emailError.style.display = 'none';
            emailError.textContent = '';
            emailInput.classList.remove('is-invalid');
            let isValid = true;
            if (emailValue === '') {
                emailError.textContent = 'Email address is required.';
                isValid = false;
            } else if (!emailRegex.test(emailValue)) {
                emailError.textContent = 'Please enter a valid email address (e.g., example@domain.com).';
                isValid = false;
            }
            if (!isValid) {
                emailError.style.display = 'block';
                emailInput.classList.add('is-invalid');
            } else {
                alert('Thank you for subscribing!');
                if (popupContainer) popupContainer.classList.remove('show');
                subscriptionForm.reset();
            }
        });
    }
});