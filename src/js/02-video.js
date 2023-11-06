import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';


function onTimeUpDate(evt) {
  localStorage.setItem(localStorageKey, evt.seconds);
}

const saveTimeLocalSt = localStorage.getItem(localStorageKey);
console.log(saveTimeLocalSt);
if (saveTimeLocalSt) {
  player.setCurrentTime(saveTimeLocalSt);
}
player.on('timeupdate', throttle(onTimeUpDate, 1000));


