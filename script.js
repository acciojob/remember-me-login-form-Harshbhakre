window.onload = onSubmit;
function submitFunc() {  
let ipU = document.querySelector("#username").value
let ipP = document.querySelector("#password").value
let checkbox = document.querySelector("#checkbox").checked;
if(checkbox){ 
	localStorage.clear()
	localStorage.setItem("Username",ipU)
	localStorage.setItem("Password",ipP)
	alert("Logged in as " + localStorage.getItem("Username"));    
window.location.reload();
}else{
	alert("Logged in as " +ipU);
	localStorage.clear()
}
}
let btn= document.createElement("button")
	btn.setAttribute('id',"existing")
    btn.innerHTML = "Login as existing user"
function onSubmit() {
	if(localStorage.getItem("Username")){	
    document.body.appendChild(btn);
	}
}
btn.addEventListener("click",()=>{
	alert("Logged in as " + localStorage.getItem("Username"))
})
