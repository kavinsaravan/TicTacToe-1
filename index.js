var isX = true;
var turn = document.getElementById("turn");

turn.textContent = "X";

function checkColumn(column) {
  var c = "";  
  
  for (i = 0; i <= 2; i++) {
    var idCheck = i + column
    //console.log("ID IS: " + i + "2");
    var obj = document.getElementById(idCheck);
    //console.log("cell for id " + idCheck + " contains " +  
      c = c + obj.textContent
  
  }
  
var winner = document.getElementById("winner");
var result = document.getElementById("result");
// 1. like winner get the element "result" and put in a variable called result
  if (c == "XXX") {
    console.log("X won!")
    winner.textContent = "X"    
    // 2. here you make result element visible
    result.style.display = "block"
  } else if (c == "OOO") {
    console.log("O won!")
    winner.textContent = "O"
    result.style.display = "block"

  } else {
    console.log("No one won!")
  }  
}

function checkRow(row) { 
  var d = "";  
  
  for (i = 0; i <= 2; i++) {
    var idCheck = row + i
    //console.log("ID IS: " + i + "2");
    var obj = document.getElementById(idCheck);
    //console.log("cell for id " + idCheck + " contains " + obj.textContent )
      d = d + obj.textContent
  
  }

var winner = document.getElementById("winner");
var result = document.getElementById("result");
// 1. like winner get the element "result" and put in a variable called result
  if (d == "XXX") {
    console.log("X won!")
    winner.textContent = "X"    
    // 2. here you make result element visible
    result.style.display = "block"
  } else if (d == "OOO") {
    console.log("O won!")
    winner.textContent = "O"
    result.style.display = "block"

  } else {
    console.log("No one won!")
  }
}  

function checkLeftDiagonal() { 
    var f = "";  
  
    for (i = 0; i <= 2; i++) {
        var idCheck = i.toString() + i.toString()
        console.log("***** " + idCheck)
        //console.log("ID IS: " + i + "2");
        var obj = document.getElementById(idCheck);
        //console.log("cell for id " + idCheck + " contains " + obj.textContent )
        f = f + obj.textContent
    }

    var winner = document.getElementById("winner");
    var result = document.getElementById("result");
    // 1. like winner get the element "result" and put in a variable called result
    if (f == "XXX") {
        console.log("X won!")
        winner.textContent = "X"    
        // 2. here you make result element visible
        result.style.display = "block"
    } else if (f == "OOO") {
        console.log("O won!")
        winner.textContent = "O"
        result.style.display = "block"
    } else {
        console.log("No one won!")
    }
}  

function markX(id) {
  
  var cell = document.getElementById(id);
  
  if (cell.textContent != "") {
    return;
  }
  cell.textContent = (isX) ? "X" : "O";
  isX = !isX;
  
  (isX) ?  turn.textContent = "X" : turn.textContent = "0";
  //console.log("NOW IT IS: " + turn.textContent);  
  
  checkColumn("0");
  checkColumn("1");
  checkColumn("2");

  checkRow("0");
  checkRow("1");
  checkRow("2");

  checkLeftDiagonal();

}