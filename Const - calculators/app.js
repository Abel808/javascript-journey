
const PI = 3.14;


document.getElementById('submit').onclick = function () {
   let r = document.getElementById('pi').value;
   let cir = r *PI*2;
   document.getElementById('ans').textContent=cir+"cm";
}


document.getElementById('btn').onclick = function(){
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;

    const vol = length*width*height;

    document.getElementById('volans').textContent=vol+ "liters";

document.getElementById('length').value= '';
document.getElementById('width').value = '';
document.getElementById('height').value = '';
}