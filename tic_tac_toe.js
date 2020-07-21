const player1 = 'o';
const player2 = 'x';

var curPlay = player1;
var gameTable = [0,1,2,3,4,5,6,7,8];
const winCon = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
function checkWin() {
    let tmpArray = [];
    for (let i = 0; i<gameTable.length; i++) {
        if (curPlay == gameTable[i]) {
            tmpArray.push(i);
        }
    }
    
    let winYoung = false;
    for (const [index, win] of winCon.entries()) {
        let mycheck = true;
        win.forEach(innerWin => {
            if (tmpArray.indexOf(innerWin) > -1){
                mycheck = mycheck && true;

            }else {
                mycheck = mycheck && false;
            }
        });
        if (mycheck) {
            winYoung = true;
            break;
        }
    }
    return winYoung;
}
function endGame() {
    $('#msg').html(curPlay + ' win !!!');
    
}

function turn(btn) {
    gameTable[btn.id] = curPlay;
    btn.src = 'image/' + curPlay + '.jpg';
    btn.disabled = true;

    let gameStatus = checkWin();
    if (gameStatus) endGame();

    if (curPlay == player1) {
        curPlay = player2;
    } else {
        curPlay = player1;
    }
}
$('#0').click(function (e) {
    e.preventDefault();
    turn(this); 
});

$('#1').click(function (e) {
    e.preventDefault();
    turn(this);
});

$('#2').click(function (e) {
    e.preventDefault();
    turn(this);
});

$('#3').click(function (e) {
    e.preventDefault();
    turn(this);
});

$('#4').click(function (e) {
    e.preventDefault();
    turn(this);
});

$('#5').click(function (e) {
    e.preventDefault();
    turn(this);
});

$('#6').click(function (e) {
    e.preventDefault();
    turn(this);
});

$('#7').click(function (e) {
    e.preventDefault();
    turn(this);
});

$('#8').click(function (e) {
    e.preventDefault();
    turn(this);
});

