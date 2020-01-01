var genBtn = document.getElementById("generate");
var sayBtn = document.getElementById("say");
var sentenceText = document.getElementById("sentence");

function say(textToSay) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.text = textToSay;
    msg.lang = 'fr-FR';
    msg.voice = voices[0];
    speechSynthesis.speak(msg);
}

genBtn.addEventListener("click", function() {    
    var sentence = (maj(demiPhrase()) + " " + transition() + " " + demiPhrase() + " " + place())
    .replace(/que un/gi, "qu'un")
    .replace(/que une/gi, "qu'une");

    sentenceText.value = sentence;
});

sayBtn.addEventListener("click", function() {
    say(sentenceText.value); 
});