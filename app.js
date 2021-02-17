const movieList = document.querySelector(".movie-list");
var movieListHeight = movieList.offsetHeight;
const layout = document.querySelector(".movies");
var layoutHeight = layout.offsetHeight;
const layoutPos = layout.offsetTop;
var threshold = layoutHeight/2;
const movieCards = document.querySelectorAll(".movie");
const scrollHandler = () => {
    movieCards.forEach((item,index) => {
        let itemPos = item.getBoundingClientRect().top;
        var scaleVal = 1 - Math.abs((threshold - itemPos)*0.5/layoutHeight);
        console.log(index,scaleVal);
        item.style.transform = `scale(${scaleVal})`;
    })
}
layout.addEventListener("scroll",scrollHandler);
movieList.onLoad = scrollHandler();
