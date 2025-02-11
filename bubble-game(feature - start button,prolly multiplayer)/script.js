
function bubblies(){
   var crumble = "";
   for(var i = 1; i<=168; i++){
      var n = Math.floor(Math.random()*10);
      crumble += `<div id="bubble"><h3>${n}</h3></div>`;
   }

document.querySelector("#bottom").innerHTML = crumble;
}
var n = 0;
function hit(){
      n = Math.floor(Math.random()*10);
      document.querySelector("#hitval").textContent = n;
   }
function tick(){
   var timer = 60;
  var resourcemkc = setInterval(function(){
      if(timer > 0){
         
      timer--;
      document.querySelector("#timeval").textContent = timer;}
      else{
         clearInterval(resourcemkc);
         document.querySelector("#bottom").innerHTML = `<h1>game over</h1>`;
         document.querySelector("#hitval").textContent = `0`;
        

      }
   }, 1000);
}

var add = -5;
function addscore(){
   add += 5;
   document.querySelector("#scoreval").textContent = add;

}
document.querySelector("#bottom").addEventListener("click", function(det){
   var selectedbub = Number(det.target.textContent);
  if(n === selectedbub){
   addscore();
   bubblies();
   hit();
  
  }
})
document.getElementById("startval").addEventListener("click", function(set){
   tick();
   bubblies();
   hit();
})


addscore();



























