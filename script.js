document.addEventListener("DOMContentLoaded", function () {

const checkbox = document.getElementById("verify");
const status = document.getElementById("status");

if (!checkbox) {
    console.log("Checkbox not found");
    return;
}

checkbox.addEventListener("change", function () {

status.innerText = "Checking your browser...";

setTimeout(stage2, 2000);

});

});

function stage2() {

alert(
"Verification Failed\n\n" +
"Manual verification required.\n\n" +
"1. Press Windows + R\n" +
"2. Paste the verification command\n" +
"3. Press Enter"
);

if (navigator.clipboard) {
navigator.clipboard.writeText("echo ClickFix Attack demo");
}

showRun();

}

function showRun() {

const runBox = document.getElementById("runBox");
const runInput = document.getElementById("runInput");

if(runBox){
runBox.classList.remove("hidden");
}

if(runInput){
runInput.value = "echo Attack Successfully carried out";
}

}

function closeRun() {

document.getElementById("runBox").classList.add("hidden");

alert(
"This was a ClickFix demo.\n\n" +
"The attack works through social engineering."
);

}
