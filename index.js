document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("search").addEventListener("click", search);


const userInput = document.getElementById("input");
const searchInput = document.getElementById("inputSearch");
const display = document.getElementById("output");


function add(){

    

    const inputValue = userInput.value.trim();

    if(inputValue !== ""){
      

        const inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input-wrapper");

        const inputText = document.createElement("span");
        inputText.classList.add("input-text");
        inputText.textContent = inputValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteBtn");

    
        deleteButton.addEventListener("click", function() {
            inputWrapper.remove();
        });

        inputWrapper.appendChild(inputText);
        inputWrapper.appendChild(deleteButton);

        display.appendChild(inputWrapper);

        userInput.value = "";
    }

}




function search(){

    const searchValue = searchInput.value.trim().toLowerCase();
    const inputWrappers = display.getElementsByClassName("input-wrapper");

     for(let i = 0; i < inputWrappers.length; i++){
        const inputText = inputWrappers[i].querySelector(".input-text").textContent.toLowerCase();

        if(inputText.includes(searchValue)){
            inputWrappers[i].style.backgroundColor = "lightgray";
            

        }
         searchInput.value = "";
       
    }
     console.log(searchValue);
    

   
}