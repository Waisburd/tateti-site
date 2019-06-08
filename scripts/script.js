let winBoard = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let board = [0,0,0,0,0,0,0,0,0];
let whiteTurn = true;
let finished = false;

$(document).ready(function(){
    $('.square').click(function(event){
        let position = $(this);
        if(position.children().length == 0 && !finished){
            if(whiteTurn){
                position.append(white.imgTag);
                board[event.target.id] = white.id;
            }
            else{
                position.append(black.imgTag);
                board[event.target.id] = black.id;
            }
            checkBoard();
            whiteTurn = !whiteTurn;
        }
        
    });
});

let white = {
    name: 'blancas',
    imgTag: '<img src="resources/illuminati_white.png" alt="White" class="ficha">',
    id: 2
}

let black = {
    name: 'negras',
    imgTag: '<img src="resources/illuminati_black.png" alt="Black" class="ficha">',
    id: 1
}

let checkBoard = function(){
    for(let wb = 0; wb < winBoard.length; wb++){
        if(board[winBoard[wb][0]] != 0 && board[winBoard[wb][1]] != 0 && board[winBoard[wb][2]] != 0){
            if(board[winBoard[wb][0]] == board[winBoard[wb][1]] && board[winBoard[wb][1]] == board[winBoard[wb][2]]){
                finished = true;
                if(confirm('Partida ganada por ' + ((whiteTurn) ? white.name : black.name) + '.\nVolver a jugar?')){
                    resetBoard();
                }
                
            }
            else if(!board.some(b => b == 0)) {
                finished = true;
                if(confirm('Empate')){
                    resetBoard();
                }
                break;
            }
        }
    }
}

let resetBoard = function(){
    board = [0,0,0,0,0,0,0,0,0];
    won = false;
    whiteTurn = true;
    $('.square').empty();
}