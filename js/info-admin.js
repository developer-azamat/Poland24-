const zakazi = document.querySelector("#zakazi")
const zakaziDiv = document.querySelector('.zakazi')

const generations = document.querySelector('#generation')
const generationDiv = document.querySelector('.generation')

const requists = document.querySelector("#requists")
const requistsDiv = document.querySelector('.requists')

const perepiska = document.querySelector("#perepiska")
const perepiskaDiv = document.querySelector(".perepiska")

const balance = document.querySelector('#balance')
const balanceDiv = document.querySelector('.balance')

const clients = document.querySelector("#clients")
const clientsDiv = document.querySelector(".clients")

// Добавить заказ
const zakazBtn = document.querySelector('.zakaz')
const corzinka = document.querySelector('.corzinka')
const exitCorzinka = document.querySelector('.exit-corzinka')

// spssBtn
const spssBtn = document.querySelector('#spssBtn')

zakazBtn.addEventListener('click', ()=>{
    console.log(corzinka);
    corzinka.classList.remove('top-[-250%]')
    corzinka.classList.add('top-[50%]')
})

spssBtn.addEventListener('click', ()=>{
  
    const newSps =  confirm("Вы хотите закончить оплату ?")
  
    if(newSps) {
        alert("Спасибо за внимание")
        corzinka.classList.add('top-[-250%]')
        corzinka.classList.remove('top-[50%]')
    } else {
        alert('Можете продолжить покупку !') 
    }

})

exitCorzinka.addEventListener('click', ()=>{
    corzinka.classList.add('top-[-250%]')
    corzinka.classList.remove('top-[50%]')
})


zakazi.addEventListener('click', ()=>{
    zakaziDiv.classList.remove('hidden')
    zakazi.classList.remove('bg-white')
    zakazi.classList.remove("bg-[#D2D2D2]")

    generationDiv.classList.add('hidden')
    generations.classList.add('bg-white')
    perepiskaDiv.classList.add('hidden')
    perepiska.classList.add("bg-white")
    balanceDiv.classList.add('hidden')
    balance.classList.add("bg-white")
    clientsDiv.classList.add('hidden')
    clients.classList.add('bg-white')
    requistsDiv.classList.add('hidden')
    requists.classList.add("bg-white")
})

generations.addEventListener('click', ()=>{
    generationDiv.classList.remove('hidden')
    generations.classList.remove('bg-white')
    generations.classList.add('bg-[#D2D2D2]')

    zakaziDiv.classList.add('hidden')
    zakazi.classList.add('bg-white')

    requistsDiv.classList.add('hidden')
    requists.classList.add("bg-white")
     perepiskaDiv.classList.add('hidden')
    perepiska.classList.add("bg-white")
    balanceDiv.classList.add('hidden')
    balance.classList.add("bg-white")
    clientsDiv.classList.add('hidden')
    clients.classList.add('bg-white')
})

requists.addEventListener('click', ()=>{
    requistsDiv.classList.remove('hidden')
    requists.classList.remove("bg-white")
    requists.classList.add("bg-[#D2D2D2]")

    zakaziDiv.classList.add('hidden')
    zakazi.classList.add('bg-white')
    generationDiv.classList.add('hidden')
    generations.classList.add('bg-white')
     perepiskaDiv.classList.add('hidden')
    perepiska.classList.add("bg-white")
    balanceDiv.classList.add('hidden')
    balance.classList.add("bg-white")
    clientsDiv.classList.add('hidden')
    clients.classList.add('bg-white')
})

perepiska.addEventListener("click", ()=>{
    perepiskaDiv.classList.remove('hidden')
    perepiska.classList.remove("bg-white")
    perepiska.classList.add("bg-[#D2D2D2]")

    zakaziDiv.classList.add('hidden')
    zakazi.classList.add('bg-white')
    generationDiv.classList.add('hidden')
    generations.classList.add('bg-white')
    requistsDiv.classList.add('hidden')
    requists.classList.add("bg-white")
    balanceDiv.classList.add('hidden')
    balance.classList.add("bg-white")
    clientsDiv.classList.add('hidden')
    clients.classList.add('bg-white')
})

balance.addEventListener('click', ()=>{
    balanceDiv.classList.remove('hidden')
    balance.classList.remove('bg-white')
    balance.classList.add("bg-[#D2D2D2]")

    zakaziDiv.classList.add('hidden')
    zakazi.classList.add('bg-white')
    generationDiv.classList.add('hidden')
    generations.classList.add('bg-white')
    requistsDiv.classList.add('hidden')
    requists.classList.add("bg-white")
    perepiskaDiv.classList.add('hidden')
    perepiska.classList.add("bg-white")
    clientsDiv.classList.add('hidden')
    clients.classList.add('bg-white')
})

clients.addEventListener('click', ()=>{
    clientsDiv.classList.remove('hidden')
    clients.classList.remove('bg-white')
    clients.classList.add('bg-[#D2D2D2]')

    zakaziDiv.classList.add('hidden')
    zakazi.classList.add('bg-white')
    generationDiv.classList.add('hidden')
    generations.classList.add('bg-white')
    requistsDiv.classList.add('hidden')
    requists.classList.add("bg-white")
    perepiskaDiv.classList.add('hidden')
    perepiska.classList.add("bg-white")
    balanceDiv.classList.add('hidden')
    balance.classList.add('bg-white')
})