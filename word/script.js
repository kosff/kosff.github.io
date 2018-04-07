var textarea = document.getElementById("sandbox"),
button = document.getElementById("find");
button.addEventListener("click", function(){
    var text, words, dictionary = {};
    text = textarea.value.replace(/[^А-Яа-яA-Za-z]/g," ");
    words = text.split(" ").filter(function(word) {
    return word.length >4;
    });
    words.forEach(function(word) {
        if (!(word in dictionary)) {
            dictionary[word] = 0;
        }
        dictionary[word] +=1;
    });
    var maxWord, maxCount = 0, word;
    for (word in dictionary) {
        if (dictionary[word]>maxCount) {
            maxCount = dictionary[word];
            maxWord = word;
        }
    }
    alert(maxWord);
});
