let MyIsValid;

function OnClickButton(data) {
    document.getElementById('it1').value += data;
    OnEnterData();
}


function OnEnterData() {
    var data = document.getElementById('it1').value;

    if ("1234567890%*/+-×÷.())∞".includes(data[data.length - 1]) == false)
        document.getElementById('it1').value = data.substring(0, data.length - 1);
}

function ValidateData() {
    if (!MyIsValid) {
        document.getElementById('it2').style.backgroundColor = "red";
        document.getElementById('it2').textContent = "Invalid operation";
    }
}


function OnEqualButton() {

    var data = document.getElementById('it1').value;
    var newData = "";

    for (var i = 0; i < data.length; i++) {
        switch (data[i]) {
            case '÷':
                newData += "/";
                break;
            case '×':
                newData += "*";
                break;
            case '∞':
                newData += "Infinity";
                break;
            default:
                newData += data[i];
                break;
        }
        if ("1234567890%*/+-×÷.())∞".includes(data[i]) == false) {
            MyIsValid = false;
            return;
        }
    }

    MyIsValid = false;
    var str = "document.getElementById('it2').textContent = (";
    str += newData + ").toFixed(4);";
    eval(str);
    MyIsValid = true;
    document.getElementById('it2').style.backgroundColor = "white";
}   
