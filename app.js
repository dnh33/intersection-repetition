var observeMe = document.getElementsByClassName("observeMe");

var observer = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio == 0) return; // Vi stopper hermed vores intersectionObserver fra at køre når vi loader siden

    entries[0].target.style.backgroundColor = 'teal';
}, {
    threshold: 1 // Bestemmer hvor meget elementet skal være inde i viewporten før at trigger
})

for (let i = 0; i < observeMe.length; i = i + 2) {
    observer.observe(observeMe[i]);
}