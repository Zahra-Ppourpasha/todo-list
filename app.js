
const input=document.querySelector("input")
const ul=document.querySelector("ul")
let p=document.querySelector("p")
const btn=document.querySelector(".add-works")
const removeall=document.querySelector(".clear-works")
let todoList=JSON.parse(localStorage.getItem("works")) || []

btn.addEventListener("click",()=>{
    if(input.value!==""){
        todoList.push(input.value)
       localStorage.setItem("works",JSON.stringify(todoList))
       creatList(input.value)
    }
    else{
        p.textContent="Task cannot be empty"
        p.classList.replace("text-secondary","text-danger")
        input.classList.add("empty")
        setTimeout(() => {
            input.classList.remove("empty")
        }, 2000);
    }
    
    
})
todoList.forEach(element => {
    creatList(element)
});
input.addEventListener("keyup",function(k){
    if(k.keyCode==13){
        if(input.value!==""){
        todoList.push(input.value)
       localStorage.setItem("works",JSON.stringify(todoList))
       creatList(input.value)
    }
    else{
        p.textContent="Task cannot be empty"
        p.classList.replace("text-secondary","text-danger")
        input.classList.add("empty")
        setTimeout(() => {
            input.classList.remove("empty")
        }, 2000);
    }
    }
})
function creatList(task){
    let li=document.createElement("li")
       li.textContent=task
        ul.appendChild(li)
        li.style.color="white"
        li.style.fontSize="20px"
        p.textContent="What do you need to do"
        p.classList.replace("text-danger","text-secondary")
        input.value=null
        input.focus()
}
// function creatList(task){
//     if(input.value!==""){
//         let li=document.createElement("li")
//         li.textContent=task
//         ul.appendChild(li)
//         li.style.color="white"
//         li.style.fontSize="20px"
//         p.textContent="What do you need to do"
//         p.classList.replace("text-danger","text-secondary")
//         input.value=null
//         input.focus()
//     }
//     else{
//         p.textContent="Task cannot be empty"
//         p.classList.replace("text-secondary","text-danger")
//         input.classList.add("empty")
//         setTimeout(() => {
//             input.classList.remove("empty")
//         }, 2000);

//     }
// }
removeall.addEventListener("click",()=>{
    localStorage.clear()
    location.reload()
})