/**
 * @author Stanislava Kaukova(sisiivanovva@gmail.com)
 */

function validateForm(fieldId, id, regex, errorId) {
    var field = document.getElementById(fieldId).value;

    if (!regex.test(field)) {
        document.getElementById(errorId).setAttribute("style", "inline");
    } else {
        document.getElementById(id).innerHTML = "<img src='check.png'style='width: 20px'>";
    }
}

function validateRange(fieldId, id, minValue, maxValue, errorId) {
    var field = document.getElementById(fieldId).value;

    if (field < minValue || field > maxValue) {
        document.getElementById(errorId).setAttribute("style", "inline");
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
