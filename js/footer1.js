fetch("footerseond.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footerseond").innerHTML = data;
});