const body=document.querySelector("body");
let buttons=document.getElementsByClassName("buttons");
buttons=Array.from(buttons);
buttons.forEach((val)=>{
    val.addEventListener("click",(e)=>{
        console.log(e.target);
        body.style.background=e.target.id;
    })
});