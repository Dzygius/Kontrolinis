function arLyginis() {
    var skaicius = document.getElementById('number').value;
    var answer = document.getElementById('answer');
    console.log(skaicius);
    if (skaicius % 2 == 0) {
        answer.value = "Skaicius: " + skaicius + " yra lyginis";
    } else {
        answer.value = "Skaicius: " + skaicius + " yra nelyginis";
    }
}