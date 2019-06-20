//ex 1
function sum() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var ansSum = document.getElementById("answer_sum");
    ansSum.value = num1 + num2;
}

//ex 2
function maxOf() {
    var numMax1, numMax2, numMax3;
    numMax1 = Number(document.getElementById("numberMax1").value);
    numMax2 = Number(document.getElementById("numberMax2").value);
    numMax3 = Number(document.getElementById("numberMax3").value);
    var ansMax = document.getElementById("answer_max");

    if (numMax1 > numMax2 && numMax1 > numMax3) {
        ansMax.value = numMax1;
    } else if (numMax2 > numMax1 && numMax2 > numMax3) {
        ansMax.value = numMax2;
    } else if (numMax3 > numMax1 && numMax3 > numMax1) {
        ansMax.value = numMax3;
    }
}

//ex 3
function isPrime() {
    var numPri = document.getElementById('numberPrime').value;
    var c = 0;

    for (i = 1; i <= numPri; i++) {
        if (numPri % i == 0) {
            c = c + 1;
        }
    }
    if (c == 2) {
        document.getElementById('answer_prime').innerHTML = numPri + ' is a Prime number.';
    } else {
        document.getElementById('answer_prime').innerHTML = numPri + ' is Not a Prime number.'
    }
}

// ex 4
function reversed() {
    var forward = document.getElementById('word_rev').value;
    var backward = forward.split("").reverse().join("");
    document.getElementById('answer_reverse').innerHTML = backward;
}




//ex 5
function showHide(elem) {
    if (elem.selectedIndex != 0) {
        for (var i = 0; i < divsO.length; i++) {
            divsO[i].style.display = 'none';
        }
        document.getElementById('div' + elem.value).style.display = 'block';
    }
}

window.onload = function () {
    divsO = document.getElementById("frmMyform").getElementsByTagName('div');
}
