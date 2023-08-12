const input = document.getElementById("input")
const btn = document.getElementById("btnSubscribe")
const msg = document.getElementById("message")
const main = document.querySelector("main")
const success = document.querySelector(".desktopSuccess") 
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let validator = true
    if(!input.value.trim().includes("@") || !input.value.trim().includes(".com")){
        input.style.backgroundColor = "hsla(4, 100%, 67%, 0.215)"
        input.style.borderColor = "tomato"
        msg.style.display = "flex"
        validator = false
        
    }else{
        input.style.borderColor = "green"
        msg.style.display = "none"
        input.style.backgroundColor = "transparent"
        
    }
    if(validator){
        main.style.display = "none"
        success.style.display = "flex"
    }
})
