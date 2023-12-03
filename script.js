const body=document.querySelector("body");
let buttons=document.getElementsByClassName("buttons");//html collections
buttons=Array.from(buttons);//now we can use forEach method here
buttons.forEach((val)=>{
    val.addEventListener("click",(e)=>{
        console.log(e.target);
        // body.style.background=e.target.id;
        //or
        body.style.background=val.id;
    })
});