var disMain = 0;
var disInc = 0;
var disDec = 0;


// Set initial background color on page load
document.addEventListener('DOMContentLoaded', (event) => {
    updateBackgroundColor(disMain);
});

function updateBackgroundColor(value) {
    const counterElement = document.getElementById("counter");
    // First, remove any existing background color classes to avoid conflicts
    counterElement.classList.remove("bg-pink-700", "bg-green-400", "bg-red-200");

    // Then, add the correct class based on the value
    if (value > 10) {
        counterElement.classList.add("bg-green-400");
    } else { // for 0
        counterElement.classList.add("bg-pink-700");
    }
}

function incre(){
    disMain = disMain + 1;
    disInc = disInc + 1;
    if (disMain<50){
    document.getElementById("counter").innerHTML = disMain;
    document.getElementById("counter-inc").innerHTML = disInc;
    updateBackgroundColor (disMain);}
    else{
        alert("Counter limit reached");
    }

}

function decre(){
    disMain = disMain - 1;
    disDec = disDec +1;
    if(disMain>=0){
    document.getElementById("counter").innerHTML = disMain;
    document.getElementById("counter-dec").innerHTML = disDec;
    updateBackgroundColor (disMain);}
    else{
        alert("Counter limit reached");
    }
}   
