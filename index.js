let access_input = document.querySelector(".access_input")
let check_btn = document.querySelector(".check_btn")

let access_code = "MYSTRO23"

check_btn.addEventListener("click", ()=>{

 if (access_input.value == access_code){

    window.location = "home.html"

 } else {
    alert("The access code isn't correct, please enter valid access code")
 }

})