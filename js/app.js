const app = () => {
    const sliders = document.querySelectorAll('.slider__body');
    const arrowBefore = document.querySelector('#before');
    const arrowAfter = document.querySelector('#after');

    let value;
    let time = 10;

    arrowBefore.addEventListener('click', () => changePosition(-1));
    arrowAfter.addEventListener('click', () => changePosition(1));

    const changePosition = (direction) => {
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
        value = currentElement
        value+= direction

        if(value == 0 || value == sliders.length+1) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__body--show');

        sliders[value-1].classList.toggle('slider__body--show');
        time = 10;
    }

    function changePositionTime(){
        time--;
        if(time == 0) {
            changePosition(1);
            time = 5;
        }
        setTimeout(changePositionTime, 1000);
    }
    
    changePositionTime();

 }

 app();