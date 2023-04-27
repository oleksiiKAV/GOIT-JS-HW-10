import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '1080p',
});

player.on('timeupdate', throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}, 1000));

const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime) {
    player.setCurrentTime(savedTime);
}
