let robat = document.getElementById("robat");
let check = document.getElementById("check");
let pedar = document.getElementById("pedar");
let text = document.getElementById("text");
let random = document.getElementById("random");
let change = document.getElementById("change");
let sabt = document.getElementById("sabt");
let num1;
let num2;
check.addEventListener("click", function () {
  robat.style.display = "none";
  pedar.style.display = "block";
});
random.innerHTML = `${Math.floor(Math.random() * 100000)}`;
change.addEventListener("click", function () {
  random.innerHTML = `${Math.floor(Math.random() * 100000)}`;
});
sabt.addEventListener("click", function () {
  if (text.value === random.innerHTML) {
    alert("You are human ");
    text.value = "";
  } else alert("You are not human :))) ");
  text.value = "";
  random.innerHTML = `${Math.floor(Math.random() * 10000000)}`;

});
