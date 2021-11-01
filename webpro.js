function arithmetic() {
  event.preventDefault();
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  console.log(a);
  console.log(b);
  console.log(typeof (a + b));
  // document.getElementById("answer").value = a + b
  switch (document.getElementById("o").value) {
    case "+":
      document.getElementById("answer").value = a + b;
      break;
    case "-":
      document.getElementById("answer").value = a - b;
      break;
    case "*":
      document.getElementById("answer").value = a * b;
      break;
    case "/":
      document.getElementById("answer").value = a / b;
      break;
  }
  document.getElementById("ans").style.display = "block";
}
