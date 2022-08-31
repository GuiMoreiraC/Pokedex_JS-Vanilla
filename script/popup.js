const adcButton = document.querySelector('#btn-adc'),
    popup = document.querySelector('.popup-wrapper');

adcButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

popup.addEventListener('click', () => {
    const classNameOfClickElemente = event.target.classList[0],
        className = ['popup-close', 'popup-wrapper'],
        shouldClosePopup = className.some(
            className => className === classNameOfClickElemente
        );

    if (shouldClosePopup) {
        popup.style.display = 'none';
    }
});

// Multi select

const selectBtn = document.querySelector('.select-btn'),
    items = document.querySelectorAll('.item');

selectBtn.addEventListener('click', () => {
    selectBtn.classList.toggle('open');
});
