let marks;
//function to prompt user to enter students marks
function studentMarks() {
    const marks=parseInt(window.prompt("Enter students Marks!"), 10);
    const result =document.getElementById("result");
    //if statement to convert marks to grade upon entry
    if(marks<=100 && marks >=79) {
        marks ="Grade A";
    }else if(marks >=60 && marks < 79) {
        marks ="Grade B";
    }else if(marks >=49 && marks < 59) {
        marks = "Grade C";
    }else if(marks >=40 && marks < 49) {
        marks = "Grade D";
    }else if(marks <= 40){
        marks ="Grae E";
    }else{
        marks = console.log("invalid marks entered");
    };
    result.textContent = marks;
    return  marks;
};