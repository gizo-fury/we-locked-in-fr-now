document.getElementById('gr').addEventListener("click", function(){
    document.body.style.backgroundColor = 'green';
})
document.getElementById('bl').addEventListener("click", function(){
    document.body.style.backgroundColor = 'blue';
})
document.getElementById('re').addEventListener("click", function(){
    document.body.style.backgroundColor = 'red';
})
document.getElementById('dm').addEventListener("click", function(){
    document.body.style.backgroundColor = '#414141';
})




document.getElementById('ra').addEventListener("click", 
    function (){
        let r =  Math.floor(Math.random()*360); 
        let g =  Math.floor(Math.random()*101); 
        let b =  Math.floor(Math.random()*101);
        let rgbcolor = `hsl(${r},${g}%,${b}%)`;
        document.body.style.backgroundColor = rgbcolor;
    
    }
)


