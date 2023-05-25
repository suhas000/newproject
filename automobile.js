
function fun1() {
  var avg=document.getElementById('avg').value;
  var fuel=document.getElementById('fuel').value;
  var distance=document.getElementById('distance').value;
  
  var out=document.getElementById('output1');
  
  var out=( parseInt(fuel) * parseInt(distance)) / parseInt(avg) ;
  
  document.getElementById('output1').innerHTML=out;
}
