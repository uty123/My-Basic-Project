function buy() {
  let name = prompt("What is your name?");
  let emoji = prompt("What is your favorite emoji?");
  let age = prompt("How old are you?");
  if (age > 18) {
    alert("Hey " + name + emoji + "you can go ahead to buy");
  } else {
    alert("You are less than required age😒,please check the next store!");
  }
}
let button = document.querySelector("button");
button.addEventListener("click", buy);
