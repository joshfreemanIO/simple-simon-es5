'use strict';

var gameIndicator = {
  $roundIndicator: null,
  $startGameButton: null,
  $roundNumber: null,

  startGame: function() {
    this.$startGameButton.hide();
    this.$roundIndicator.show();
  },

  startNextRound: function() {
    var currentRound = parseInt(this.$roundNumber.html());

    this.$roundNumber.html(currentRound + 1);
  },

  endGame: function() {
    this.resetGame();
  },

  resetGame: function() {
    this.$roundNumber.html(1);
    this.$roundIndicator.hide();
    this.$startGameButton.show();
  }
};
