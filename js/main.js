const signUp = document.querySelector(".sign-up")
const signIn = document.querySelector(".sign-in")
const signInBtn = document.querySelector("#signIn") 
const signUpBtn = document.querySelector("#signUp")
const exitSignIn = document.querySelector(".exit-signIn")

const exitModal = document.querySelector(".exit-modal")
const zakaz = document.querySelector(".zakaz")
const modal = document.querySelector(".modal")
console.log(modal);
zakaz.addEventListener("click", ()=>{
    modal.classList.add("active") 
})


exitModal.addEventListener("click", ()=>{
    modal.classList.remove("active") 
})

signInBtn.addEventListener("click", ()=>{
   signIn.classList.add("active")
})

exitSignIn.addEventListener('click', ()=>{
    signIn.classList.remove("active")
})
