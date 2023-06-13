const form =document.querySelector("form");
const content_1=document.querySelector(".card");
const content_2=document.querySelector(".content-2");
const email = document.getElementById("email");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(email.value ===""){
        document.getElementById("error").style.display = "block";
    }else{
        content_1.classList.add("hide");
        content_2.classList.remove("hide");
    }

})