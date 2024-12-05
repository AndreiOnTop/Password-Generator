const lengthSlider = document.querySelector('.slider input');
checkboxes = document.querySelectorAll('.checkbox-container .input-checkboxes input')
generateBtn = document.querySelector('.container .gen-btn button');
inputBox = document.querySelector('.container .input-box input');
copyBtn = document.querySelector('.container .input-box i');

const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890',
    symbols: '#@!$%&'
}

const copyText = () => {
    navigator.clipboard.writeText(inputBox.value);
    copyBtn.innerText = 'copied!';

    setTimeout(() => {
        copyBtn.innerText = '';
    }, 1500);
};

const generatePassword = () => {
    let staticPassword = '',
    randomPassword = '',
    passLength = lengthSlider.value;

    checkboxes.forEach(checkbox => {
        if(checkbox.checked) {
            staticPassword += characters[checkbox.id];
        }  
    });

    for (let i = 0; i < passLength; i++) {
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)]
        
    }

    inputBox.value = randomPassword
};

const updateSlider = () => {
    document.querySelector('.slider .text .slider-number').innerText = lengthSlider.value
};
updateSlider();

lengthSlider.addEventListener('input', updateSlider);
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyText);