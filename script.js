document.addEventListener('DOMContentLoaded', () => {

    const datetimeContainer = document.getElementById('datetime-container');
    if (datetimeContainer) {
        function updateDateTime() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            datetimeContainer.textContent = now.toLocaleString('ru-RU', options); // Используем 'ru-RU' или 'en-US'
        }
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }

    const colorChangerBtn = document.getElementById('color-changer-btn');
    if (colorChangerBtn) {
        const colors = ['#e8ecef', '#f0f8ff', '#faebd7', '#f5f5dc', '#fffacd'];
        let currentColorIndex = 0;
        colorChangerBtn.addEventListener('click', () => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[currentColorIndex];
        });
    }


    const readMoreBtn = document.getElementById('read-more-btn');
    const descMore = document.getElementById('product-desc-more');
    const descShort = document.getElementById('product-desc-short');

    if (readMoreBtn && descMore && descShort) {
        readMoreBtn.addEventListener('click', () => {
            if (descMore.style.display === 'none') {
                descMore.style.display = 'inline';
                readMoreBtn.textContent = 'Скрыть';
                descShort.style.display = 'none'; // Скрываем короткую
            } else {
                descMore.style.display = 'none'; // Скрываем
                readMoreBtn.textContent = 'Читать далее';
                descShort.style.display = 'inline'; // Показываем короткую
            }
        });
    }


    const faqData = [
        {
            question: "What are the delivery times?",
            answer: "Standard delivery takes 3-5 business days. Express delivery is available and takes 1-2 business days within Almaty."
        },
        {
            question: "Is it possible to return the product?",
            answer: "Yes, you can return an unopened product within 14 days of purchase. Please check our return policy for more details."
        },
        {
            question: "Are the perfumes original?",
            answer: "Absolutely. We are an authorized retailer and guarantee that all our products are 100% original."
        }
    ];

    const faqContainer = document.getElementById('faq-accordion-container');
    if (faqContainer) {
        // Используем .map (функция высшего порядка) для создания HTML
        const faqHtml = faqData.map(item => {
            return `
                <div class="accordion-item">
                    <button class="accordion-header">${item.question}</button>
                    <div class="accordion-content">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `;
        }).join('');


        faqContainer.innerHTML = faqHtml;


        const accordionHeaders = faqContainer.querySelectorAll('.accordion-header');
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
    }


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

    document.addEventListener('keydown', (event) => {

        if (popupContainer && popupContainer.classList.contains('show')) {
            switch (event.key) {
                case 'Escape':

                    popupContainer.classList.remove('show');
                    break;

            }
        }
    });


    try {
        const buySound = new Audio('sound/buttonsound.mp3');
        const buyButtons = document.querySelectorAll('.buy-button');
        buyButtons.forEach(button => {
            button.addEventListener('click', () => {
                buySound.currentTime = 0;
                buySound.play().catch(e => console.error("Ошибка воспроизведения звука:", e));

                alert('Добавлено в корзину!');
            });
        });
    } catch (e) {
        console.error("Не удалось загрузить аудиофайл. Убедись, что путь правильный.", e);
    }

});