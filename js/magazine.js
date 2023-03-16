const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");
const signInBtn = document.querySelector("#signIn");
const signUpBtn = document.querySelector("#signUp");
const exitSignIn = document.querySelector(".exit-signIn");
const exitSignUp = document.querySelector(".exit-signUp");

window.addEventListener("click", (e) => {
  let target = e.target;

  if (target.classList.contains("fa-plus")) {
    target.classList.replace("fa-plus", "fa-minus");
    const sideBarBody = target.parentElement.parentElement.childNodes[3];
    sideBarBody.classList.remove("hidden");
  } else if (target.classList.contains("fa-minus")) {
    target.classList.replace("fa-minus", "fa-plus");

    const sideBarBody = target.parentElement.parentElement.childNodes[3];
    sideBarBody.classList.add("hidden");
  }
});



// Добавить заказ
const zakazBtn = document.querySelector(".zakaz");
const corzinka = document.querySelector(".corzinka");
const exitCorzinka = document.querySelector(".exit-corzinka");

// spssBtn
const spssBtn = document.querySelector("#spssBtn");

zakazBtn.addEventListener("click", () => {
  console.log(corzinka);
  corzinka.classList.remove("top-[-250%]");
  corzinka.classList.add("top-[50%]");
});

spssBtn.addEventListener("click", () => {
  const newSps = confirm("Вы хотите закончить оплату ?");

  if (newSps) {
    alert("Спасибо за внимание");
    corzinka.classList.add("top-[-250%]");
    corzinka.classList.remove("top-[50%]");
  } else {
    alert("Можете продолжить покупку !");
  }
});

exitCorzinka.addEventListener("click", () => {
  corzinka.classList.add("top-[-250%]");
  corzinka.classList.remove("top-[50%]");
});

signInBtn.addEventListener("click", () => {
  signIn.classList.add("active");
  signUp.classList.remove("active");

});

exitSignIn.addEventListener("click", () => {
  signIn.classList.remove("active");
});

signUpBtn.addEventListener("click", () => {
    signUp.classList.add("active");
    signIn.classList.remove("active");
});
  
  exitSignUp.addEventListener("click", () => {
    signUp.classList.remove("active");
  });
