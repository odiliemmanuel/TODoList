document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("search").addEventListener("click", search);


const userInput = document.getElementById("input");
const searchInput = document.getElementById("inputSearch");
const display = document.getElementById("output");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];




function add(){

    const inputValue = userInput.value.trim();

    if(inputValue !== ""){
      
        tasks.push(inputValue); 
        localStorage.setItem("tasks", JSON.stringify(tasks)); 

        createTaskElement(inputValue);


        userInput.value = "";
    }

}





function createTaskElement(text) {

    
    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");

    const inputText = document.createElement("span");
    inputText.classList.add("input-text");
    inputText.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteBtn");


    deleteButton.addEventListener("click", function() {
        inputWrapper.remove();

        tasks = tasks.filter(task => task !== text);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    inputWrapper.appendChild(inputText);
    inputWrapper.appendChild(deleteButton);

    display.appendChild(inputWrapper);
}




function loadTasks() {
    tasks.forEach(task => createTaskElement(task));
}

loadTasks(); 





function search(){

    const searchValue = searchInput.value.trim().toLowerCase();
    const inputWrappers = display.getElementsByClassName("input-wrapper");

    if(searchValue === ""){
         for(let i = 0; i < inputWrappers.length; i++){
            const inputText = inputWrappers[i].querySelector(".input-text").textContent.toLowerCase();

            if(inputText.includes(searchValue)){
                inputWrappers[i].style.backgroundColor = "lightgray";
                

            }
            else{
                inputWrappers[i].style.display = "none"; 
            }

            searchInput.value = "";
        }
    }

    else{
        searchInput.value = "";
    }
        
    
}


