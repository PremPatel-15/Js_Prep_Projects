const getData = document.querySelector("#add_task");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("#Does");

addBtn.addEventListener("click", () => {
    let task = getData.value;
    let now = new Date();
    let timestamp = now.toLocaleString();

    let new_li = document.createElement("li");
    let deleteBtn = document.createElement("button");

    new_li.innerText = timestamp + "  " + task + "  ";
    deleteBtn.innerText = "Delete";

    new_li.appendChild(deleteBtn);
    ul.appendChild(new_li);

    deleteBtn.addEventListener("click", () => {
        new_li.remove();
    });

    getData.value = "";
});

getData.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let task = getData.value;
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

        new_li.appendChild(deleteBtn);
        ul.appendChild(new_li);

        deleteBtn.addEventListener("click", () => {
            new_li.remove();
        });

        getData.value = "";
    }
});
