const getData = document.querySelector("#add_task");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("#Does");

function addingTask() {
    let task = getData.value;
    if (task !== "") {
        let now = new Date();
        let timestamp = now.toLocaleString();

        let new_li = document.createElement("li");
        let deleteBtn = document.createElement("button");

        new_li.innerText =
            timestamp +
            "\u00A0\u00A0\u00A0\u00A0\u00A0" +
            task +
            "\u00A0\u00A0\u00A0\u00A0\u00A0";
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("btn", "btn-outline-danger", "btn-sm");

        ul.appendChild(new_li);
        new_li.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            new_li.remove();
        });

        getData.value = "";
    } else {
        alert("don't add empty task");
    }
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addingTask();
});

getData.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addingTask();
    }
});
