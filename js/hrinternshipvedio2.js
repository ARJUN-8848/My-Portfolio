// document.addEventListener("DOMContentLoaded", function () {

//     const video2 = document.getElementById("autoPlayVideo2");

//     const observer2 = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     video2.play().catch(() => {});
//                 } else {
//                     video2.pause();
//                 }
//             });
//         },
//         {
//             threshold: 0.4
//         }
//     );

//     observer2.observe(video2);

// });



document.addEventListener("DOMContentLoaded", function () {

    const video2 = document.getElementById("autoPlayVideo2");

    if (!video2) return;

    const observer2 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    video2.play().catch(() => {});
                } else {
                    video2.pause();
                }

            });
        },
        {
            threshold: 0.4
        }
    );

    observer2.observe(video2);

});