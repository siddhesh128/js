let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            try {
                screen.value = eval(screenValue);
            } catch (e) {
                alert('Invalid input');
                screenValue = "";
                screen.value = screenValue;
            }
        } else if (buttonText == 'Del') {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}