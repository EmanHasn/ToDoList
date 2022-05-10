var push = document.querySelector("#push");
var inp = document.querySelector('input');
var tasks = document.querySelector('#tasks')
push.addEventListener('click' , addtask)
function addtask(){
    if (inp.value == "") {
         alert("please enter a task")
        }
    else{
    tasks.innerHTML += 
    `<div class="task">
    <span id ="taskname">
     ${inp.value} 
     </span>
     <button class = "delete">
     <i class="fas fa-trash-alt"></i> 
      </button>
     </div>`;
    inp.value = "";
}  
var deleteitem = document.querySelectorAll(".delete");

for ( var i = 0; i< deleteitem.length ; i++){
    deleteitem[i].onclick = function(){
        this.parentElement.remove();
        }
    }
    var tasksf = document.querySelectorAll(".task");
    for(var i =0; i< tasksf.length; i++){
        tasksf[i].onclick = function(){
            this.classList.toggle('completed')
        }
    }
}

