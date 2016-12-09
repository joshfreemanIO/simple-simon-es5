$(document).ready(function() {
  gameIndicator.$roundIndicator = $('.round-indicator');
  gameIndicator.$roundNumber = $('.round-number');
  gameIndicator.$startGameButton = $('.start-game');

  $('.simple-simon-button').each(function() {
    var button = createSimonButton($(this), SimpleSimon);

    simonsStack.simonsButtons.push(button)
  });

  SimpleSimon.gameIndicator = gameIndicator;
  SimpleSimon.simonsStack = simonsStack;

  $('.start-game').click(function() {
    SimpleSimon.startGame();
  });
});
