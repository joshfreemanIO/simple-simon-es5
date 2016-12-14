'use strict';

$(document).ready(function() {
  gameIndicator.$roundIndicator = $('.round-indicator');
  gameIndicator.$roundNumber = $('.round-number');
  gameIndicator.$startGameButton = $('.start-game');
  gameIndicator.$gameIndicator = $('.game-indicator');

  $('.simple-simon-button').each(function() {
    var button = createSimonButton($(this), SimpleSimon);

    simonsStack.simonsButtons.push(button)
  });

  SimpleSimon.gameIndicator = gameIndicator;
  SimpleSimon.simonsStack = simonsStack;

  gameIndicator.activate(SimpleSimon);
});
