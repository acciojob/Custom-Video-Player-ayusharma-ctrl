/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const back = document.getElementById("back")
const forward = document.getElementById("forward")

toggle.addEventListener('click', toggleFunc)
var count = 0
function toggleFunc() {
    if (count == 0) {
        video.play()
        count = 1
        toggle.innerText = "❚ ❚"
    }
    else {
        video.pause()
        count = 0
        toggle.innerText = "►"
    }

}

function backing() {
    console.log("hello")
    video.currentTime += -10;
}
back.addEventListener('click', backing)

function forwarding() {
    console.log("hello")
    video.currentTime += 25;
}
forward.addEventListener('click', forwarding)

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener('timeupdate', handleProgress);

function handleRangeUpdate() {
    video[this.name] = this.value;
}

ranges.forEach(button => button.addEventListener('change', handleRangeUpdate));
ranges.forEach(button => button.addEventListener('mousemove', handleRangeUpdate));