var levelNumber = 1;
var index = 0;
var pattern = [];
var isGameStarted = true;

// Handle Keyboard Clicks
$(this).on('keypress', function(event) {
  if (isGameStarted) {
    isGameStarted = false;
    startGame(pattern);
  }
});

$('.btn').click(function(event) {
  var color = event.target.id;

  if (color === pattern[index]) {
    if (index == pattern.length - 1) {
      // Level UP
      index = 0;
      levelNumber++;
      generatePatternWithDelay();
      $('#level-title').text('Level ' + levelNumber);
    } else {
      index++;
    }
  } else {
    gameOver(pattern);
    index = 0;
  }

  animateButton(color);
  makeSound(color);
});

function startGame(pattern) {
  $('#level-title').text('Level ' + levelNumber);
  generatePatternWithDelay();
}

function gameOver(pattern) {
  reset();
  makeSound('wrong');
  $('#level-title').text('Game Over, Press Any Key to Restart');
  animateGameOver();
}

function reset() {
  index = 0;
  levelNumber = 1;
  isGameStarted = true;
  pattern = [];
}

function makeSound(soundName) {
  var colorSound = new Audio('sounds/' + soundName + '.mp3');
  colorSound.play();
}

function animateButton(color) {
  $('.' + color).addClass('pressed');
  setTimeout(function() {
    $('.' + color).removeClass('pressed');
  }, 100);
}

function animateButton(color) {
  $('.' + color).addClass('pressed');
  setTimeout(function() {
    $('.' + color).removeClass('pressed');
  }, 100);
}

function animateGameOver() {
  $('body').addClass('game-over');
  setTimeout(function() {
    $('body').removeClass('game-over');
  }, 100);
}


function generatePattern(pattern) {
  var randomNumber = Math.floor((Math.random() * 4)) + 1;

  var color = '';
  if (randomNumber == 1) {
    color = 'green';
  } else if (randomNumber == 2) {
    color = 'red';
  } else if (randomNumber == 3) {
    color = 'yellow';
  } else if (randomNumber == 4) {
    color = 'blue';
  }
  pattern.push(color);

  // Animane Button
  $('.' + color).fadeOut(150);
  $('.' + color).fadeIn(150);
  // Make Sound
  makeSound(pattern[pattern.length - 1]);
}

function generatePatternWithDelay() {
  setTimeout(function() {
    generatePattern(pattern);
  }, 650);
}
