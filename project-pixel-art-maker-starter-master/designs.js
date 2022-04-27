// Select color input
// Select size input

const form = document.querySelector("#sizePicker");
const table = document.querySelector("#pixelCanvas");
const inputHeight = document.querySelector("#inputHeight");
const inputWidth = document.querySelector("#inputWidth");
const colorPicker = document.querySelector("#colorPicker");

// When user click submit button, makeGrid() is been called.
form.addEventListener("submit", (event)=>{
  // prevents unwanted default value
  event.preventDefault();
  makeGrid();
})

const makeGrid =()=>{
// The line clears the table
  table.innerHTML = " ";

  for(let row = 0; row < inputWidth.value; row++){
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow)

    for (let col = 0; col < inputHeight.value; col++){
      let colum = document.createElement("td");
      tableRow.appendChild(colum)
    }
  }
}

//color the cells
table.addEventListener("click", (event)=>{
  if (event.target.nodeName=== "TD"){
    event.target.style.backgroundColor = colorPicker.value;}})