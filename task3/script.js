const questions = {

science:[

{
q:"What is the largest planet in our solar system?",
a:["Earth","Mars","Jupiter","Venus"],
c:2
},

{
q:"What gas do humans breathe?",
a:["Carbon Dioxide","Oxygen","Nitrogen","Hydrogen"],
c:1
},

{
q:"How many bones are in an adult human body?",
a:["206","300","150","250"],
c:0
},

{
q:"The Sun is a?",
a:["Planet","Star","Galaxy","Moon"],
c:1
},

{
q:"Speed of light is approximately?",
a:["300,000 km/s","100 km/s","5000 km/s","1 km/s"],
c:0
},

{
q:"Which organ pumps blood?",
a:["Brain","Lungs","Heart","Kidney"],
c:2
},

{
q:"DNA stands for?",
a:[
"Deoxyribonucleic Acid",
"Digital Network Algorithm",
"Data Network Access",
"None"
],
c:0
},

{
q:"Which vitamin comes from sunlight?",
a:["Vitamin A","Vitamin B","Vitamin C","Vitamin D"],
c:3
},

{
q:"Earth revolves around?",
a:["Moon","Mars","Sun","Venus"],
c:2
},

{
q:"Largest animal on Earth?",
a:["Elephant","Blue Whale","Shark","Giraffe"],
c:1
}

],



technology:[

{
q:"HTML is used for?",
a:["Structure of Web Pages","Database","Gaming","Networking"],
c:0
},

{
q:"CSS is used for?",
a:["Design","Programming","Storage","Security"],
c:0
},

{
q:"JavaScript runs mainly on?",
a:["Browser","Printer","Camera","Monitor"],
c:0
},

{
q:"Android apps are commonly developed using?",
a:["Java/Kotlin","Python","HTML","C"],
c:0
},

{
q:"RAM is?",
a:["Permanent Storage","Temporary Memory","Processor","Battery"],
c:1
},

{
q:"CPU means?",
a:[
"Central Processing Unit",
"Computer Personal Unit",
"Control Program Unit",
"None"
],
c:0
},

{
q:"Which is a database?",
a:["MySQL","HTML","CSS","Photoshop"],
c:0
},

{
q:"GitHub is used for?",
a:["Code Hosting","Video Editing","Gaming","Music"],
c:0
},

{
q:"Python was created by?",
a:["Guido van Rossum","Bill Gates","Elon Musk","Steve Jobs"],
c:0
},

{
q:"AI stands for?",
a:["Artificial Intelligence","Automatic Internet","Advanced Input","None"],
c:0
}

],



general:[

{
q:"Capital of India?",
a:["Mumbai","Delhi","Chennai","Kolkata"],
c:1
},

{
q:"National animal of India?",
a:["Lion","Tiger","Elephant","Peacock"],
c:1
},

{
q:"Largest continent?",
a:["Asia","Africa","Europe","Australia"],
c:0
},

{
q:"Who wrote Indian National Anthem?",
a:[
"Rabindranath Tagore",
"Mahatma Gandhi",
"APJ Abdul Kalam",
"Subhash Chandra Bose"
],
c:0
},

{
q:"Currency of Japan?",
a:["Dollar","Euro","Yen","Rupee"],
c:2
},

{
q:"How many states are in India?",
a:["25","28","30","35"],
c:1
},

{
q:"World Environment Day is on?",
a:["June 5","May 1","August 15","January 26"],
c:0
},

{
q:"Largest ocean?",
a:["Atlantic","Indian","Pacific","Arctic"],
c:2
},

{
q:"National flower of India?",
a:["Rose","Lotus","Sunflower","Lily"],
c:1
},

{
q:"First Prime Minister of India?",
a:[
"Jawaharlal Nehru",
"Narendra Modi",
"Gandhi",
"Rajendra Prasad"
],
c:0
}

]

};



let username="";

let quiz=[];

let current=0;

let score=0;

let points=0;

let xp=0;

let level=1;

let streak=0;

let timer;

let timeLeft=15;

let difficulty="medium";






// LOAD USER

window.onload=function(){

let saved=
localStorage.getItem("username");


if(saved){

username=saved;

showHome();

}

};







function login(){


let name=
document.getElementById("username").value;


if(name.trim()==""){

alert("Please enter your name");

return;

}


username=name;


localStorage.setItem(
"username",
username
);


showHome();

}






