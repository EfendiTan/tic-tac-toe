const gameBoard=(()=>{
  let gameBoardArray=[];
  gameBoardArray.length=9;
  let turn='o';
  for(let i=0;i<gameBoardArray.length;i++){
    const board = document.querySelector('.board');
    const createCell = document.createElement('div');
    board.appendChild(createCell);
    
    createCell.addEventListener('click',()=>{
      if(createCell.textContent===''){
        if(turn==='x'){
          turn='o';
        }else if(turn==='o'){
          turn='x';
        }
        createCell.textContent=turn;
        gameBoardArray[i]=turn;
        if(gameBoardArray[0]==='x'&&gameBoardArray[1]==='x'&&gameBoardArray[2]==='x'||
          gameBoardArray[3]==='x'&&gameBoardArray[4]==='x'&&gameBoardArray[5]==='x'||
          gameBoardArray[6]==='x'&&gameBoardArray[7]==='x'&&gameBoardArray[8]==='x'||
          gameBoardArray[0]==='x'&&gameBoardArray[3]==='x'&&gameBoardArray[6]==='x'||
          gameBoardArray[1]==='x'&&gameBoardArray[4]==='x'&&gameBoardArray[7]==='x'||
          gameBoardArray[2]==='x'&&gameBoardArray[5]==='x'&&gameBoardArray[8]==='x'||
          gameBoardArray[0]==='x'&&gameBoardArray[4]==='x'&&gameBoardArray[8]==='x'||
          gameBoardArray[2]==='x'&&gameBoardArray[4]==='x'&&gameBoardArray[6]==='x'
        ){
          console.log('x win');
          congratulate('x');
        }else if(gameBoardArray[0]==='o'&&gameBoardArray[1]==='o'&&gameBoardArray[2]==='o'||
          gameBoardArray[3]==='o'&&gameBoardArray[4]==='o'&&gameBoardArray[5]==='o'||
          gameBoardArray[6]==='o'&&gameBoardArray[7]==='o'&&gameBoardArray[8]==='o'||
          gameBoardArray[0]==='o'&&gameBoardArray[3]==='o'&&gameBoardArray[6]==='o'||
          gameBoardArray[1]==='o'&&gameBoardArray[4]==='o'&&gameBoardArray[7]==='o'||
          gameBoardArray[2]==='o'&&gameBoardArray[5]==='o'&&gameBoardArray[8]==='o'||
          gameBoardArray[0]==='o'&&gameBoardArray[4]==='o'&&gameBoardArray[8]==='o'||
          gameBoardArray[2]==='o'&&gameBoardArray[4]==='o'&&gameBoardArray[6]==='o'
        ){
          console.log('o win');
          congratulate('o');
        }
      }
    })
  }
  const info= document.querySelector('.info');
  const playAgainButton = document.querySelector('.playAgain');
  congratulate = (turn)=>{
      info.textContent=`Congrats! ${turn} win!`;
      playAgainButton.style.display='block';
    }
  reset = ()=>{
    gameBoardArray=[];
    turn='o';
    const gameBoardCell = document.querySelectorAll('.board div');
    for(let i=0;i<gameBoardCell.length;i++){
      gameBoardCell[i].textContent='';
    }
    info.textContent='';
  }
  return {reset}
})();

const playAgainButton = document.querySelector('.playAgain');
playAgainButton.addEventListener('click',playAgain)
function playAgain(){
  gameBoard.reset()
  playAgainButton.style.display='none';
}
