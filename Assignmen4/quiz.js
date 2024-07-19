let score = 0;
let Q1=prompt("JS stand for?");
  if(Q1.toLowerCase()=="javascript")
    { 
        alert("Correct Answer!");
        score++;
    }else
    {
        alert("wrong answer. The correct answer is javascript");
    }
let Q2=prompt("What is the square root of 400?");
if(Q2.toLowerCase()==20){
    alert("Correct Answer!");
    score++;
}
else{
    alert("wrong answer. The correct answer is 20");
}
let Q3=prompt("Which food item never spoils?");
if(Q3.toLowerCase()=="honey"){
    alert("Correct Answer!");
    score++;
}
else{
    alert("wrong answer. The correct answer is honey");
}
if(score==3){
    alert("Great job. Your Score is 3 out of 3");
}
else{
    alert("Your score is"+" "+score+" "+"out of 3. better luck next time :)");
}