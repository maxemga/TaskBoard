let createBoard= document.getElementById("createBoardHeading");
let createForm = document.getElementById("createForm");
let createBoardContainer = document.getElementById("createBoard");
let inputNameCreate = document.getElementById("createName");
let sumbitCreate = document.getElementById("buttonAdd");
let myBoards = document.getElementById("myBoards");
let createBlock = document.getElementById("createBlock");

let listBoards = document.getElementById("myBoardsContent");

// window.addEventListener("load", ShowElementsToWindow);
createBoardContainer.addEventListener("mouseover", ShowCreateForm)
createBoardContainer.addEventListener("mouseout", CloseCreateForm)
sumbitCreate.addEventListener("click", CreateBoard);
let id = document.getElementById("container");
id.addEventListener("mouseover", ShowСrosses);

let boards = [];
let user;


class Board {
    constructor (name) {
        this.name = name
    }
    CreateBoard() {
        return listBoards.innerHTML += `<div class="container" id="container">
                                           <p>${this.name}</p>
                                        </div>`
    }
}

function CreateBoard() {
    if (inputNameCreate.value != "") {
        user = new Board(inputNameCreate.value);
        user.CreateBoard(inputNameCreate.value);
        GetElementLocalStorage();
        AddElementLocalStorage();

        // boards = JSON.parse(localStorage.getItem("boards"));
        // if(boards == null) boards = [];
        // localStorage.setItem("board", JSON.stringify(user));
        // arrayBoards.push(user);
        // localStorage.setItem("boards", JSON.stringify(boards));
        // console.log(boards);

        // for (let i = 0; i < boards.length; i++) {
        //     listBoards.innerHTML += `<div class="container" id="container">
        //                                 <p>${boards[i].name}</p>
        //                             </div>`;
        // }
    }
}


function GetElementLocalStorage() {
    boards = JSON.parse(localStorage.getItem("boards"));
    if(boards == null) boards = [];
}

function AddElementLocalStorage() {
    localStorage.setItem("board", JSON.stringify(user));
    boards.push(user);
    localStorage.setItem("boards", JSON.stringify(boards));
    console.log(boards);

}



// function ShowElementsToWindow() {
//     boards = JSON.parse(localStorage.getItem("boards"));
//     for (let i = 0; i < boards.length; i++) {
//         listBoards.innerHTML += `<div class="container" id="container">
//                                     <p>${boards[i].name}</p>
//                                  </div>`;
//     }
// }

function ShowCreateForm() {
    createForm.classList.add("activeCreate");
}

function CloseCreateForm() {
    createForm.classList.remove("activeCreate");
}
function ShowСrosses() {
    document.getElementById("crosserContainer").classList.toggle("activeClose");
}