function showHome(){


document
.getElementById("login-screen")
.classList.add("hide");


document
.getElementById("start-screen")
.classList.remove("hide");


document
.getElementById("playerName")
.innerHTML=
"👤 "+username;


showLeaderboard();


}







function logout(){


localStorage.removeItem("username");


location.reload();


}







function setDifficulty(level){


difficulty=level;


alert(
"Difficulty Selected : "+level
);


}







function startQuiz(type){


document
.getElementById("clickSound")
.play();


quiz=
shuffle([...questions[type]]);


current=0;

points=0;

xp=0;

streak=0;



document
.getElementById("start-screen")
.classList.add("hide");


document
.getElementById("quiz-screen")
.classList.remove("hide");


loadQuestion();


}







function shuffle(array){

return array.sort(
()=>Math.random()-0.5
);

}







function loadQuestion(){


clearInterval(timer);



if(difficulty=="easy")

timeLeft=25;


else if(difficulty=="hard")

timeLeft=10;


else

timeLeft=15;




document
.getElementById("time")
.innerText=timeLeft;




timer=setInterval(()=>{


timeLeft--;


document
.getElementById("time")
.innerText=timeLeft;


if(timeLeft<=0){

nextQuestion();

}


},1000);





let q=quiz[current];


document
.getElementById("question-number")
.innerText=current+1;



document
.getElementById("question")
.innerText=q.q;



let box=
document.getElementById("answers");


box.innerHTML="";



q.a.forEach((ans,index)=>{


let button=
document.createElement("button");


button.innerText=ans;


button.onclick=
()=>checkAnswer(button,index);



box.appendChild(button);


});





document
.getElementById("progress-bar")
.style.width=

(current/quiz.length)*100+"%";



}








function checkAnswer(btn,index){


clearInterval(timer);


let correct=
quiz[current].c;



let buttons=
document.querySelectorAll(
"#answers button"
);



buttons.forEach(
b=>b.disabled=true
);



if(index===correct){


btn.classList.add("correct");


score++;

streak++;

points+=10;

xp+=20;



if(streak>=3)

points+=5;



document
.getElementById("correctSound")
.play();



}

else{


btn.classList.add("wrong");


buttons[correct]
.classList.add("correct");


streak=0;



document
.getElementById("wrongSound")
.play();


}



}








function nextQuestion(){


current++;


if(current<quiz.length)

loadQuestion();


else

showResult();


}








function useHint(){


let answer=
quiz[current].a[
quiz[current].c
];


alert(
"🤖 AI Hint : Answer starts with "
+
answer.charAt(0)
);


}








function fiftyFifty(){


let correct=
quiz[current].c;


let buttons=
document.querySelectorAll(
"#answers button"
);



let removed=0;


buttons.forEach((btn,index)=>{


if(index!==correct && removed<2){


btn.style.display="none";


removed++;

}


});


}








function showResult(){


clearInterval(timer);



saveScore();



document
.getElementById("quiz-screen")
.classList.add("hide");


document
.getElementById("result-screen")
.classList.remove("hide");



level=
Math.floor(xp/100)+1;



document
.getElementById("score")
.innerHTML=

points+" 🎯";



document
.getElementById("level")
.innerHTML=

"⭐ Level "+level;



document
.getElementById("xp")
.innerHTML=

"⚡ XP : "+xp;



createConfetti();


}







function saveScore(){


let best=
localStorage.getItem("bestScore");



if(best==null || points>best){


localStorage.setItem(
"bestScore",
points
);


}


}







function showLeaderboard(){


let best=
localStorage.getItem("bestScore");



if(best){


document
.getElementById("bestScore")
.innerHTML=

"🏆 Best Score : "+best;


}


}







function createConfetti(){


let area=
document.getElementById("confetti");



for(let i=0;i<80;i++){


let piece=
document.createElement("div");


piece.className="confetti";


piece.style.left=
Math.random()*100+"%";


piece.style.background=
"hsl("+Math.random()*360+",100%,50%)";


piece.style.animationDuration=
(2+Math.random()*3)+"s";



area.appendChild(piece);


}


}








function restartQuiz(){


location.reload();


}






document
.getElementById("next-btn")
.onclick=
nextQuestion;