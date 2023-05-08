


let btns = document.querySelectorAll("button"),
    wrapper = document.querySelector("#first");

//console.log(btns[0].classList.length);       
//console.log(btns[0].classList.item(0));       
//console.log(btns[0].classList.add("firstBtn"));

/*

console.log(btns[0].classList.remove("orange"));
console.log(btns[0].classList.item(0));
  
*/

/*

console.log(btns[0].classList.item(0));
console.log(btns[0].classList.toggle("orange"));
console.log(btns[0].classList.item(0));
console.log(btns[0].classList.toggle("orange"));
console.log(btns[0].classList.item(1));
console.log(btns[0].classList.contains("orange"));

if (btns[0].classList.contains("orange")){
    alert("First buttom has 'orange class'");
}

*/


/*

btns[0].addEventListener("click", ()=> {
    if(!btns[1].classList.contains("orange")){
       btns[1].classList.add("orange"); 
    } else {
        alert(`Second button already has 'orange' class`);
        btns[1].classList.remove("orange");
    }
});

*/

/*

btns[0].addEventListener("click", ()=> {
    btns[2].classList.toggle("violet");
});


console.log(btns[0].className);
//console.log(btns[2].classList.item("all"));

*/

/*

wrapper.addEventListener("click", (event)=>{
    //console.dir(event.target);
    if(event.target && event.target.tagName == "BUTTON"){
        console.log("Button clicked");
    }
});

*/

/*

wrapper.addEventListener("click", (event)=>{
    //console.dir(event.target);
    if(event.target && event.target.classList.contains("orange")){
        console.log("Orange button clicked");
    }
});

*/

/*

wrapper.addEventListener("click", (event)=>{
    //console.dir(event.target);
    if(event.target && event.target.tagName == "BUTTON"){
        console.log("Button clicked");
    }
});

*/



/*

btns.forEach(btn => {
    btn.addEventListener("click", ()=> {
        console.log("You clicked button");
    });
});

*/

wrapper.addEventListener("click", (event)=>{
    //console.dir(event.target);
    if(event.target && event.target.matches("button.orange")){
        console.log("Orange clicked");
    }
});



let btn = document.createElement("button");
btn.classList.add("violet");
wrapper.append(btn);