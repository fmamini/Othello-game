
var typeTd = 'black';
var pointStart1 = 20;
var pointStart2 = 20;

imgWhite = '<img src=' + 'https://raw.githubusercontent.com/pukie/othello-game/master/images/white.png' + ' class="gameCoin">';
imgBlack = '<img src=' + 'https://raw.githubusercontent.com/pukie/othello-game/master/images/black.png' + ' class="gameCoin">';

(function () {
    var table = "<table class='othelloBoard' >";
    for (var x = 1; x < 9; ++x) {
        table += '<tr>';     // ezafehkardan 8 satr
        for (var y = 1; y < 9; ++y) {
            table += '<td class=othelloSquare id ='+ x + y + '>' +  '</td>';     // 8 sotun baraye har satr
        }
    }
    table += " </table>";
    $('#othello').append(table);  // add table in html page
})();

$('.othelloSquare').click(function () {

    if (!$(this).hasClass('black') && !$(this).hasClass('white')) {
            // add the code
    }
});


function startGame() {
    typeTd = 'black';
    $('.pointsOfPlayerOne').removeClass('animateAreaScore');
    $('.pointsOfPlayerTwo').removeClass('animateAreaScore');
    $('.pointsOfPlayerOne').addClass('animateAreaScore');

    $('.othelloSquare').removeClass('black white').html('');

    pointStart1 = 20;
    pointStart2 = 20;

    $('.areaPoints1').html(pointStart1);
    $('.areaPoints2').html(pointStart2);

    $('#player1').html('player 1' + '<img src=' + 'https://raw.githubusercontent.com/pukie/othello-game/master/images/white.png' + ' class="playerIcon">');
    $('#player2').html('player 2' + '<img src=' + 'https://raw.githubusercontent.com/pukie/othello-game/master/images/black.png' + ' class="playerIcon">');

    $('.exchangeRateTable').css('visibility', 'visible');
    $('.pointsOfPlayerOne').css('visibility', 'visible');
    $('.pointsOfPlayerTwo').css('visibility', 'visible');

    $('#44').html(imgBlack).addClass('black');
    $('#54').html(imgBlack).addClass('black');
    $('#45').html(imgWhite).addClass('white');
    $('#55').html(imgWhite).addClass('white');

};
function points1(){
    pointStart1 = pointStart1 + 10 ;
    $('.areaPoints1').html(pointStart1.toFixed(0));
};

function points2(){
    pointStart2 = pointStart2 + 10 ;
    $('.areaPoints2').html(pointStart2.toFixed(0));
};

$("#startOthelloButton").click(function () {
    document.getElementById("startOthelloButton").style.display = "none";

    document.getElementById("resetOthelloButton").style.display = "inline";
    startGame();
});

$("#resetOthelloButton").click(function () {
    startGame();
});