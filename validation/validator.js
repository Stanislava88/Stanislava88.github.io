/**
 * @author Stanislava Kaukova(sisiivanovva@gmail.com)
 */
function validate(fieldId, id, min, max) {
    var field = document.getElementById(fieldId).value;

    if (field.length < min || field.length > max || field.search(/^[a-zA0-Z9]+/)) {
        incorrectValue(id);
    }
    else {
        correctValue(id);
    }
}

function validateEgn(fieldId, id, max) {
    var egn = document.getElementById(fieldId).value;

    if (egn.length != max) {
        incorrectValue(id);
    } else {
        correctValue(id);
    }
}

function validateAge(fieldId, id, min, max) {
    var age = document.getElementById(fieldId).value;

    if (age < min || age > max) {
        incorrectValue(id);
    } else {
        correctValue(id);
    }
}

function validateConfirm(passId1, passId2, id) {
    var pass1 = document.getElementById(passId1).value;
    var pass2 = document.getElementById(passId2).value;

    if (pass1 != pass2) {
        incorrectValue(id);
    } else {
        correctValue(id);
    }
}

function incorrectValue(id) {
    return document.getElementById(id).innerHTML = "<img src='option-unchecked.png'>This field is incorrect";
}

function correctValue(id) {
    return document.getElementById(id).innerHTML = "<img src='check.png'style='width: 20px'>";
}
