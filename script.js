const messages = [
    "Emin misin?",
    "Kesinmi??",
    "Gerçektenmi?",
    "AMA nolur",
    "Kabul etsene",
    "Etmezsen çok üzülürüm",
    "Aşırı üzülürüm",
    "İyi peki sormicam",
    "Şakaydı lütfen olur de"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleContClick() {
    window.location.href = "cont_page.html";
}

function handleReadyClick() {
    window.location.href = "ready_page.html";
}

function handleNotreadyClick() {
    window.location.href = "notready_page.html";
}

function handleOkClick() {
    window.location.href = "https://layto.itch.io/prenses-esra";
}