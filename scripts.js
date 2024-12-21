const listColors = ['skyblue', 'black'];

const buttonNext = document.querySelector('.nextc');

buttonNext.addEventListener('click', onNextColor);


let count = 0;

function onNextColor() {
    // alert(1);
    if (count === listColors.length - 1) {
        count = 0
    } else {
        count += 1

    }
    buttonNext.classList.toggle('moon')
    document.body.style.background = listColors[count];
}





  