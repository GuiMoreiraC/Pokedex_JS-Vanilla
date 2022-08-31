const adcButton = document.querySelector('#btn-adc'),
    popup = document.querySelector('.popup-wrapper');

adcButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

popup.addEventListener('click', () => {
    const classNameOfClickElemente = event.target.classList[0];
    const className = ['popup-close', 'popup-wrapper', 'popup-link'];
    const shouldClosePopup = className.some(
        className => className === classNameOfClickElemente
    );

    if (shouldClosePopup) {
        popup.style.display = 'none';
    }
});
