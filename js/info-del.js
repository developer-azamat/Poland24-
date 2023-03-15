const otziv = document.querySelector('#otziv')
const otzivDiv = document.querySelector('.otziv')

const perepiska = document.querySelector('#perepiska')
const perepiskaDiv = document.querySelector('.perepiska')

const zakazi = document.querySelector('#zakazi')
const zakaziDiv = document.querySelector('.zakazi')
otziv.addEventListener('click', ()=>{
    otzivDiv.classList.remove('hidden')
    otziv.classList.add('bg-[#D2D2D2]')
    otziv.classList.remove('bg-white')

    perepiskaDiv.classList.add('hidden')
    perepiska.classList.add("bg-white")

    
    zakaziDiv.classList.add('hidden')
    zakazi.classList.add("bg-white")
})

perepiska.addEventListener('click', ()=>{
    perepiskaDiv.classList.remove('hidden')
    perepiska.classList.remove("bg-white")
    perepiska.classList.add("bg-[#D2D2D2]")

    otziv.classList.add('bg-white')
    otzivDiv.classList.add('hidden')

    zakaziDiv.classList.add('hidden')
    zakazi.classList.add("bg-white")
})

zakazi.addEventListener("click", ()=>{
    zakaziDiv.classList.remove('hidden')
    zakazi.classList.remove("bg-white")
    zakazi.classList.add("bg-[#D2D2D2]")

    perepiskaDiv.classList.add('hidden')
    perepiska.classList.add("bg-white")

    otziv.classList.add('bg-white')
    otzivDiv.classList.add('hidden')
})
