document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    let valid = true;

    if (username.value.trim() === "") {
      username.style.borderColor = "red";
      valid = false;
    } else {
      username.style.borderColor = "#ccc";
    }

    if (password.value.trim() === "") {
      password.style.borderColor = "red";
      valid = false;
    } else {
      password.style.borderColor = "#ccc";
    }

    if (!valid) {
      e.preventDefault();
      alert("يرجى تعبئة اسم المستخدم وكلمة المرور!");
    }
  });
});
