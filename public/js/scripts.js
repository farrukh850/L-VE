

document.addEventListener('DOMContentLoaded', function() {
    // Video mute/unmute functionality
    const videos = document.querySelectorAll('.muted-video');
    const muteButtons = document.querySelectorAll('.mute-toggle');

    muteButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const video = videos[index];

            // Toggle muted state
            video.muted = !video.muted;

            // Update icon based on muted state
            const muteIcon = button.querySelector('img');
            if (video.muted) {
                muteIcon.src = './images/mute.svg';
            } else {
                muteIcon.src = './images/unmute.svg'; // Assuming you have this icon
            }
        });
    });
});