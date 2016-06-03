/**
 * @author Stanislava Kaukova(sisiivanovva@gmail.com)
 */

function validateLength(fieldId, id, minLength, maxLength) {
    var field = document.getElementById(fieldId).value;

    if (field.length < minLength || field.length > maxLength || field.search(/^[a-zA0-Z9]+/)) {
        document.getElementById(id).innerHTML = "<img src='option-unchecked.png'>The length of " + fieldId + " is not correct";
    }
    else {
        document.getElementById(id).innerHTML = "<img src='check.png'style='width: 20px'>";
    }
}

function validateRange(fieldId, id, minValue, maxValue) {
    var age = document.getElementById(fieldId).value;

    if (age < minValue || age > maxValue) {
        document.getElementById(id).innerHTML = "<img src='option-unchecked.png'> The valid age are between 18 and 118";
    } else {
        document.getElementById(id).innerHTML = "<img src='check.png'style='width: 20px'>";
    }
}

function validateSameness(value1, value2, id) {
    var value1 = document.getElementById(value1).value;
    var value2 = document.getElementById(value2).value;

    if (value1 != value2) {
        document.getElementById(id).innerHTML = "<img src='option-unchecked.png'> The passwords does not match";
    } else {
        document.getElementById(id).innerHTML = "<img src='check.png'style='width: 20px'>";
    }
}

