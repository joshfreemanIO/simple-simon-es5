'use strict';

var simonsStack = {
  simonsButtons: [],
  sequence: [],

  incrementStack: function() {
    var randomButton = this._getRandomButton();

    this.sequence.push(randomButton);
  },

  resetStack: function() {
    this.sequence = [];
  },

  showSequence: function(callback) {
    var sequenceCopy = this.sequence.slice();
    var self = this;

    setTimeout(function() {
      self._showSequence(sequenceCopy, callback);
    }, 500)
  },

  _showSequence: function(sequence, callback) {
    var self = this;
    var button = sequence.shift();

    button.powerOn();

    setTimeout(function() {
      button.powerOff();

      if (sequence.length != 0) {
        setTimeout(function() {
          self._showSequence(sequence, callback);
        }, 250);
      } else {
        callback();
      }
    }, 500);
  },

  _getRandomButton: function() {
    return this.simonsButtons[this._getRandomIndexFromArray(this.simonsButtons)];
  },

  _getRandomIndexFromArray: function(array) {
    return Math.floor(Math.random() * array.length);
  },
};
