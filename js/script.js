document.addEventListener("DOMContentLoaded",function(){
    const elements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .formation-item"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(function (element) {

    element.classList.add("hidden");

    observer.observe(element);

});
});
