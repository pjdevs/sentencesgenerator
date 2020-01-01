document.getElementById("generate").addEventListener("click", function() {    
    var sentence = (maj(demiPhrase()) + " " + transition() + " " + demiPhrase() + " " + place())
    .replace(/que un/gi, "qu'un")
    .replace(/que une/gi, "qu'une");

    document.getElementById("sentence").value = sentence;
});