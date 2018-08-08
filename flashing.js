document.addEventListener('DOMContentLoaded', () => {
    window.setInterval(changeRandomColor, 1000);
});

const squares = document.getElementsByTagName('div')    

    function changeRandomColor() {
        for (const square of squares) {
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        };
    };

    for (let i = 0; i < 81; i++) {
        const generator = document.createElement('div');
        document.body.append(generator)
           
            generator.style.backgroundColor = changeRandomColor();
            generator.style.width = '11.1%' ;
            generator.style.float = 'left';
            generator.style.paddingBottom = '11.1%';
    };


// DO THIS LATER: TO REFACTOR: create object then assign into functions
// object.assign.generatorValues
