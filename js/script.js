let todo = document.querySelector("h1");
let form = document.querySelector("#form");
let input = document.querySelector("input");
let clear = document.querySelector(".clear-btn");
let list = document.querySelector(".todo-list");

let counter = localStorage.getItem("count");
let lsList = localStorage.getItem("list");
let count = counter;
list.innerHTML = lsList;

if (!count) {
  count = 0;
}

todo.innerHTML = `You have ${count} todos`;

form.addEventListener("submit", (e) => {
  if (input.value == "") {
    window.alert("You have to enter an item");
  }

  let item = document.createElement("p");
  let underline = document.createElement("div");
  let chekbox = document.createElement("input");
  let label = document.createElement("label");


  chekbox.type = 'checkbox'
  chekbox.value = `${input.value}`
  chekbox.id = 'todo'



  item.classList.add("item");
  underline.classList.add("underline");

  item.innerHTML = input.value;
  list.append(item, underline);

  localStorage.setItem("count", ++count);
  localStorage.setItem("list", list.outerHTML);

  todo.innerHTML = `You have ${count} todos`;
  input.value = "";

  e.preventDefault();
});

clear.addEventListener("click", () => {
  count = 0;
  todo.innerHTML = `You have ${count} todos`;
  list.innerHTML = "";
  localStorage.clear();
});
