var createRoundStack = function(simonsStack) {
  return {
    sequence: simonsStack.sequence.slice(),
    gameOver: false,
    roundCompleted: false,

    playButton: function(playedSimonButton) {
      var expectedButton = this.sequence.shift();

      if (playedSimonButton.isSameButtonAs(expectedButton)) {
        if (this.sequence.length === 0) {
          this.roundCompleted = true;
        }
      } else {
        this.gameOver = true;
      }
    }
  }
};
