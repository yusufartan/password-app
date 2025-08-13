// Elementleri seçmek
const leftTextArea = document.querySelector("#leftTextArea");
const rightTextArea = document.querySelector("#rightTextArea");
const encodeButton = document.querySelector("#encodeButton");
const decodeButton = document.querySelector("#decodeButton");
const message = document.querySelector(".message");
const err = document.querySelector("#err");

runEventListener();

function runEventListener() {
    encodeButton.addEventListener("click", encode);
    decodeButton.addEventListener("click", decode);
}

function showMessage(text, type = "success") {
    err.textContent = text;
    message.className = `message ${type} show`; // success/error
    message.style.display = "flex";

    clearTimeout(message._hideTimer);
    message._hideTimer = setTimeout(() => {
        message.classList.remove("show");
    }, 2000);
}

function encode() {
    if (leftTextArea.value.trim() === "") {
        rightTextArea.value = "";
        showMessage("Lütfen şifrelenecek metni giriniz", "error");
        return;
    }
    rightTextArea.value = btoa(leftTextArea.value);
    leftTextArea.value = "";
    showMessage("Metin başarıyla şifrelendi", "success");
}

function decode() {
    if (rightTextArea.value.trim() === "") {
        leftTextArea.value = "";
        showMessage("Çözülecek şifreyi giriniz", "error");
        return;
    }
    leftTextArea.value = atob(rightTextArea.value);
    rightTextArea.value = "";
    showMessage("Şifre başarıyla çözüldü", "success");
}
