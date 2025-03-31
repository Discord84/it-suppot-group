let buttons = document.querySelectorAll(".choose-button")
let items = document.querySelectorAll(".choose-item")
let tap = document.querySelector(".work-button")
let clickCount = 0

buttons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        buttons.forEach(btn=>btn.classList.remove("active"))
        items.forEach(itm=>itm.classList.remove("choose-active"))
        button.classList.add("active")
        items[index].classList.add("choose-active")
    })
})

tap.addEventListener("click",()=>{
    clickCount++
    let numberElement=document.createElement("div")
    numberElement.className="click-number"
    numberElement.textContent=`+${clickCount}`
    let item=tap.getBoundingClientRect()
    numberElement.style.right="20px"
    numberElement.style.top="50px"
    tap.parentElement.appendChild(numberElement)
    setTimeout(()=>{
        numberElement.remove()
    },1000)
    new Audio("music/click.mp3").play().catch(e=>{})
})
