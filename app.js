/* var observeMe = document.getElementsByClassName("observeMe"); */
var main = document.getElementsByTagName("main")[0]; // Ved at skrive 0 i bracket tager vi bare det først element i main. Vi kunne skrive 2 , så får vi det tredje

var observer = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio == 0) return; // Vi stopper hermed vores intersectionObserver fra at køre når vi loader siden

    entries[0].target.querySelector("h1").style.opacity = "1"; // Nu leder vi kun main igennem, derfor kan vi bruge en querySelector
    /* entries[0].target.querySelector("h1").style.transform = "scale(1)"; */
    entries[0].target.querySelector("h1").style.animation = "doStuff 1s";
    /* entries[0].target.style.backgroundColor = 'teal'; */
}, {
    threshold: 0.3
    /* threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1] */ // Bestemmer hvor meget elementet skal være inde i viewporten før at trigger
})

/* for (let i = 0; i < observeMe.length; i = i + 2) {
    observer.observe(observeMe[i]);
} */

observer.observe(main);