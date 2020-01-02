var genBtn = document.getElementById("generate");
var sayBtn = document.getElementById("say");
var sentenceText = document.getElementById("sentence");
var voicesSelect = document.getElementById("voices-select");

var voices = window.speechSynthesis.getVoices();

function populateVoices() {
    for (i = 0; i<voices.length; i++) {
        var opt = document.createElement("option");
        opt.innerText = voices[i].name;
        voicesSelect.appendChild(opt)
    }

    voicesSelect.selectedIndex = 0;
}

function say(textToSay) {
    var msg = new SpeechSynthesisUtterance();
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.text = textToSay;
    msg.lang = 'fr-FR';
    msg.voice = voices[voicesSelect.selectedIndex];
    speechSynthesis.speak(msg);
}

genBtn.addEventListener("click", function() {    
    var sentence = (maj(demiPhrase()) + " " + transition() + " " + demiPhrase() + " " + place())
    .replace(/ que un/gi, " qu'un")
    .replace(/ que une/gi, " qu'une");

    sentenceText.value = sentence;
});

sayBtn.addEventListener("click", function() {
    say(sentenceText.value); 
});

populateVoices();