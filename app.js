const sıgnInBtn=document.querySelector(".sıgnIn-Button")
const sıgnUpBtn=document.querySelector(".sıgnUp-registerButton")
const signIn=document.querySelector(".sign-in")
const signUp=document.querySelector(".sign-up")




sıgnInBtn.addEventListener("click",function(){
    document.querySelector(".container").classList.add("right-panel")
    signIn.style.borderRadius="0px 30px 30px 0px"
    signUp.style.borderRadius="30px 0px 0px 30px"
})
sıgnUpBtn.addEventListener("click",function(){
    document.querySelector(".container").classList.remove("right-panel")
    signIn.style.borderRadius="30px 0px 0px 30px"
    signUp.style.borderRadius="0px 30px 30px 0px"
})