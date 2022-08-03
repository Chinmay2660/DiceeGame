var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<span>🎌</span>Player 1 Wins!<span>🎌</span>";
} else if (randomNumber1 < randomNumber2) { // If player 2 wins
    document.querySelector("h1").innerHTML = "<span>🎌</span>Player 2 Wins!<span>🎌</span>";
} else { // If it's a tie
    document.querySelector("h1").innerHTML = "<span>🎌</span>Draw!<span>🎌</span>";
}