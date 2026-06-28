window.addEventListener("load", () => {

    setTimeout(() => {

        const preloader = document.getElementById("preloader");

        preloader.classList.add("hide");

        setTimeout(() => {
            preloader.remove();
        }, 600);

    }, 2000);

});