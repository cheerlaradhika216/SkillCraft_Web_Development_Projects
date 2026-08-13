let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



const taskInput =
document.getElementById("taskInput");


const priority =
document.getElementById("priority");


const dateInput =
document.getElementById("dateInput");


const addBtn =
document.getElementById("addBtn");


const taskList =
document.getElementById("taskList");


const count =
document.getElementById("count");


let filter="all";



function save(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}



function render(){


taskList.innerHTML="";


let data=tasks.filter(t=>{

if(filter=="active")
return !t.done;


if(filter=="completed")
return t.done;


return true;

});



data.forEach((t,i)=>{


let li=document.createElement("li");


li.className=
"task "+(t.done?"completed":"");



li.innerHTML=`

<input type="checkbox"
${t.done?"checked":""}
onclick="complete(${i})">


<span>

${t.text}

<br>

<small>
${t.date || ""}
</small>

</span>


<div class="priority ${t.priority}">
${t.priority}
</div>


<div class="actions">

<button class="edit"
onclick="editTask(${i})">
✏️
</button>


<button class="delete"
onclick="removeTask(${i})">
🗑️
</button>

</div>

`;



taskList.appendChild(li);



});


count.innerText=tasks.length;


}



addBtn.onclick=()=>{


let text=
taskInput.value.trim();


if(!text)
return;



tasks.push({

text:text,

priority:priority.value,

date:dateInput.value,

done:false

});


taskInput.value="";


dateInput.value="";


save();

render();


};



function complete(i){

tasks[i].done=
!tasks[i].done;

save();

render();

}



function removeTask(i){

tasks.splice(i,1);

save();

render();

}



function editTask(i){

let text=
prompt(
"Edit task",
tasks[i].text
);


if(text){

tasks[i].text=text;

save();

render();

}

}




document.querySelectorAll(".filter")
.forEach(btn=>{


btn.onclick=()=>{


document.querySelector(".active")
.classList.remove("active");


btn.classList.add("active");


filter=
btn.dataset.filter;


render();


}

});




document.getElementById("searchInput")
.oninput=function(){


let value=this.value.toLowerCase();


document.querySelectorAll(".task")
.forEach(t=>{


t.style.display=
t.innerText.toLowerCase()
.includes(value)
?
"flex"
:
"none";


});


};





document.getElementById("clearBtn")
.onclick=()=>{


if(confirm("Remove all tasks?")){


tasks=[];

save();

render();


}

};




document.getElementById("themeBtn")
.onclick=()=>{


document.body.classList.toggle("dark");


};




render();