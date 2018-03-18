var Secnumber = 4;

var guess = Number(prompt("Guess any number... "));

if (guess === Secnumber) {
  alert("YOU GOT IT RIGHT...");
}

else if (guess < Secnumber) {
  alert("Too low,you got it wrong");
}
else {
  alert("Too high.you got it wrong");
}
