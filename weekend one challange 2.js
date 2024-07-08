let message;
//function to prompt user to enter student marks
function studentMarks() {
    const marks=parseInt(window.prompt("Enter student marks!"), 10);
    const result = document.getElemntById("result");
   //if statement to convert marks to grade upon enrty
   if (marks <=100 && marks >= 79){
    message ="Grade A";
   }else if(marks >= 60 && marks < 79) {
    message = "Grade B";
   }else if(marks >= 49 && marks < 59) {
    message = "Grade c";
   }else if(marks >= 40 && marks < 49) {
    message = "Grade D";
   }else if(marks <= 40){
    message = "Grade E";
   }else{
    message = console.log("invalid marks entered");
   };
   result.textContent = message;
};

