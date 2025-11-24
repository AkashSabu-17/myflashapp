document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const msg = document.getElementById("msg");

  btn.addEventListener("click", function () {
    msg.textContent = "Button clicked! Current time: " + new Date().toLocaleString();
  });
});
