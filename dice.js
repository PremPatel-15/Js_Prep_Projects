const btn = document.querySelector("#btn");

let arr = ["*", "* *", "* * *", "* * * *", "* * * * *", " * * * * * *"];
function roll() {
    return Math.floor(Math.random() * 6);
}

let show = document.createElement("h1");
document.body.appendChild(show);

btn.addEventListener("click", () => {
    show.innerText = arr[roll()];
});
