// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.removeSong(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function() {
      this.removeSong(this.at(0));
    }, this);
  },

  playFirst: function() {
    this.first().play();
  },

  removeSong: function(song) {
    this.remove(song);
  }

});