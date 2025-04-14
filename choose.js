let buttons = document.querySelectorAll(".choose-button")
let items = document.querySelectorAll(".choose-item")
let tap = document.querySelector(".work-button")
let clickCount = 0
let circle = document.querySelectorAll(".technologies-circle")
let technologies = document.querySelectorAll(".technologies-p")

buttons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        buttons.forEach(btn=>btn.classList.remove("active"))
        items.forEach(itm=>itm.classList.remove("choose-active"))
        button.classList.add("active")
        items[index].classList.add("choose-active")
    })
})

circle.forEach((crcle,index)=>{
    crcle.addEventListener("click",()=>{
        circle.forEach(crc=>crc.classList.remove("cirle-active"))
        technologies.forEach(thn=>thn.classList.remove("pactive"))
        crcle.classList.add("cirle-active")
        technologies[index].classList.add("pactive")
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

let forma = document.querySelector(".forma")
let submitButton = document.querySelector(".base-button")

forma.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let fullName = document.querySelector(".bobs").value
    let email = document.querySelector(".bobsu").value
    let phoneNumber = document.querySelector(".bobsun").value
    let describe = document.querySelector(".bobsuno").value
    let photo = document.querySelector(".input__file")
    let documento = document.querySelector(".input__file2")
    console.log(fullName.length)
    if(fullName.length<3 || email.length<7 || phoneNumber.length<10 || describe.length<3){
        alert("Заполните обязательные поля *все")
        return
    }
    let allFiles = [...photo.files, ...documento.files]
    let invalidFiles = allFiles.filter(file => !file.type.match("image.*"))
    if (invalidFiles.length>0){
        alert("сюда только картинки")
        return
    }
    let botToken = "7864396949:AAFTyYlITfwM61wgBSVyYavKzXOLefRnWd0"
    let chatId = "6907683304"
    let message = `😮😮 Новая заявка 😮😮 :\n\n 
    📃 имя: ${fullName} \n
    📩 почта: ${email} \n
    📞 Номер телефона:  ${phoneNumber} \n
    🌃 фотка: ${photo} \n
    🗓 описание: ${describe} \n
    📜 Документ: ${documento}`
    try {
        let response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id:chatId,
                text: message
            })
        }

        )
        let result = await response.json()
        if (!result.ok ){
            throw new Error("ээ нуу тут короче ошибка")
        }
        for (let file of allFiles){

        }
        alert ("Все готово ваши сообщения отправлены в пентагон")
    } catch(error){
        console.error(error)
        alert ("ваши данные не были отправлены в пентагон по ошибке")
    }
})