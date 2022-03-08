let word;
let char;
let hiddenWord = "";
let mainWord;
let numberOfAttempts = 6;

function buildWord() {
  word = document.getElementById("words").value;
  mainWord = document.getElementById("words").value;
  for (let i = 0; i < word.length; ++i) {
    if (i == 0 || i == word.length - 1) {
        hiddenWord += word.charAt(i);
        word = word.replaceAt(i, "_");
    } else {
        hiddenWord += "_";
    }
  }
  document.getElementById("result").innerHTML = hiddenWord;
}

function charCheck() {
    char = document.getElementById("chars").value;
    if (numberOfAttempts > 0) {
        if (word.includes(char)) {
            for (let i = 1; i < word.length - 1; ++i) {
                if (word[i] == char) {
                    hiddenWord = hiddenWord.replaceAt(i, char);
                    word = word.replaceAt(i, "_");
                }
            }
            document.getElementById("result").innerHTML = hiddenWord;
            if (hiddenWord === mainWord) {
                document.getElementById("gameResult").innerHTML = "Congratulations you won! (refresh the page and play again)";
            }
        } else {
            --numberOfAttempts;
            document.getElementById("attempts").innerHTML = numberOfAttempts;
        }
    } else {
    document.getElementById("gameResult").innerHTML = "You lost. Try again (refresh the page and play again)";
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
} 