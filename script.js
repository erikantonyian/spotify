const setWindowViewport = () => {
    const windowHeight = innerHeight
    document.documentElement.style.setProperty('--w-h', windowHeight + "px")
}

setInterval(() => {
    setWindowViewport()
})



const logo = `<svg width="159.000000" height="49.000000" viewBox="0 0 159 49" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs/><path id="Vector" d="M-0.86 24.14C-0.86 37.67 10 48.85 23.14 48.85C36.28 48.85 47.14 37.67 47.14 24.14C47.14 10.61 36.28 -0.42 23.14 -0.42C10 -0.42 -0.86 10.61 -0.86 24.14ZM32 35.61C26.42 32.08 19.28 31.2 11 33.11C9 33.41 8.71 30.47 10.42 30.17C19.57 27.97 27.28 29 33.57 32.97C35.14 34 33.57 36.5 32 35.61ZM34.42 29C28 24.88 18.14 23.7 10.57 26.05C8.14 26.79 7.28 22.97 9.57 22.38C18.28 19.73 29 21.05 36.42 25.76C38.42 27.08 36.42 30.32 34.42 29ZM9.42 18.55C7 19.44 5.42 15.17 8.14 14.14C16.57 11.5 30.85 11.94 39.71 17.38C42.14 18.7 39.85 22.82 37.28 21.35C29.57 16.64 16.71 16.2 9.42 18.55ZM63.57 31.94C61.14 31.94 58.85 31.05 56.85 29C56.71 29 56.71 29.14 56.71 29.14L54.42 31.94C54.28 32.08 54.28 32.23 54.42 32.38C57 34.73 60.14 35.91 63.57 35.91C68.42 35.91 71.42 33.11 71.42 29C71.42 25.47 69.28 23.55 64.28 22.23C60.14 21.2 59.42 20.47 59.42 19C59.42 17.52 60.85 16.64 62.71 16.64C64.57 16.64 66.28 17.38 68.28 18.85C68.28 18.85 68.42 19 68.57 19C68.71 19 68.71 18.85 68.71 18.85L70.71 15.91C70.85 15.76 70.85 15.76 70.71 15.61C68.42 13.7 65.71 12.67 62.71 12.67C58.28 12.67 55.14 15.47 55.14 19.44C55.14 23.7 58 25.02 62.57 26.2C66.57 27.08 67.14 27.97 67.14 29.44C67.14 31.05 65.71 31.94 63.57 31.94ZM77.14 20.61L77.14 18.7C77.14 18.55 77 18.41 76.85 18.41L73.14 18.41C73 18.41 72.85 18.55 72.85 18.7L72.85 40.32C72.85 40.47 73 40.61 73.14 40.61L76.85 40.61C77 40.61 77.14 40.47 77.14 40.32L77.14 33.55C78.57 35.17 80.14 35.91 82.28 35.91C86.14 35.91 90 32.82 90 26.94C90 21.05 86.14 18.11 82.28 18.11C80.14 18.11 78.57 18.85 77.14 20.61ZM81.42 32.08C78.85 32.08 77 29.88 77 26.94C77 24 78.85 21.94 81.42 21.94C84 21.94 85.71 24 85.71 26.94C85.71 29.88 84 32.08 81.42 32.08ZM91.14 27.08C91.14 32.08 95 35.91 100 35.91C105 35.91 108.85 31.94 108.85 26.94C108.85 21.94 105.14 18.11 100.14 18.11C95.14 18.11 91.14 22.08 91.14 27.08ZM95.42 26.94C95.42 24 97.28 21.94 100 21.94C102.71 21.94 104.71 24.14 104.71 27.08C104.71 30.02 102.85 32.08 100.14 32.08C97.42 32.08 95.42 29.88 95.42 26.94ZM115.42 18.41L115.42 14.14C115.42 14 115.42 13.85 115.28 13.85L111.57 13.85C111.42 13.85 111.28 14 111.28 14.14L111.28 18.41L109.42 18.41C109.28 18.41 109.14 18.55 109.14 18.7L109.14 21.94C109.14 22.08 109.28 22.23 109.42 22.23L111.28 22.23L111.28 30.76C111.28 34.14 112.85 35.91 116.14 35.91C117.42 35.91 118.71 35.61 119.71 35.02C119.85 35.02 119.85 34.88 119.85 34.73L119.85 31.64C119.85 31.5 119.85 31.35 119.71 31.35L119.42 31.35C118.71 31.79 117.85 31.94 117.14 31.94C116 31.94 115.42 31.35 115.42 30.17L115.42 22.23L119.71 22.23C119.85 22.23 120 22.08 120 21.94L120 18.7C120 18.55 119.85 18.41 119.71 18.41L115.42 18.41ZM133.85 17.97C133.85 16.35 134.42 15.76 135.71 15.76C136.42 15.76 137.14 15.76 137.85 16.05L138 16.05C138 16.05 138.14 15.91 138.14 15.76L138.14 12.67C138.14 12.52 138.14 12.38 138 12.38C137.28 12.08 136.28 11.94 134.85 11.94C131.42 11.94 129.71 14 129.71 17.67L129.71 18.41L127.85 18.41C127.71 18.41 127.57 18.55 127.57 18.7L127.57 21.94C127.57 22.08 127.71 22.23 127.85 22.23L129.71 22.23L129.71 35.32C129.71 35.47 129.85 35.61 130 35.61L133.71 35.61C133.85 35.61 133.85 35.47 133.85 35.32L133.85 22.23L137.42 22.23L142.71 35.32C142.14 36.64 141.57 36.94 140.71 36.94C140 36.94 139.28 36.79 138.57 36.35L138.42 36.35L138.28 36.5L137 39.29C137 39.44 137 39.73 137.14 39.73C138.42 40.47 139.57 40.76 141 40.76C143.71 40.76 145.28 39.44 146.57 35.91L153 18.85L153 18.55C153 18.41 152.85 18.41 152.71 18.41L148.85 18.41C148.71 18.41 148.71 18.55 148.71 18.7L144.71 30.17L140.42 18.7C140.42 18.55 140.28 18.41 140.14 18.41L133.85 18.41L133.85 17.97ZM122 18.41C121.85 18.41 121.71 18.55 121.71 18.7L121.71 35.32C121.71 35.47 121.85 35.61 122 35.61L125.71 35.61C125.85 35.61 125.85 35.47 125.85 35.32L125.85 18.7C125.85 18.55 125.85 18.41 125.71 18.41L122 18.41ZM121.14 13.55C121.14 15.02 122.42 16.35 123.85 16.35C125.28 16.35 126.42 15.02 126.42 13.55C126.42 12.08 125.28 10.91 123.85 10.91C122.42 10.91 121.14 12.08 121.14 13.55ZM156.14 23.7C157.57 23.7 158.85 22.52 158.85 21.05C158.85 19.58 157.57 18.41 156.14 18.41C154.71 18.41 153.57 19.58 153.57 21.05C153.57 22.52 154.71 23.7 156.14 23.7ZM156.14 18.7C157.42 18.7 158.57 19.73 158.57 21.05C158.57 22.38 157.42 23.41 156.14 23.41C154.85 23.41 153.85 22.38 153.85 21.05C153.85 19.73 154.85 18.7 156.14 18.7ZM156.71 21.35C157.14 21.2 157.42 20.91 157.42 20.47C157.42 19.88 156.85 19.58 156.28 19.58L155.14 19.58L155.14 22.38L155.71 22.38L155.71 21.5L156.28 21.5L156.85 22.38L157.57 22.38L156.71 21.35ZM156.28 20.02C156.57 20.02 156.85 20.17 156.85 20.47C156.85 20.76 156.57 20.91 156.28 20.91L155.71 20.91L155.71 20.02L156.28 20.02Z" fill-opacity="1.000000" fill-rule="nonzero"/>
</svg>
`;

