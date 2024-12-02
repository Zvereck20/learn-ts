const backgroundImg = document.querySelector(".back img") as HTMLImageElement;
const volume = document.querySelector(".volume__level") as HTMLInputElement;
const audio = document.querySelector(".audio") as HTMLAudioElement;
const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".button");

interface Items {
  [name: string]: {
    imgUrl: string;
    soundUrl: string;
  };
}

const natureSounds: Items = {
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

buttons.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", () => {
    const soundName = button.dataset.sound as string;
    const currentSound = audio.dataset.sound as string;

    if (currentSound === soundName) {
      if (localStorage.getItem("isPlaying") === "true") {
        audio.pause();
        localStorage.setItem("isPlaying", "false");
      } else if (localStorage.getItem("isPlaying") === "false") {
        audio.play();
        localStorage.setItem("isPlaying", "true");
      }
    } else {
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
