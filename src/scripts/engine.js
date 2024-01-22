//pegar todas as teclas do HTML: 
const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input")

const keysCheck = document.querySelector(".keys-check input")

//determinar quais teclas serão tocadas
let mapedKeys = []

let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    //pegando o elemento html que tem a letra equivalente ao data-key
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active"); //adiciona e depois remove a classe active
    }, 150
    )
}

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key)
});

//capturar a tecla que o usuário digitar 
document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}


const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

//um evento para toda vez que o input for manipulado 
volumeSlider.addEventListener("input", handleVolume)


//evento de click para esconder as letras
keysCheck.addEventListener("click", showHideKeys)