const brandContainer = document.querySelector(".splash .brand");
brandContainer.innerHTML = logo;
const brandLogo = document.querySelector(".splash .brand svg");
brandLogo.classList.add('logo')

const playlist = [
    {
        "id": "6f9a18e6-33d4-4c6d-b7db-9f5d8d8f5185",
        "pic": "https://i.scdn.co/image/ab67616d00001e02fc8a3e0f0f2016068474bdc9",
        "title": "BRODYAGA FUNK",
        "creator": "Eternxlkz",
        "album": "BRODYAGA FUNK",
        "file": "static/audio/Eternxlkz_Brodyaga_Funk.mp3"
    },
    {
        "id": "e108f10a-9b18-4f65-a975-97109c3e5371",
        "pic": "https://i.scdn.co/image/ab67616d00001e02f88fa662f78aac08d8dbe32a",
        "title": "ENOUGH!",
        "creator": "Eternxlkz",
        "album": "ENOUGH!",
        "file": "static/audio/Eternxlkz-Enough.mp3"
    },
    {
        "id": "f42f7d4e-58a0-46db-bb40-d92a3b137660",
        "pic": "https://i.scdn.co/image/ab67616d0000b273eb4afe61b0eb78e081585d1a",
        "title": "Sarerov Dzorerov",
        "creator": "Arkadi Dumikyan",
        "album": "Sarerov Dzorerov",
        "file": "static/audio/Arkadi Dumikyan - Sarerov Dzorerov (www.mp3erger.ru) 2022.mp3"
    },
    {
        "id": "9a9f18a0-1a0b-4f7e-bc89-1f3be2c30518",
        "pic": "https://i.pinimg.com/736x/b2/9c/2c/b29c2cf023d7449ef71ff50f3d99068b.jpg",
        "title": "The Tutututu Song - Slowed+Reverb",
        "creator": "Kausak",
        "album": "The Tutututu Song - Slowed+Reverb",
        "file": "static/audio/the-tutututututu-song-slowed-reverb-bass-boosted.mp3"
    },
    {
        "id": "c79df553-f1e3-41c5-a572-526c45f1b7a0",
        "pic": "https://i.scdn.co/image/ab67616d0000b273feaa136c01a72bfd367f9b51",
        "title": "MARQUINHA DE FITA x DJ VT DA RUA LARGA - slowed tiktok version",
        "creator": "Kausak",
        "album": "MARQUINHA DE FITA x DJ VT DA RUA LARGA - slowed tiktok version",
        "file": "static/audio/MARQUINHA-DE-FITA-X-TEM-Q-SER-TRABALHO-LINDO-(Slowed+Reverb).mp3"
    }
]

