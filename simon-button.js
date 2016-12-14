'use strict';

var createSimonButton = function($button, simpleSimon) {
  return {
    $htmlButton: $button,
    SimpleSimon: SimpleSimon,
    audio: new Audio($button.data('sound')),

    activate: function() {
      var self = this;

      this.$htmlButton.mousedown(function(event) {
        self.powerOn();
      });

      this.$htmlButton.mouseup(function(event) {
        self.powerOff();

        self.SimpleSimon.playButton(self);
      });
    },

    deactivate: function() {
      this.$htmlButton.unbind('mouseup').unbind('mousedown');
    },

    powerOn: function() {
      var primaryColor = this.$htmlButton.data('color');

      this.$htmlButton.removeClass(primaryColor);
      this.$htmlButton.addClass(primaryColor + '-active');
      this.audio.play();
    },

    powerOff: function() {
      var primaryColor = this.$htmlButton.data('color');

      this.$htmlButton.removeClass(primaryColor + '-active');
      this.$htmlButton.addClass(primaryColor);
    },

    flash: function() {
      var interval = setInterval(function() {
        this.powerOn();

        setTimeout(function() {
          this.powerOff();
        },100);

        i = i + 1;

        if (i == 6) {
          clearInterval(interval);
        }
      }, 200);
    },

    isSameButtonAs: function(simonButton) {
      return this.$htmlButton.is($(simonButton.$htmlButton));
    }
  }
};

$(document).ready(function() {
  gameIndicator.$roundIndicator = $('.round-indicator');
  gameIndicator.$roundNumber = $('.round-number');
  gameIndicator.$startGameButton = $('.start-game');
});
