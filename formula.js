// getElementById() returns an Element object representing the element whose id properly matches the specified String.
var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue,outputTypeValue;

//use the .addEventListener() to set up the function that will be called whenever the specified event is delivered to the target
//add 'keyup' event to fire when key is released and add 'change' event so that it is fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user.
input.addEventListener("keyup", theAnswer);
inputType.addEventListener("change", theAnswer);
outputType.addEventListener("change", theAnswer);

inputTypeValue = inputType.value;
outputTypeValue = outputType.value;

function theAnswer(){
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;

    if(inputTypeValue === "millimeter" && outputTypeValue==="centimeter"){

        output.value = Number(input.value) / 10;
    }else if(inputTypeValue === "millimeter" && outputTypeValue==="meter"){

        output.value = Number(input.value) / 1000;
    }else if(inputTypeValue === "millimeter" && outputTypeValue==="inch"){

        output.value = Number(input.value) / 25.4;
    }else if(inputTypeValue === "millimeter" && outputTypeValue==="millimeter"){

        output.value = input.value
    }

    if(inputTypeValue === "centimeter" && outputTypeValue==="millimeter"){

        output.value = Number(input.value) * 10;
    }else if(inputTypeValue === "centimeter" && outputTypeValue==="meter"){

        output.value = Number(input.value) / 100;
    }else if(inputTypeValue === "centimeter" && outputTypeValue==="inch"){

        output.value = Number(input.value) / 2.54;
    }else if(inputTypeValue === "centimeter" && outputTypeValue==="centimeter"){

        output.value = input.value
    }

    if(inputTypeValue === "meter" && outputTypeValue==="centimeter"){

        output.value = Number(input.value) * 100;
    }else if(inputTypeValue === "meter" && outputTypeValue==="millimeter"){

        output.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "meter" && outputTypeValue==="inch"){

        output.value = Number(input.value) * 39.37;
    }else if(inputTypeValue === "meter" && outputTypeValue==="meter"){

        output.value = input.value
    }

    if(inputTypeValue === "inch" && outputTypeValue==="centimeter"){

        output.value = Number(input.value) * 2.54;
    }else if(inputTypeValue === "inch" && outputTypeValue==="meter"){

        output.value = Number(input.value) / 39.37;
    }else if(inputTypeValue === "inch" && outputTypeValue==="millimeter"){

        output.value = Number(input.value) * 25.4;
    }else if(inputTypeValue === "inch" && outputTypeValue==="inch"){

        output.value = input.value
    }

}



