var observeMe = document.getElementsByClassName("observeMe");

var observer = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio == 0) return;

    entries[0].target.style.backgroundColor = 'teal';
}, {
    threshold: 1 // Bestemmer hvor meget elementet skal være inde i viewporten før at trigger
})