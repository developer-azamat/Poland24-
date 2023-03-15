const minusBody = document.querySelectorAll('.fa-minus')
const plusBody = document.querySelectorAll('.fa-plus')

document.addEventListener("click", (e)=>{
    let target = e.target
  
    if (target.classList.contains("fa-minus")){
  
        const cartBody = target.parentElement.parentElement.querySelector('.list-body')
        cartBody.classList.add("hidden")
  
        if (target.classList.contains("fa-minus")){
            target.classList.replace("fa-minus", "fa-plus")
        }
  
    } else if (target.classList.contains("fa-plus")){
  
        const cartBody = target.parentElement.parentElement.querySelector('.list-body')
        cartBody.classList.remove("hidden")
  
        if (target.classList.contains("fa-plus")){
            target.classList.replace("fa-plus", "fa-minus")
  
        }
    }
   
})