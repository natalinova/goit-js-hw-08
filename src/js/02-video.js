import throttle from "lodash.throttle";
import Player from "@vimeo/player"
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(getTime, 100));
function getTime(currentTime) {
    // if (localStorage.getItem("videoplayer-current-time")) {
        localStorage.setItem("videoplayer-current-time", currentTime.seconds)
    }
// };
if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    player.getVideoTitle().then(function (title) {
        console.log('title:', title);
    })
}