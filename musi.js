
const audio = document.getElementById('music');
const playlist = [
    'carla.mp3',
    'carlos.mp3',
    'song3.mp3'
    // Agrega más canciones según sea necesario
];
let currentSongIndex = 0;

audio.src = playlist[currentSongIndex];

audio.addEventListener('ended', function() {
    currentSongIndex++;
    if (currentSongIndex < playlist.length) {
        audio.src = playlist[currentSongIndex];
        audio.play();
    }
});

audio.addEventListener('error', function() {
    console.log('Error al cargar la canción:', playlist[currentSongIndex]);
});

