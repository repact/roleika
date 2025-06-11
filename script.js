// You can add interactive elements here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Auto-play the video (muted) and music
    const video = document.getElementById('bgVideo');
    video.play().catch(e => console.log("Video autoplay prevented:", e));
    
    // For browsers that block audio autoplay, you might need to add a play button
});
