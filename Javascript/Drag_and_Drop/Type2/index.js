let items = document.getElementsByTagName("li")
let box = document.getElementsByClassName("box")[0]
console.log("jdsfsa",items);
let selected = null;
for(let item of items){
    item.addEventListener("dragstart",(e)=>{
        selected = e.target;   
    })
}

box.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
box.addEventListener("drop",(e)=>{
    e.preventDefault();
    if (selected) {
        box.appendChild(selected); 
        selected = null;
    }
})