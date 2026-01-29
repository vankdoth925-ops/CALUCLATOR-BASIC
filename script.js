let display = document.getElementById('display');

function appendValue(val){
    display.value = display.value+val;
}

function clearAll(){
    display.value="";
}

function deLete(){
    display.value = display.value.slice(0,-1);
}

function evaluateValue(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value="error"
    }
}
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Numbers and operators
    if (
        (key >= "0" && key <= "9") ||
        key === "+" || key === "-" ||
        key === "*" || key === "/" ||
        key === "%" || key === "."
    ) {
        appendValue(key);
    }

    // Enter = calculate
    else if (key === "Enter") {
        event.preventDefault(); // stop form refresh
        evaluateValue();
    }

    // Backspace = delete
    else if (key === "Backspace") {
        deLete();
    }

    // Escape = clear
    else if (key === "Escape") {
        clearAll();
    }
});