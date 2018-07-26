class Helper {
  playPauseAndUpdate (song){
    player.playPause(song);
    $('.total-time').text(player.getDuration(song));

  }

}

const helper = new Helper();
