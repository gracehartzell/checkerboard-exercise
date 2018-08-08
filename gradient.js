
    for (let i = 72; i > 0; i--) {
        // SQUARE SKELETON
        const squares = document.createElement('div');
        squares.setAttribute('class', 'squareGradient');
        document.body.appendChild(squares);
            
        // styling
        squares.style.paddingBottom = '11.1%';
        squares.style.cssFloat = 'left';
        squares.style.width = '11.1%';

        
        (i % 2) ? squares.style.backgroundColor = `rgba(44,130,68,${.02 * i})` : squares.style.backgroundColor = "rgba(35, 100, 132, " + (.015 * i) + ")"
    };