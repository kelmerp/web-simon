$(document).ready(function(){
  var aSound = document.createElement('audio');
  var currentGame = [];
  var colors = ["green", "red", "blue", "yellow"]
  var offColors = ["#003300","#660000","#c4a300","#00008B"]
  var correct = true;
  function randomColor() {
    return colors[Math.floor(Math.random()*4)];
  }

  function playColor(color) {
    aSound.setAttribute('src', '/sounds/'+color+'.mp3');
    aSound.play();
  }

  function toggleColor(color) {
    $('.board div.'+color).css('background-color', color);
    if (color == "yellow"){
      setInterval(function(){
        $('.board div.'+color).css('background-color', "#c4a300");
      },1500);
    }
    else {
      setInterval(function(){
        $('.board div.'+color).css('background-color', "dark"+color);
      },1500);
    }
  }

  function getPlayerInput() {
    $('div.board').on('click',XXXX, function(event){
      XXXX
    }
  }

  aSound.setAttribute('src', '/sounds/play_game.mp3');
  aSound.play();

  $('div.header').on('click','a.start', function(event){
    event.preventDefault();
    correct = true;

    while (correct==true) {
      newColor = randomColor();
      currentGame.push(newColor);
      playColor(newColor);
      toggleColor(newColor);
      getPlayerInput();
      correct = false;
    };
  });
}); 