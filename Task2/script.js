```javascript id="q7m5aa"
let display = document.getElementById("display");

let historyList = document.getElementById("historyList");

let sound = document.getElementById("sound");

let themeBtn = document.getElementById("themeBtn");




// Play Button Sound

function playSound(){

    if(sound){

        sound.currentTime = 0;

        sound.play();

    }

}





// Add Number / Operator

function appendValue(value){

    playSound();

    display.value += value;

}





// Clear Display

function clearDisplay(){

    playSound();

    display.value = "";

}





// Delete Last Character

function deleteNumber(){

    playSound();

    display.value =
    display.value.slice(0,-1);

}





// Percentage

function percentage(){

    playSound();


    try{


        if(display.value !== ""){

            display.value =
            eval(display.value) / 100;

        }


    }

    catch{

        display.value="Error";

    }

}





// Calculate Result

function calculate(){

    playSound();


    try{


        let expression =
        display.value;


        let result =
        eval(expression);



        addHistory(
            expression + " = " + result
        );


        display.value=result;



    }


    catch{


        display.value="Error";


    }


}







// Add History Item

function addHistory(text){


    let li =
    document.createElement("li");


    li.innerHTML=text;


    historyList.prepend(li);



    saveHistory();



}





// Save History

function saveHistory(){


    localStorage.setItem(
        "calculatorHistory",
        historyList.innerHTML
    );


}





// Load History

function loadHistory(){


    historyList.innerHTML =
    localStorage.getItem(
        "calculatorHistory"
    ) || "";


}





// Clear History

function clearHistory(){


    historyList.innerHTML="";


    localStorage.removeItem(
        "calculatorHistory"
    );


}






// Theme Change


themeBtn.onclick=function(){


    document.body.classList.toggle("light");


    let theme;


    if(
    document.body.classList.contains("light")
    )

    {

        theme="light";

        themeBtn.innerHTML="☀️";


    }

    else{


        theme="dark";

        themeBtn.innerHTML="🌙";


    }



    localStorage.setItem(
        "theme",
        theme
    );


};






// Load Theme


function loadTheme(){


    let theme =
    localStorage.getItem("theme");



    if(theme==="light"){


        document.body.classList.add("light");


        themeBtn.innerHTML="☀️";


    }


}








// Keyboard Support


document.addEventListener(
"keydown",
function(event){



let key =
event.key;



if(

(key >= "0" && key <= "9")

||

key === "."

||

key === "+"

||

key === "-"

||

key === "*"

||

key === "/"

)

{

appendValue(key);

}




else if(key==="Enter"){


    calculate();


}




else if(key==="Backspace"){


    deleteNumber();


}




else if(key==="Escape"){


    clearDisplay();


}



});






// Start App


loadHistory();

loadTheme();
```
// Scientific Mode


function toggleScientific(){

let box =
document.getElementById("scientific");


box.classList.toggle("hidden");


}





function scientific(type){


let value =
Number(display.value);



switch(type){


case "sin":

display.value =
Math.sin(value);

break;



case "cos":

display.value =
Math.cos(value);

break;



case "tan":

display.value =
Math.tan(value);

break;



case "sqrt":

display.value =
Math.sqrt(value);

break;



case "square":

display.value =
value*value;

break;



case "log":

display.value =
Math.log10(value);

break;


}


}







// AI Calculator


function aiCalculate(){


let input =
document.getElementById("aiInput")
.value.toLowerCase();



try{


if(input.includes("% of")){


let parts =
input.split("% of");


let result =
(Number(parts[0])/100)
*
Number(parts[1]);


display.value=result;

return;

}




if(input.includes("sqrt")){


let num =
input.replace("sqrt","");


display.value =
Math.sqrt(Number(num));


return;

}





if(input.includes("power")){


let parts =
input.split("power");


display.value =
Math.pow(
Number(parts[0]),
Number(parts[1])
);


return;

}




display.value =
eval(input);



}


catch{


display.value="I can't solve";

}



}