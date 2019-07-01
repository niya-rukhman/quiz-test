function checkAnswer(){
let Q1 = document.getElementById("#www").value;
let Q2 = document.getElementById("#hone").value;
let Q3 = document.getElementById("#comment").value;
let Q4 = document.getElementById("#bcolor").value;
let Q5 = document.getElementById("#ahw").value;        
// let totalMarks = 5;
let addNumb = 0;

  if(Q1 == "a"){
       ++addNumb;
   }
  if(Q2 == "c"){
       ++addNumb;
   }
  if(Q3 == "d"){
       ++addNumb;
   }
  if(Q4 == "c"){
   ++addNumb;
   }
  if(Q5 == "a") {
       ++addNumb;
   }
//    if(all questions are correct)
    alert("you got" + addNumb +"/5 marks" );
}