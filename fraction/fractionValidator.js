/**
 * Created by Stanislava on 06.06.16.
 */
function isFraction(fieldId) {
    var fraction = document.getElementById(fieldId).value;

    var pattern = new RegExp("^\[0-9]{1,10}([, .][0-9]{1,5})$");
    if (!pattern.test(fraction)) {
        document.getElementById("message").innerHTML = "This fraction is not valid!!!".fontcolor('red');
        document.getElementById("fraction").style.borderColor = 'red';
        document.getElementById("display").style.display = 'inline';
    } else {
        document.getElementById("message").innerHTML = "This fraction is valid!".fontcolor('green');
        document.getElementById("fraction").style.borderColor = 'green';
        document.getElementById("display").style.display = 'none';
    }
}
