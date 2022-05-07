var isChrome = navigator.userAgent.includes('Chrome');
var page = document.querySelector(".page")
var body = document.querySelector("body")
if (isChrome === false) {
    var element = document.createElement("h1");
    element.className = "chrome";
    element.innerHTML = "Please sir use chrome browser ";
    element.style.color = "red"
    page.remove()
    body.appendChild(element);
}