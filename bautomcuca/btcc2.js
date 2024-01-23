const label = document.getElementById('label')
const dice = document.querySelector('.dice');
const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');
const rollBtn1 = document.querySelector('.roll1');
const rollBtn2 = document.querySelector('.roll2');
const winloss = document.getElementById('winloss')

let totalSum = 0;

const rollDiceForDice = (diceElement, randomValue) => {
diceElement.style.animation = 'rolling 6s';

setTimeout(() => {
    if (randomValue == 1) {
        const x = randomValue;
        console.log(x);
        diceElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        totalSum += x;
    } else if (randomValue == 2) {
        const x = randomValue;
        console.log(x);
        diceElement.style.transform = 'rotateX(180deg) rotateY(0deg)';
        totalSum += x;
    } else if (randomValue == 3) {
        const x = randomValue;
        console.log(x);
        diceElement.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        totalSum += x;
    } else if (randomValue == 4) {
        const x = randomValue;
        console.log(x);
        diceElement.style.transform = 'rotateX(90deg) rotateY(0deg)';
        totalSum += x;
    } else if (randomValue == 6) {
        const x = randomValue;
        console.log(x);
        diceElement.style.transform = 'rotateX(0deg) rotateY(90deg)';
        totalSum += x;
    } else if (randomValue == 5) {
        const x = randomValue;
        console.log(x);
        diceElement.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        totalSum += x;
    }
    diceElement.style.animation = 'none';
    
}, 6050);
}

const rollDiceForDice1 = (diceElement, randomValue) => {
diceElement.style.animation = 'rolling 6s';

setTimeout(() => {
    if (randomValue == 1) {
        const y = randomValue;
        console.log(y);
        diceElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        totalSum += y;
    } else if (randomValue == 2) {
        const y = randomValue;
        console.log(y);
        diceElement.style.transform = 'rotateX(180deg) rotateY(0deg)';
        totalSum += y;
    } else if (randomValue == 3) {
        const y = randomValue;
        console.log(y);
        diceElement.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        totalSum += y;
    } else if (randomValue == 4) {
        const y = randomValue;
        console.log(y);
        diceElement.style.transform = 'rotateX(90deg) rotateY(0deg)';
        totalSum += y;
    } else if (randomValue == 6) {
        const y = randomValue;
        console.log(y);
        diceElement.style.transform = 'rotateX(0deg) rotateY(90deg)';
        totalSum += y;
    } else if (randomValue == 5) {
        const y = randomValue;
        console.log(y);
        diceElement.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        totalSum += y;
    }
    diceElement.style.animation = 'none';
    
}, 6050);
}


const rollDiceForDice2 = (diceElement, randomValue) => {
diceElement.style.animation = 'rolling 6s';

setTimeout(() => {
    if (randomValue == 1) {
        const z = randomValue;
        console.log(z);
        diceElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        totalSum += z;
    } else if (randomValue == 2) {
        const z = randomValue;
        console.log(z);
        diceElement.style.transform = 'rotateX(180deg) rotateY(0deg)';
        totalSum += z;
    } else if (randomValue == 3) {
        const z = randomValue;
        console.log(z);
        diceElement.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        totalSum += z;
    } else if (randomValue == 4) {
        const z = randomValue;
        console.log(z);
        diceElement.style.transform = 'rotateX(90deg) rotateY(0deg)';
        totalSum += z;
    } else if (randomValue == 6) {
        const z = randomValue;
        console.log(z);
        diceElement.style.transform = 'rotateX(0deg) rotateY(90deg)';
        totalSum += z;
    } else if (randomValue == 5) {
        const z = randomValue;
        console.log(z);
        diceElement.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        totalSum += z;
    }
    diceElement.style.animation = 'none';
    updateTotal();
    updateTotal2();
   
    
}, 6050);
}

const updateTotal = () => {
console.log('Total Sum:', totalSum);
if (totalSum > 10) {
    label.innerHTML = 'Tài';
    winloss.innerHTML = 'win';
   
} else {
  label.innerHTML = 'Xỉu' 
  winloss.innerHTML = 'loss';
}
}

const updateTotal2 = () => {
    console.log('Total Sum:', totalSum);
    if (totalSum > 10) {
        label.innerHTML = 'Tài';
        winloss.innerHTML = 'loss';
       
    } else {
      label.innerHTML = 'Xỉu' 
      winloss.innerHTML = 'win';
    }
    }


const randomDice1 = () => {
const random1 = Math.floor(Math.random() * 8);
if (random1 >= 1 && random1 <= 6) {
    rollDiceForDice1(dice1, random1);
} else {
    randomDice1();
}
}

const randomDice2 = () => {
const random2 = Math.floor(Math.random() * 8);
if (random2 >= 1 && random2 <= 6) {
    rollDiceForDice2(dice2, random2);
} else {
    randomDice2();
}
}


const randomDice = () => {
const random = Math.floor(Math.random() * 8);
if (random >= 1 && random <= 6) {
    rollDiceForDice(dice, random);
} else {
    randomDice();
}
}

rollBtn1.addEventListener('click', () => {
    totalSum = 0;
   
    randomDice();
    randomDice1();
    randomDice2();
    setTimeout(() => {
        updateTotal();
    }, 6050);
});

rollBtn2.addEventListener('click', () => {
    totalSum = 0;
    
    randomDice();
    randomDice1();
    randomDice2();
    setTimeout(() => {
        updateTotal2();
    }, 6050);
 });


