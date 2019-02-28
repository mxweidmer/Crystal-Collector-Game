

$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var playerScore = 0;

    var blue = Math.floor(Math.random() * 12) + 1;
    var green = Math.floor(Math.random() * 12) + 1;
    var black = Math.floor(Math.random() * 12) + 1;
    var white = Math.floor(Math.random() * 12) + 1;

    var numToGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $("#random-number").text(numToGuess);

    function resetGame() {
        blue = Math.floor(Math.random() * 12) + 1;
        green = Math.floor(Math.random() * 12) + 1;
        black = Math.floor(Math.random() * 12) + 1;
        white = Math.floor(Math.random() * 12) + 1;

        numToGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

        $("#random-number").text(numToGuess);
    }

    $(".crystal-image").on("click", function () {





    });

});