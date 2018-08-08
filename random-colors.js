// changed the HTML file JUST to add this file 

document.addEventListener("DOMContentLoaded",function() {
   
    // Random Color Generator
    function getRandomColor() {
        let rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
      return rgb;
    }

    // Slight variance to previous for loop
    for(let i = 0; i < 81; i++) {
        
        let generator = document.createElement('div');
            generator.style.backgroundColor = getRandomColor();
            generator.style.width = '11.1%' ;
            generator.style.float = 'left';
            generator.style.paddingBottom = '11.1%';
        
            document.body.append(generator)
    }
});



/* THOUGHTS: 
1. Can keep pretty much all of the same code except for the if/else 
2. Do a random RGB color using Math.floor(Math.random). Multiply by 256 because RGB uses 256 (0 to 255) steps for each color (256 points of data = amount inherent in 8-bit data)
3. Make the random color generator a function in order to reuse it for each tile. 
4. Apply the function to each tile (where the prior for loop comes into play).
5. I know this isn't the prettiest that it probably could be, but that's the best I can do right now. ~~~Future refactor potential~~~
*/