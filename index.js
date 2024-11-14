const previous = document.querySelector('#previous');
const play = document.querySelector('#play');
const next = document.querySelector('#next');

const title = document.querySelector('#title');
const image = document.querySelector('#image');

const track = document.createElement('audio');

let index = 0;
let playingSong = false;

let songs = [{
        name: 'hey minnale',
        path: 'song5.mp3',
        image: 'song5.jpg',
    },
    {
        name: 'Oh! sitha',
        path: 'song4.mp3',
        image: 'song4.jpg',
    },
    {
        name: 'Tune kya kiya',
        path: 'song3.mp3',
        image: 'song3.jpg',
    },
    {
        name: 'Satranga',
        path: 'song2.mp3',
        image: 'song2.jpg',
    },
    {
        name: 've kamleya',
        path: 'song1.mp3',
        image: 'song1.jpg',
    }
];

function loadTrack(index) {
    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    image.src = songs[index].image;
    track.load();
}

loadTrack(index);

function playSong() {
    track.play();
    playingSong = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    track.pause();
    playingSong = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
}

function nextSong() {
    if (index < songs.length - 1) {
        index += 1;
        loadTrack(index);
        playSong();
    } else {
        index = 0;
        loadTrack(index);
        playSong();

    }
}

function previousSong() {
    if (index > 0) {
        index -= 1;
        loadTrack(index);
        playSong();

    } else {
        index = songs.length;
        loadTrack(index);
        playSong();
    }
}

function justPlay() {
    if (playingSong == false) {
        playSong();

    } else {
        pauseSong();
    }
}