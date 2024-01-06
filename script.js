document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    buttons.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const buttonValue = event.target.textContent;
            handleButtonClick(buttonValue);
        }
    });

    function handleButtonClick(value) {
        if (value === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else if (value === 'C') {
            display.textContent = '';
        } else {
            display.textContent += value;
        }
    }
});
