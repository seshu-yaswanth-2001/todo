const input = document.getElementById("inputBox");
const addbutton = document.getElementById("btn");
const cards = document.getElementById("cards");

function addTask() {
  if (input.value === "") {
    alert("Please add a task! An empty task can't be added.");
  } else {
    let li = document.createElement("LI");

    let card = document.createElement("DIV");
    card.classList.add("card");

    let para = document.createElement("p");
    para.innerHTML = input.value;
    let delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    card.appendChild(para);
    card.appendChild(delButton);
    li.appendChild(card);
    cards.appendChild(li);
  }
  input.value = "";
}

cards.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.closest("li")?.remove();
    saveData();
    e.stopPropagation();
  } else {
    e.target.closest("li")?.classList.toggle("active");
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", cards.innerHTML);
}

function showData() {
  cards.innerHTML = localStorage.getItem("data");
}
showData();
