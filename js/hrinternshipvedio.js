// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("autoPlayVideo");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           video.play().catch(() => {});
//         } else {
//           video.pause();
//         }
//       });
//     },
//     {
//       threshold: 0.4
//     }
//   );

//   observer.observe(video);
// });


document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("autoPlayVideo");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        },
        {
            threshold: 0.4
        }
    );

    observer.observe(video);
});