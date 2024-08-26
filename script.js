const input=document.querySelector("input");
const people=document.querySelector(".people")
var data=[  
     { name:"Rahul Kuamr",src : "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8Mg%3D%3D"},
     { name:"Rohit Kuamr",src : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Mohit Kuamr",src : "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Aditya Kuamr",src : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Pyush Kuamr",src : "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Kishu Kuamr",src : "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Kishan Kuamr",src : "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Rishab Kuamr",src : "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Sohan Kuamr",src : "https://images.unsplash.com/photo-1492633397843-92adffad3d1c?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Mohan Kuamr",src : "https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { name:"Sweta Gupta",src : "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]
var person='';

data.forEach(function(element){
    person+=`  <div id="people">
          <div id="img">
            <img
              src="${element.src}">
           
          </div>
          <p>${element.name}</p>
        </div>`
})
var match='';
people.innerHTML=person;
input.addEventListener("input",function(){
     match =data.filter(function(element){
return element.name.startsWith(input.value);
})
console.log(match)

var newUsers='';

match.forEach(function(element){
    newUsers +=`  <div id="people">
          <div id="img">
            <img
              src="${element.src}">
           
          </div>
          <p>${element.name}</p>
        </div>`
})
people.innerHTML=newUsers;
})


