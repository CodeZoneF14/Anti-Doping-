// animation.js

// Example of adding a play event listener to each video
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', () => {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause(); // Pause other videos when one is played
                }
            });
        });
    });
});
