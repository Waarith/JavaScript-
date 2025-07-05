// SUBMISSION OF DATA 

// let username;

// const structure = () =>{
//     document.getElementById("mybtn")
//     username = document.getElementById("mytext").value;
//     document.getElementById("connect").textContent = ` I am ${username}`
    
// };


// TYPE CONVERISON OF ( STRING, NUMBER, BOOLEAN )

// let age = prompt('What is your age');
// age = Number(age);
// line 16 is only neccessary when you aren't writing line 18 as age ++;
// age += 1;

// console.log(age, typeof age)

const pi = 3;
let radius;
let circumference;

// radius = prompt("what is the radius of a circle")
// circumference = 2 * pi * radius
// console.log(circumference);

const calculation = () => {
    document.getElementById("mysubmit")
    radius = document.getElementById("myinput").value 
    circumference = 2 * pi * radius 
    document.getElementById("myh3").textContent = circumference + "cm"

};
