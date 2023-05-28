let currPlayer = "X";
let cnt = 0;
let arr = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (arr[i][0] != null && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
      document.write("<hr><h1>Winner is " , currPlayer) ; 
	  cnt = 0;
    }
	if (arr[0][i] != null && arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) {
		document.write("<hr><h1>Winner is " + currPlayer) ;    
		cnt = 0;
	}
  }
  if (arr[0][0] != null && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
    document.write("<hr><h1>Winner is " , currPlayer) ;   
	cnt = 0;
  }
  if (arr[0][3] != null && arr[0][3] == arr[2][2] && arr[2][2] == arr[3][1]) {
    document.write("<hr><h1>Winner is " , currPlayer) ;   
	cnt = 0;
  }
  //  For Draw!!
	if(cnt == 9){
		document.write( "<hr><h1> The Game is Draw!!! </h1>" );
	}
}

function handleClick(el) {
	
  const id = Number(el.id);
  if (arr[parseInt(id / 3)][id % 3] != null) {
    return;
  }
  cnt++;
  // Addressing Perticular index of 2D Matrix
  arr[parseInt(id / 3)][id % 3] = currPlayer;

  // For Output
  el.innerText = currPlayer;
  checkWinner();

  // Changing Player Chance After Each Iteration
  currPlayer = currPlayer == "X" ? "O" : "X";
}
