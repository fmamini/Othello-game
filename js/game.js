
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
            table += '<td class=othelloSquare id=' + x + y + '>' + '</td>';     // 8 sotun baraye har satr
        }
    }
    table += " </table>";
    $('#othello').append(table);  // add table in html page
})();

$('.othelloSquare').click(function () {

    if (!$(this).hasClass('black') && !$(this).hasClass('white')) {

    }
});