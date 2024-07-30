const text = document.getElementById('text');
const speakButton = document.getElementById('speak');

let speechSynthesis = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();

utterance.lang = 'hi-IN';
utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'hi-IN');

speakButton.addEventListener('click', () =>{
    if(speechSynthesis.speaking){
        speechSynthesis.cancel();
    }

    utterance.text = text.value;
    speechSynthesis.speak(utterance);
});

utterance.addEventListener('error', () =>{
    console.error('Speech Synthesis error');
});