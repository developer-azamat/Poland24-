const loginPassword = document.querySelector("#login__password")
const loginEmail = document.querySelector("#login__email")
const btnVxod = document.querySelector('.btn-vxode')
const btnVxodUser = document.querySelector('.btn-vxode-user')
const warningText = document.querySelector('.warning-text')

const logUser = ()=>{
   const login = loginEmail.value.trim().toLowerCase()
    const password = loginPassword.value.trim().toLowerCase()
   if (login == "azamatjonazimov561@gmail.com"  && password == 'heartless77'){
    btnVxod.style.display = "block"
   }else if (login == "khurshid" &&  password == "7d8fv4h"){
    btnVxodUser.style.display = 'block'
   } else{
    alert('Извините ваши данные нет в наших базах !')
   }
}
window.addEventListener('keydown', (e)=>{
    if (e.key == "Enter"){
        warningText.style.display = 'none'
        logUser()
        loginEmail.value = ""
        loginPassword.value = ''
    }
})

const signUp = document.querySelector(".sign-up")
const signIn = document.querySelector(".sign-in")
const signInBtn = document.querySelector("#signIn") 
const signUpBtn = document.querySelector("#signUp")
const exitSignUp = document.querySelector(".exit-signUp");
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
   signUp.classList.remove('active')

})

exitSignIn.addEventListener('click', ()=>{
    signIn.classList.remove("active")
})


signUpBtn.addEventListener("click", () => {
    signUp.classList.add("active");
    signIn.classList.remove("active");
});
  
  exitSignUp.addEventListener("click", () => {
    signUp.classList.remove("active");
  });