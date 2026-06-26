document.addEventListener("DOMContentLoaded", function () {

    const video3 = document.getElementById("autoPlayVideo3");

    const observer3 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video3.play().catch(() => {});
                } else {
                    video3.pause();
                }
            });
        },
        {
            threshold: 0.4
        }
    );

    observer3.observe(video3);

});