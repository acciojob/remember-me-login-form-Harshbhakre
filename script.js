window.onload = () => {
  onSubmit();
};
  
function submitFunc(event) {
  if(event) event.preventDefault();

  let ipU = document.querySelector("#username").value;
  let ipP = document.querySelector("#password").value;
  let checkbox = document.querySelector("#checkbox").checked;

  if (checkbox) { 
    localStorage.clear();
    localStorage.setItem("username", ipU);
    localStorage.setItem("password", ipP);
    alert("Logged in as " + localStorage.getItem("username"));
    window.location.reload();
  } else {
    alert("Logged in as " + ipU);
    window.location.reload();
  }
}

let btn = document.createElement("button");
btn.setAttribute('id', "existing");
btn.innerHTML = "Login as existing user";

function onSubmit() {
  if(localStorage.getItem("username")) {	
    document.getElementById("existing").style.display = "block";
  }
}

btn.addEventListener("click", () => {
  alert("Logged in as " + localStorage.getItem("username"));
});
