let container = document.querySelector(".container");
let h1        = document.querySelector("h1");
let symbol    = "O";

createBoxes();


let boxes = document.querySelectorAll(".box"); // all boxes

// lines boxes number
let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach(box => { // click insert symbol
    box.addEventListener("click",insertSymbol);
});

function insertSymbol() {
    this.removeEventListener("click",insertSymbol); // remove symbol
    if(symbol === "O"){
        symbol = "X";
    } else {
        symbol = "O";
    }
    this.innerHTML = symbol;
    checkWinner();
}


function checkWinner() {
    lines.forEach(line => {
        let box1 = boxes[line[0]];
        let box2 = boxes[line[1]];
        let box3 = boxes[line[2]];

        if(box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML && box1.innerHTML !== "") {
            box1.style.background = "red";
            box2.style.background = "red";
            box3.style.background = "red";
            stopGame();
        }
    });
}

function stopGame() { // remove event listener end game!
    boxes.forEach(box => {
        box.removeEventListener("click",insertSymbol);
    });
    h1.innerHTML = `WINNER ${symbol} <i class="fa-solid fa-trophy"></i>`;
}




function createBoxes() { // create Boxes
    let txt = ``;
    for(let x = 0; x < 9; x++) {
        txt += `<div class="box"></div>`;
    }
    container.innerHTML = txt;
}