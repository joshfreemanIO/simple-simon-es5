'use strict';

var SimpleSimon = {
  gameIndicator: null,
  simonsStack: null,
  currentRoundStack: null,

  startGame: function() {
    this.disableButtons();
    this.gameIndicator.startGame();
    this.simonsStack.incrementStack();
    this.currentRoundStack = createRoundStack(this.simonsStack);

    var self = this;

    this.simonsStack.showSequence(function() {
      self.enableButtons();
    });
  },

  playButton: function(button) {
    this.currentRoundStack.playButton(button);

    if (this.currentRoundStack.gameOver) {
      this.endGame();
    } else if (this.currentRoundStack.roundCompleted) {
      this.startNextRound();
    }
  },

  startNextRound: function() {
    this.disableButtons();
    this.gameIndicator.startNextRound();
    this.simonsStack.incrementStack();
    this.currentRoundStack = createRoundStack(this.simonsStack);

    var self = this;

    this.simonsStack.showSequence(function() {
      self.enableButtons();
    });
  },

  endGame: function() {
    this.gameIndicator.endGame();
    this.simonsStack.resetStack();
    this.disableButtons();
  },

  disableButtons: function() {
    this.simonsStack.simonsButtons.forEach(function(button){
      button.deactivate();
    });
  },

  enableButtons: function() {
    this.simonsStack.simonsButtons.forEach(function(button){
      button.activate();
    });
  },
};
