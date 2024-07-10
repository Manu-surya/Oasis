document.getElementById('convert').onclick = function()
{
    let temp;
     if(document.getElementById('Celsius').checked)
     {
        temp = document.getElementById('amount').value;
        temp = Number(temp);
        let temp1 = temp;
        temp = toCelsius(temp);
        document.getElementById('result').innerHTML = temp1 + "F = " + temp + " C";
        document.getElementById('result').classList.add('updated');
     }
     else if(document.getElementById('Fahrenheit').checked)
     {
        temp = document.getElementById('amount').value;
        temp = Number(temp);
        let temp1 = temp;
        temp = toFahrenheit(temp);
        document.getElementById('result').innerHTML = temp1 + "C = " + temp + " F";
        document.getElementById('result').classList.add('updated');
     }
     else
     {
        document.getElementById('result').innerHTML =  "Please Select a unit";
     }
}

function toCelsius(temp)
{
    return (temp-32)*(5/9).toFixed(2);
}
function toFahrenheit(temp)
{
    return (temp * 9/5 + 32).toFixed(2);
}