const InputBox = document.getElementById("InputBox");
const list_container = document.getElementById("list_container");

function AddTask(){
    if(InputBox.value === ''){
        alert("Please write something inside the input field");
    } else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        list_container.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    SaveData();
}

function ClearAll(){
    list_container.innerHTML = "";
    localStorage.removeItem("data");
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  
        SaveData();  
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);
function SaveData(){
localStorage.setItem("data", list_container.innerHTML);
}
function ShowData(){
    list_container.innerHTML = localStorage.getItem("data");
}
ShowData();
