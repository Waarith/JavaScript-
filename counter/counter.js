const increaseBtn = document.getElementById("increaseBtn")
const resetBtn = document.getElementById("resetBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const countlabel = document.getElementById("counter")
let count = 0;

const firstcounter = () => {
    count ++;
    countlabel.textContent = count 
}

const secondcounter = () => {
    count = 0;
    countlabel.textContent = count 
}

const thirdcounter = () => {
    count --;
    countlabel.textContent = count 
}