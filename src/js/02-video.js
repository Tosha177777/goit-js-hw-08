import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  const time = e.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);
