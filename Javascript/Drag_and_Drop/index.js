console.log("hello");
let left = document.getElementById("left")
let right = document.getElementById("right")
let lists = document.getElementsByClassName("list")
console.log(lists);

for(let i = 0;i < lists.length;i++){
     lists[i].addEventListener('dragstart',function(e){
        let selected = e.target;
        right.addEventListener('dragover',function(e){
             e.preventDefault();
        }) 
        right.addEventListener('drop',function(e){
             right.appendChild(selected);
             selected = null;
        })
        left.addEventListener('dragover',function(e){
            e.preventDefault();
       }) 
        left.addEventListener('drop',function(e){
            left.appendChild(selected);
            selected = null;
       })
     })
}