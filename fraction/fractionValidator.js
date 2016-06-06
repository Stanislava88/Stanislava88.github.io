/**
 * Created by Stanislava on 06.06.16.
 */
function validateFraction(fieldId) {
    var fraction = document.getElementById(fieldId).value;
    var pattern = /\b\d{1,10}[.]\d{1,5}$\b/;

    var counter = countSeparator(fraction);

    if (!pattern.test(fraction) || counter > 1) {
        document.getElementById("message").innerHTML = "This fraction is not valid!!!".fontcolor('red');
        document.getElementById("fraction").style.borderColor = 'red';
        document.getElementById("display").style.display = 'inline';
    } else {
        document.getElementById("message").innerHTML = "This fraction is valid!".fontcolor('green');
        document.getElementById("fraction").style.borderColor = 'green';
        document.getElementById("display").style.display = 'none';
    }
}

function countSeparator(fraction) {
    var counter = 0;
    for (var i in fraction) {
        if (fraction[i] == '.') {
            counter++;
        }
    }
    return counter;
}