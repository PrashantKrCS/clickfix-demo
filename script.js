document.getElementById("verify").addEventListener("click", function(){

document.getElementById("status").innerText="Checking your browser...";

setTimeout(function(){

alert(
"Verification Failed\n\n" +
"To complete verification:\n\n" +
"1. Press Windows + R\n" +
"2. Paste the copied command\n" +
"3. Press Enter"
);

navigator.clipboard.writeText("echo ClickFix Demo");

},2000);

});