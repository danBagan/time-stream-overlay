function light_mode() {

    var isDark = true;
    var timeText = document.getElementById("time");
    if(isDark){
        timeText.style.color = "white";
    }else{
        timeText.style.color = "black";
    }
    isDark = !isDark;
    /* 
    _lightmode = document.getElementById("time");
    if(_lightmode.style.color != "white"){
        _lightmode.style.color = "black";
    }else{
        _lightmode.style.color = "white";
    }
    
    _lightmode.style.color = "white";
    */
}