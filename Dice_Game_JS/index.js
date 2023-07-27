var randomnumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomnumber1 + ".png"; //dice1.png - dice6.png

var settingExactPath = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", settingExactPath);



var randomnumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "dice" + randomnumber2 + ".png"; //dice1.png - dice6.png

var settingExactPath2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", settingExactPath2);



if (randomnumber1 > randomnumber2) {
  document.querySelector(".p1").innerHTML = "🚩Player 1 Wins";
  document.querySelector(".p2").innerHTML = "Player 2 Looses";
}
else if (randomnumber1 < randomnumber2) {
  document.querySelector(".p1").innerHTML = "Player 1 Looses";
  document.querySelector(".p2").innerHTML = "Player 2 Wins🚩";
}
else {
  document.querySelector(".p1").innerHTML = "Draw";
  document.querySelector(".p2").innerHTML = "Draw";
}
