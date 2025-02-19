
// Function to get the time and store it to a variable
function getTime(){
    //variable for storing the Date() object
    let a;

    //Update the Time Display every second. For obvious reasons... It's a clock
    setInterval(()=>{
        a = new Date();
        timeString = ('0' + a.getHours()).slice(-2) + ":" + ('0'+a.getMinutes()).slice(-2) + ":" + ('0'+a.getSeconds()).slice(-2);
        document.getElementById('time').innerHTML = timeString;
    }, 1000);
}

// TO FIX: Clean up code. Make it smoother and more efficient. Slapped this together. Rusty.
function hideSelector(){

    //Set Boolean to false to begin with
    let pressedKey = false;

    //get First Element to be hidden
    const element = document.getElementById("toggleHint");

    //Hide the first element
    element.style.display = element.style.display === "none" ? "block" : "none";

    //get the second one
    const element2 = document.getElementById("selector-div");

    //Hide the second one
    element2.style.display = element2.style.display === "none"?"block":"none";


    // Listen for the space bar to be pressed and do stuff.
    document.addEventListener("keydown", function(event){
        if(event.key == " " && pressedKey==true){
            event.preventDefault();
            hideSelector();
            //Flip boolean
            pressedKey = !pressedKey;
        }
    })
}
//Runs on window load
window.onload=function(){
    //Checking to see if localStorage has stored anything
    if(localStorage.length > 0){
        //IF it has something stored then change the font on the page to the name of localStorage ite
        document.getElementById("time").style.fontFamily=localStorage.getItem("lastUsedFont").toString(); 
        console.log("[FONT SET: "+localStorage.getItem("lastUsedFont")+" FROM LOCAL STORAGE]");
    }else{
        //IF NOT then set the lastUsedFont key with the value of the current font name 
        localStorage.setItem("lastUsedFont",document.getElementById("time").style.fontFamily);
    }
// AND finally get the time and display it
    getTime();
}




var changeFont = function(font){

    // Grab the element holding the time and set it's font to that of the selection
    document.getElementById("time").style.fontFamily = font.value;
    let grabFont = document.getElementById("time").style.fontFamily = font.value;

    //
    localStorage.setItem("lastUsedFont", grabFont);
    console.log("[LOCAL STORAGE(+)]: "+localStorage.getItem("lastUsedFont"));
}