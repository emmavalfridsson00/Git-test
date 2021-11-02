/*Button changes colour on click*/
var myButton=document.getElementById("button");

myButton.addEventListener("click", function(){
  this.classList.toggle("blue-background")
});
