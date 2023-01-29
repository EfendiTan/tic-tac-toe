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
          // console.log('x win');
          congratulate('x');
          cover.style.display='block';
        }else if(gameBoardArray[0]==='o'&&gameBoardArray[1]==='o'&&gameBoardArray[2]==='o'||
          gameBoardArray[3]==='o'&&gameBoardArray[4]==='o'&&gameBoardArray[5]==='o'||
          gameBoardArray[6]==='o'&&gameBoardArray[7]==='o'&&gameBoardArray[8]==='o'||
          gameBoardArray[0]==='o'&&gameBoardArray[3]==='o'&&gameBoardArray[6]==='o'||
          gameBoardArray[1]==='o'&&gameBoardArray[4]==='o'&&gameBoardArray[7]==='o'||
          gameBoardArray[2]==='o'&&gameBoardArray[5]==='o'&&gameBoardArray[8]==='o'||
          gameBoardArray[0]==='o'&&gameBoardArray[4]==='o'&&gameBoardArray[8]==='o'||
          gameBoardArray[2]==='o'&&gameBoardArray[4]==='o'&&gameBoardArray[6]==='o'
        ){
          // console.log('o win');
          congratulate('o');
          cover.style.display='block';
        }else if(gameBoardArray[0]!==undefined&&gameBoardArray[1]!==undefined&&gameBoardArray[2]!==undefined&&
        gameBoardArray[3]!==undefined&&gameBoardArray[4]!==undefined&&gameBoardArray[5]!==undefined&&
        gameBoardArray[6]!==undefined&&gameBoardArray[7]!==undefined&&gameBoardArray[8]!==undefined
        ){
          congratulate('draw');
          cover.style.display='block';
        }
      }
    }
    )
  }
  
  const info= document.querySelector('.info');
  const playAgainButton = document.querySelector('.playAgain');
  congratulate = (turn)=>{
    if(turn==='draw'){
      info.textContent=`It's ${turn}`
    }else{
      info.textContent=`Congrats! ${turn} win!`;
    }
    playAgainButton.textContent='Play Again';
    // playAgainButton.style.display='block';
  }
  reset = ()=>{
    gameBoardArray=[];
    turn='o';
    const gameBoardCell = document.querySelectorAll('.board div');
    for(let i=0;i<gameBoardCell.length;i++){
      gameBoardCell[i].textContent='';
    }
    info.textContent='';
    cover.style.display='none';
  }
  const cover = document.querySelector('.board .cover')
  return {reset}
})();

const playAgainButton = document.querySelector('.playAgain');
playAgainButton.addEventListener('click',playAgain)
function playAgain(){
  gameBoard.reset();
  playAgainButton.textContent='Reset';

  // playAgainButton.style.display='none';
}
