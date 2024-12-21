
const qrcode = document.querySelector("#qrcode")
const userinput = document.querySelector("#input")
const generate_code = document.querySelector("#generate_code")
const input = document.querySelector("#input")



generate_code.addEventListener("click",()=>{
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userinput.value}`
    qrcode.src = url
    
    input.value = ""
})
