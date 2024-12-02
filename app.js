"use strict";
const backgroundImg = document.querySelector(".back img");
const volume = document.querySelector(".volume__level");
const audio = document.querySelector(".audio");
const buttons = document.querySelectorAll(".button");
const natureSounds = {
    summer: {
        imgUrl: "./assets/summer-bg.jpg",
        soundUrl: "./assets/sounds/summer.mp3",
    },
    rain: {
        imgUrl: "./assets/rainy-bg.jpg",
        soundUrl: "./assets/sounds/rain.mp3",
    },
    winter: {
        imgUrl: "./assets/winter-bg.jpg",
        soundUrl: "./assets/sounds/winter.mp3",
    },
};
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const soundName = button.dataset.sound;
        const currentSound = audio.dataset.sound;
        if (currentSound === soundName) {
            if (localStorage.getItem("isPlaying") === "true") {
                audio.pause();
                localStorage.setItem("isPlaying", "false");
            }
            else if (localStorage.getItem("isPlaying") === "false") {
                audio.play();
                localStorage.setItem("isPlaying", "true");
            }
        }
        else {
            backgroundImg.src = natureSounds[soundName].imgUrl;
            audio.src = natureSounds[soundName].soundUrl;
            audio.dataset.sound = soundName;
            audio.play();
            localStorage.setItem("isPlaying", "true");
        }
    });
});
audio.volume = Number(volume.value);
volume.addEventListener("change", () => {
    audio.volume = Number(volume.value);
});
