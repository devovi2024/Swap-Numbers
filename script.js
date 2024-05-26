
function swapValues() {
    let value1 = document.getElementById('input1').value;
    let value2 = document.getElementById('input2').value;
    let value3 = document.getElementById('input3').value;
    let value4 = document.getElementById('input4').value;
    let value5 = document.getElementById('input5').value;

    let myInputs = document.getElementById('myInputs')

    myInputs.innerText = `Input Values: ${value1}  ${value2}  ${value3}  ${value4}  ${value5}`

    let temp = value1.value;
value1.value = value5.value;
value5.value = value4.value;
value4.value = value3.value;
value3.value = value2.value;
value2.value = temp;



    document.getElementById('input1').value = value1;
    document.getElementById('input2').value = value2;
    document.getElementById('input3').value = value3;
    document.getElementById('input4').value = value4;
    document.getElementById('input5').value = value5;


let result = document.getElementById('result');
result.innerHTML = `Swapped values: ${input1.value}   ${input5.value}   ${input4.value}   ${input3 .value}   ${input5.value}`;
}


