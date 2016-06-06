/**
 * @author Stanislava Kaukova(sisiivanovva@gmail.com)
 */

function validateMatching(fieldId, regex) {
    var value = document.getElementById(fieldId).value;

    if (!regex.test(value)) {
        document.getElementById(fieldId + "Error").style.display = 'inline';
        console.log("error" + fieldId);
    } else {
        document.getElementById(fieldId + "Error").style.display = 'none';
    }
}

function validateRange(fieldId, minValue, maxValue) {
    var value = document.getElementById(fieldId).value;

    if (value < minValue || value > maxValue) {
        document.getElementById(fieldId + "Error").style.display = 'inline';
    } else {
        document.getElementById(fieldId + "Error").style.display = 'none';
    }
}

function validateEquality(id1, id2) {
    if (document.getElementById(id1).value != document.getElementById(id2).value) {
        document.getElementById(id1 + "Error").style.display = 'inline';
    } else {
        document.getElementById(id1 + "Error").style.display = 'none';
    }
}