const url = window.location.search;
const params = new URLSearchParams(url)

const home = document.querySelector('.home');
const player = document.querySelector('.track');
const splash = document.querySelector('.splash');

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
    console.log('This is not a mobile device.');
    home.remove();
    player.remove();
    splash.remove();
}


if (params.get("playlist_id")) {
    home.hidden = true;
    player.hidden = false;
    const filteredObj = playlist.filter(item => item.id === params.get("playlist_id"))[0];
    const albumTitle = document.querySelector('.album-title');
    albumTitle.innerHTML = filteredObj.album;
    const playerPic = document.querySelector('.player-pic');
    playerPic.src = filteredObj.pic;
    const backdrop = document.querySelector('.backdrop');
    backdrop.src = filteredObj.pic;
    const songName = document.querySelector('.song-name');
    songName.innerHTML = filteredObj.title;
    const songCreatorName = document.querySelector('.song-creator');
    songCreatorName.innerHTML = filteredObj.creator;
    const audio = document.querySelector('.audio');
    const playStop = document.querySelector('.play-pause-button');

    
    const rightAnimations = playStop.querySelectorAll('.right animate'),
    leftAnimations = playStop.querySelectorAll('.left animate'),
    className = 'clicked';
    playStop.addEventListener('click', () => {
        playStop.classList.toggle(className);
        if (!playStop.classList.contains(className)) {
            rightAnimations[1].beginElement();
            leftAnimations[1].beginElement();
            audio.pause();
        } else {
            rightAnimations[0].beginElement();
            leftAnimations[0].beginElement();
            audio.play();
        }
        
    })
    
    const browseLeft = document.getElementById('browse-left');
    const browseRight = document.getElementById('browse-right');
    
    browseRight.onclick = () => {
        const index = playlist.findIndex(item => item.id === params.get("playlist_id"));
        console.log(params.get("playlist_id"))
        console.log(index)
        console.log(index + 1)
        window.location = index === playlist.length - 1 ? "?playlist_id=" + playlist[0].id : "?playlist_id=" + playlist[index + 1].id;
    }

    const index = playlist.findIndex(item => item.id === params.get("playlist_id"));
    browseLeft.onclick = () => {
        console.log(params.get("playlist_id"))
        console.log(index)
        console.log(index - 1)
        window.location = index === 0 ? "?playlist_id=" + playlist[playlist.length - 1].id : "?playlist_id=" + playlist[index - 1].id;
    }
    
    document.documentElement.style.setProperty('--i-h', playerPic.clientHeight + "px");
    const seekBar = document.querySelector('.song-seek-bar');
    const songDurtion = document.querySelector('.song-durtion-time');
    const currentTime = document.querySelector('.current-time');
    seekBar.max = audio.duration;
    console.log(audio.duration)
    setTimeout(() => {
        audio.setAttribute('src', filteredObj.file);
        audio.play();
        if (audio.play()) {
            playStop.classList.add('clicked');
            rightAnimations[0].beginElement();
            leftAnimations[0].beginElement();
        }
        audio.addEventListener('loadedmetadata', () => {

            setInterval(() => {
                currentTime.innerHTML = formatTime(audio.currentTime);
                seekBar.value = audio.currentTime;
                if (audio.currentTime === audio.duration) {
                    window.location = index === playlist.length - 1 ? "?playlist_id=" + playlist[0].id : "?playlist_id=" + playlist[index + 1].id;
                }
            }, 1000);
            songDurtion.innerHTML = formatTime(audio.duration)
        });
    }, 300)

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedMinutes = String(minutes).padStart(2, '0'); 
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    window.onblur = () => {
        audio.pause();
    }

    window.onfocus = () => {
        audio.play();
    }

} else {
    home.hidden = false;
    player.hidden = true;
    function playlists(data) {
        const album = `
    <a class="album" href="?playlist_id=${data.id}">
        <img src="${data.pic}"
            alt="" class="pic">
        <div class="album-details">
            <p class="album-title">${data.title}</p>
            <p class="album-creator">${data.creator}</p>
        </div>
    </a>
    `;

        const albums = document.querySelector('.albums');

        albums.innerHTML += album;
    }

    playlist.map(item => {
        playlists(item);
    })
}