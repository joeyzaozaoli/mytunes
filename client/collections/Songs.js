// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var c = this;
    $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      success: function (data) {
        console.log('get success');
        c.add(data.results);
      },
      error: function (data) {
        console.error('get failure', data);
      }
    });
  }

});
