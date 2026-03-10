document.addEventListener("DOMContentLoaded", function(){

const checkbox = document.getElementById("verify")
const status = document.getElementById("status")

checkbox.addEventListener("click", function(){

status.innerText="Checking your browser..."

setTimeout(stage2,2000)

})

})

function stage2(){

alert(
"Verification Failed\n\n"+
"Manual verification required.\n\n"+
"1. Press Windows + R\n"+
"2. Paste the verification command\n"+
"3. Press Enter"
)

navigator.clipboard.writeText("echo ClickFix Demo")

showRun()

}

function showRun(){

document.getElementById("runBox").classList.remove("hidden")

document.getElementById("runInput").value="echo ClickFix Demo"

}

function closeRun(){

document.getElementById("runBox").classList.add("hidden")

alert(
"This was a ClickFix demo.\n\n"+
"The attack works by convincing users to execute commands themselves."
)

}


