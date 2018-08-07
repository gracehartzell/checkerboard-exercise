document.addEventListener("DOMContentLoaded",function() {
    
    for (let i = 0; i < 81; i++) {
        const squares = document.createElement('div');
        squares.setAttribute('class','squarePattern')
        document.body.appendChild(squares); 
        squares.style.width = '11.1%';
        squares.style.paddingBottom = '11.1%';
        squares.style.cssFloat = 'left';
        
        (i % 2 ) ? squares.style.backgroundColor = "red" 
        : squares.style.backgroundColor = "darkslategrey";
    }
});

