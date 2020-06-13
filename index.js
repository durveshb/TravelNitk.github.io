document.getElementById("ham").addEventListener("click",loadham);

function loadham(e){
  var olddis = document.getElementById("ham-content").style.display;

  var newdis = (olddis == "flex")?"none":"flex";


  document.getElementById("ham-content").style.display = newdis;
  console.log(olddis);
  console.log(newdis);
}