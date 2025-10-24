//task0
alert("Hello, JavaScript World!")


console.log("Aiya Zhakupova SE-2439")

//task1
let fname = "Aiya "
let sname = "Zhakupova se-"
let group = 2439
let student = true

console.log(fname + sname + group + student)
let born = 2007
let current = 2025

console.log(current - born + "y.o")

//task2
function changeText() {
    document.getElementById("text").textContent = "Text was changed after you clicked the button!";
}

//task3
function changeFont() {
    document.getElementById("block").style.fontSize = "30px"
}

function changeBG() {
    document.getElementById("block").style.backgroundColor = "darkred";
}

//task4
function addItem() {
    let li = document.createElement("li");
    li.textContent = "New Item";
    document.getElementById("list").appendChild(li);
}

function removeItem() {
    let list = document.getElementById("list");
    if (list.lastChild) list.removeChild(list.lastChild);
}

//task5
let box = document.getElementById("box");


box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "aqua";
});
box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "red";
});



//task6
let userInput = document.getElementById("userInput");
let display = document.getElementById("display");

userInput.addEventListener("keyup", function () {
    display.textContent = userInput.value;
});


