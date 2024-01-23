
const arr = [
   { id: 1, name: `<img src="rock1.jpg">` },
   { id: 2, name: '<img src="rock2.jpg">' },
   { id: 3, name: '<img src="rock3.jpg">' },
   { id: 4, name: '<img src="rock4.jpg">' },
   { id: 5, name: '<img src="rock5.jpg">' },
   { id: 6, name: '<img src="rock6.jpg">' },

];
const brr = [
   { id: 1, name: `<img src="rock1.jpg">` },
   { id: 2, name: '<img src="rock2.jpg">' },
   { id: 3, name: '<img src="rock3.jpg">' },
   { id: 4, name: '<img src="rock4.jpg">' },
   { id: 5, name: '<img src="rock5.jpg">' },
   { id: 6, name: '<img src="rock6.jpg">' },
];
const crr = [
   { id: 1, name: `<img src="rock1.jpg">` },
   { id: 2, name: '<img src="rock2.jpg">' },
   { id: 3, name: '<img src="rock3.jpg">' },
   { id: 4, name: '<img src="rock4.jpg">' },
   { id: 5, name: '<img src="rock5.jpg">' },
   { id: 6, name: '<img src="rock6.jpg">' },
];


const dicezetsu = document.getElementById('dice-retzu')
const diceimg = document.getElementById('dice-img')
const dice = document.getElementById('dice')
const diceh2 = document.getElementById('dice-h2')

let wincout = 0;
let losscout = 0;

function fullname1(){
   const randomindex1 = Math.floor(Math.random() * arr.length)
   const randomvalue1 = arr[randomindex1]

   const randomindex2 = Math.floor(Math.random() * arr.length) 
   const randomvalue2 = brr[randomindex2]

   const randomindex3 = Math.floor(Math.random() * arr.length) 
   const randomvalue3 = crr[randomindex3]

   if(randomvalue1.id + randomvalue2.id + randomvalue3.id > 10 ){
      dicezetsu.innerHTML = `${randomvalue1.id}; ${randomvalue2.id}; ${randomvalue3.id}: Tai`;
      diceimg.innerHTML = `${randomvalue1.name} ${randomvalue2.name} ${randomvalue3.name}`;
      dice.innerHTML = 'WIN';
      wincout++;
   }else{
      dicezetsu.innerHTML = `${randomvalue1.id}; ${randomvalue2.id}; ${randomvalue3.id}: XIU`
      diceimg.innerHTML = `${randomvalue1.name} ${randomvalue2.name} ${randomvalue3.name}`
      dice.innerHTML = 'LOSS';
      losscout++
   }

   updateScore();

   
}  


function fullname2(){
   const randomindex1 = Math.floor(Math.random() * arr.length)
   const randomvalue1 = arr[randomindex1]

   const randomindex2 = Math.floor(Math.random() * arr.length) 
   const randomvalue2 = brr[randomindex2]

   const randomindex3 = Math.floor(Math.random() * arr.length) 
   const randomvalue3 = crr[randomindex3]

   if(randomvalue1.id + randomvalue2.id + randomvalue3.id > 10 ){
      dicezetsu.innerHTML = `${randomvalue1.id}; ${randomvalue2.id}; ${randomvalue3.id}: Tai`;
      diceimg.innerHTML = `${randomvalue1.name} ${randomvalue2.name} ${randomvalue3.name}`;
      dice.innerHTML = 'LOSS'
      losscout++
   }else{
      dicezetsu.innerHTML = `${randomvalue1.id}; ${randomvalue2.id}; ${randomvalue3.id}: XIU`
      diceimg.innerHTML = `${randomvalue1.name} ${randomvalue2.name} ${randomvalue3.name}`
      dice.innerHTML = 'WIN'
      wincout++
   }
   updateScore();

}  




function reset() {
   wincout = 0;
   losscout = 0;
   updateScore();
   document.getElementById('input').value = "1000";
   dicezetsu.style.display = 'none';
   diceimg.style.display = 'none';
   dice.style.display = 'none';
}

function updateScore() {
   diceh2.innerHTML = `WIN: ${wincout} LOSS: ${losscout}`;
   dicezetsu.style.display = 'block';
   diceimg.style.display = 'block';
   dice.style.display = 'block';
}


function incrementValue() {
   var inputElement = document.getElementById('input');
   var currentValue = parseInt(inputElement.value);

   if (!isNaN(currentValue)) {
     var newValue = currentValue + 100;
     inputElement.value = newValue;
   }
 }

 function incrementValue2() {
   var inputElement = document.getElementById('input');
   var currentValue = parseInt(inputElement.value);

   if (!isNaN(currentValue)) {
     var newValue = currentValue + 200;
     inputElement.value = newValue;
   }
 }

