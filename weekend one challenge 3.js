let speed;
//function to suspend licence when speed limit is exceeded
function checklimit() {
    let currentpoint = 0;
    const speed = parseInt(window.prompt("Enter speed!"), 10);
    const boxcontent =document.getElementById("my limit");
    //if atatements to check limit
    if(speed <= 70) {
        speed = "ok";
    }else{
        currentpoint = Math.floor((speed - 70) / 5);
        if(currentPoint >= 12) {
            speed = "license suspended";
        }else {
            speed = `${currentpoint} points`;
        }
    }
    boxcontent.textContent = speed;
    return speed;
}