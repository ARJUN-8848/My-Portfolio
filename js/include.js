async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

// Load Preloader
loadComponent("preloader", "preloader.html");

// Example
// loadComponent("header", "header.html");
// loadComponent("footer", "footer.html");