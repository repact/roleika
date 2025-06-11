document.addEventListener('DOMContentLoaded', function() {
    // Auto-play the video
    const video = document.getElementById('bgVideo');
    const playVideo = () => {
        video.play().catch(e => {
            console.log("Video autoplay prevented:", e);
            // Add fallback image if video fails to play
            document.querySelector('.video-background').style.backgroundImage = 'url(fallback-image.jpg)';
            document.querySelector('.video-background video').style.display = 'none';
        });
    };
    
    // For browsers that require user interaction for audio
    const audio = document.querySelector('audio');
    const playAudio = () => {
        audio.volume = 0.3; // Set lower volume
        audio.play().catch(e => console.log("Audio autoplay prevented:", e));
    };
    
    // Try to play media on page load
    playVideo();
    playAudio();
    
    // Add click-to-play functionality for audio
    document.body.addEventListener('click', function() {
        if (audio.paused) {
            playAudio();
        }
    }, { once: true });
    
    // Add subtle animation to profile picture on hover
    const profilePic = document.querySelector('.profile-picture');
    profilePic.addEventListener('mouseenter', () => {
        profilePic.style.transform = 'scale(1.05) rotate(5deg)';
    });
    profilePic.addEventListener('mouseleave', () => {
        profilePic.style.transform = 'scale(1)';
    });
});
