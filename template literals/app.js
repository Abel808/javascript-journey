let name = 'able cajetan';

console.log(`my name is ${name}`);

 name = 'moosa'; 
 let age = 23;
 let working = true;
let intrests = ['games', 'sports', 'books']
let favs = {
    fruit:"kiwi", color:"black", number: 808
}

document.querySelector('.p1').textContent =`my name is ${name}`
document.getElementById('p2').textContent=`i am ${age} years old`
document.getElementById('p3').textContent= `it is ${working} that i am working`
document.getElementById('p4').textContent= `my intrests are ${intrests}`
document.getElementById('p5').textContent=`my favs are ${favs.color +" "+ favs.fruit }`


console.log(favs);