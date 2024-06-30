var emptySquare = "123456789";
var playerSquares = "";
var pcSquares = "";

function getSquare(id) {
    return document.getElementById(`square${id}`);
}

function changeBackground(square) {
    var square = getSquare(square);
    square.style.backgroundColor = "lightgreen"
}

function validRow(squares, s1, s2, s3) {
    if (squares.includes(s1) && squares.includes(s2) && squares.includes(s3)) {
        changeBackground(s1);
        changeBackground(s2);
        changeBackground(s3);
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
        playerSquare.removeAttribute("onclick")
        validWinner(playerSquares)
        if (validWinner(playerSquares)) {
            emptySquare = "";
            window.setTimeout(function () {
                alertMessage("Você Ganhou!");
            }, 500);
        } else {
            emptySquare = emptySquare.replace(playerNumber, "");
            if (emptySquare.length == 0) {
                window.setTimeout(function () {
                    alertMessage("Ninguém ganhou.");
                }, 500);
            }
        }
    } if (emptySquare.length != 0) {
        do {
            pcNumber = parseInt(Math.random() * 9 + 1);
        } while (!emptySquare.includes(pcNumber));
        var pcSquare = getSquare(pcNumber);
        pcSquare.innerHTML = '<img class="gameIcon" src="./images/x.png">'
        pcSquares += pcNumber;
        pcSquare.removeAttribute("onclick")
        if (validWinner(pcSquares)) {
            emptySquare = "";
            window.setTimeout(function () {
                alertMessage("O PC ganhou!");
            }, 500);
        } else {
            emptySquare = emptySquare.replace(pcNumber, "");
        }

    }
}

function alertMessage(message) {
    alert(`${message}`);
    document.getElementById("row").style.display = "none";
    document.getElementById("game").innerHTML = "<a href='index.html'><button>JOGAR NOVAMENTE</button></a>";

}