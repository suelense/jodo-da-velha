var emptySquare = "123456789";
var playerSquares = "";
var pcSquares = "";


function getSquare(id) {
    return document.getElementById(`square${id}`);
}

function validRow(squares, s1, s2, s3) {
    if (squares.includes(s1) && squares.includes(s2) && squares.includes(s3)) {
        return true;
    } else {
        return false
    }
}

function validWinner(squares) {
    if (validRow(squares, "1", "2", "3") ||
        validRow(squares, "4", "5", "6") ||
        validRow(squares, "7", "8", "9") ||
        validRow(squares, "1", "4", "7") ||
        validRow(squares, "2", "5", "8") ||
        validRow(squares, "3", "6", "9") ||
        validRow(squares, "1", "5", "9") ||
        validRow(squares, "3", "5", "7")) {
        return true;
    } else {
        return false;
    }
}

function play(playerNumber) {
    var playerSquare = getSquare(playerNumber);
    if (emptySquare.includes(playerNumber)) {
        playerSquare.innerHTML = '<img class="gameIcon" src="./images/o.png">'

        playerSquares += playerNumber;
        if (validWinner(playerSquares)) {
            emptySquare == "";
            console.log("Você ganhou")
        } else {
            emptySquare = emptySquare.replace(playerNumber, "");
        }
    } if (!emptySquare.length == 0) {
        pcNumber = "A"

        do {
            pcNumber = parseInt(Math.random() * 10);
            var pcSquare = getSquare(pcNumber);
            pcSquare.innerHTML = '<img class="gameIcon" src="./images/x.png">'

            pcSquares += pcNumber;
            console.log(pcSquares, "pcsq")
            if (validWinner(playerSquares)) {
                emptySquare == "";
                console.log("O PC ganhou")
                break;
            } else {
                emptySquare = emptySquare.replace(pcNumber, "");
            }
        } while (emptySquare.includes(pcNumber));
    }
    console.log(emptySquare)

}

