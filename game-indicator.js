'use strict';

var gameIndicator = {
  $roundIndicator: null,
  $startGameButton: null,
  $roundNumber: null,
  $gameIndicator: null,

  startGame: function() {
    this.$startGameButton.hide();
    this.$roundIndicator.show();
    this._deactivate();
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
  },

  activate: function(game) {
    this.$gameIndicator.click(function() {
      game.startGame();
    });
  },

  _deactivate: function() {
    this.$gameIndicator.unbind('click');
  }
};
