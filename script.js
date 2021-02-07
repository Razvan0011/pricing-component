const button = document.querySelector(".price-switch");
const dot = document.querySelector(".switch");
const prices = document.querySelectorAll(".price");
let bool = false;

button.addEventListener("click", (e) => {
    let str = "";
    let val;
    dot.classList.toggle("left");
    if (dot.classList.contains("left")) {
        for (let i = 0; i < prices.length; i++) {
            val = parseFloat(prices[i].childNodes[1].nextElementSibling.innerText, 2).toFixed(2) * 10 + 0.09;
            prices[i].childNodes[1].nextElementSibling.innerText = val.toFixed(2);
        }
    } else if (!dot.classList.contains("left")) {
        for (let i = 0; i < prices.length; i++) {
            val = parseFloat(prices[i].childNodes[1].nextElementSibling.innerText, 2) / 10;
            str = val.toString();
            prices[i].childNodes[1].nextElementSibling.innerText = str.substring(0, 5);
        }
    }
});