
let buttonSizeBoard = document.querySelector('#generate-board');
let pixelBoard = document.querySelector('#pixel-board')
let lineBoard = document.querySelectorAll('.line');
let color = document.querySelectorAll('.color');
let colorPallet = document.querySelector('#color-palette')
let pixels = document.querySelectorAll('.pixel');
let buttonClear = document.querySelector('#clear-board');
let colorSelect = "";





includeLine = () => {
    let inputSizeBoard = document.querySelector('#board-size');
    let divs = document.querySelectorAll('#pixel-board div');
    let pixels = document.querySelectorAll('.pixel');

    if(inputSizeBoard.value === '') {
        alert('Board inválido!')
    }
    else if (inputSizeBoard.value < 5) {
        inputSizeBoard.value = 5
    } else if (inputSizeBoard.value > 50) {
        inputSizeBoard.value = 50
    }


    for (let i = 0; i < inputSizeBoard.value; i++) {
        let newLine = document.createElement('div')
        newLine.classList.add("line")
        pixelBoard.appendChild(newLine)

        for (let index = 0; index < inputSizeBoard.value; index++) {
            let newCell = document.createElement('div');
            newCell.classList.add('pixel');
            newLine.appendChild(newCell);
        }
    }

    for (let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', function () {
            pixels[i].style.backgroundColor = colorSelect;
        })
    };


    selectedColor();
    
};

buttonSizeBoard.addEventListener('click', includeLine);

generateAleatoryColor = () => {
    let colors = '#';

    for (let i = 0; i < 4; i++) {
        let sub = Math.floor(Math.random() * 256).toString(16);
        colors += (sub.length == 1 ? '0' + sub : sub);
        color[i].style.backgroundColor = colors;
        color[0].style.backgroundColor = "#000";
    }
};
window.onload = generateAleatoryColor();


selectedColor = () => {
    let pixels = document.querySelectorAll('.pixel');
    
    
    for (let index = 0; index < color.length; index++) {
        color[0].style.backgroundColor = "#000"
        
        color[index].addEventListener('click', function () {
            
            for (let i = 0; i < color.length; i++) {
                if (color[i].classList.contains('selected')) {
                    color[i].classList.remove('selected')
                } else {
                    color[index].className = 'color selected'
                }
            }
            if(color[index] === color[color.length -1]) {
                color[index].classList.add("selected")
            }

            colorSelect = color[index].style.backgroundColor;
            console.log(color[index])
        });
    }
    

    
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', function () {
            if(color[0].classList.contains('selected')) {
                pixels[i].style.backgroundColor = '#000';
            } else
            pixels[i].style.backgroundColor = colorSelect;
        })
    };


};

selectedColor();


clearPixelBoard = () => {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = '#fff';
        console.log(pixels[i])
    };
};
buttonClear.addEventListener('click', clearPixelBoard)




