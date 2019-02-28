

$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var playerScore = 0;

    var winSound = new Audio("assets/win-sound.mp3");
    var loseSound = new Audio("assets/lose-sound.mp3");

    var blue = Math.floor(Math.random() * 12) + 1;
    var green = Math.floor(Math.random() * 12) + 1;
    var black = Math.floor(Math.random() * 12) + 1;
    var white = Math.floor(Math.random() * 12) + 1;

    var numToGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $("#random-number").text(numToGuess);
    $("#player-score").text(playerScore);

    function resetGame() {
        blue = Math.floor(Math.random() * 12) + 1;
        green = Math.floor(Math.random() * 12) + 1;
        black = Math.floor(Math.random() * 12) + 1;
        white = Math.floor(Math.random() * 12) + 1;

        numToGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

        playerScore = 0;

        $("#random-number").text(numToGuess);
        $("#player-score").text(playerScore);
    }

    $(".crystal-image").on("click", function () {

        if (playerScore < numToGuess) {
            switch ($(this).val()) {
                case "blue":
                    playerScore += blue;
                    $("#player-score").text(playerScore);
                    break;
                case "green":
                    playerScore += green;
                    $("#player-score").text(playerScore);
                    break;
                case "black":
                    playerScore += black;
                    $("#player-score").text(playerScore);
                    break;
                case "white":
                    playerScore += white;
                    $("#player-score").text(playerScore);
                    break;
            }

            if (playerScore === numToGuess) {
                wins++;
                $("#wins").text(wins);
                winSound.play();
                resetGame();
            } else if (playerScore > numToGuess) {
                losses++;
                $("#losses").text(losses);
                loseSound.play();
                resetGame();
            }
        }
    });

});