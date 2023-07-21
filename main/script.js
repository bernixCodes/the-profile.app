$(document).ready(function () {
  let emailParams = $(".user_email h4");
  const url = window.location.search;
  let email = new URLSearchParams(url).get("email");
  console.log("email", email);
  emailParams.text(email);

  const uploadButton = document.querySelector(".img-container span");

  uploadButton.addEventListener("click", function () {
    document.querySelector("input[type=file]").click();
    $("input[type=file]").on("change", function () {
      var input = this;
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $("#image").attr("src", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
      }
    });
  });

  const logoutBtn = document.querySelector("#logout");
  logoutBtn.style.cursor = "pointer";
  logoutBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  $(".submit-update").click(function (e) {
    e.preventDefault();

    // --------------------- selecting elements from our webpage----------------------------
    let student_name = $(".user_name h4");
    let student_school = $(".user_school h4");
    let student_email = $(".user_email h4");
    let student_phone = $(".user_contact h4");

    // ---------------------- get form data --------------------------
    let first_name = $("input#f_name").val();
    let last_name = $("input#l_name").val();
    let school_name = $("input#school").val();
    let email = $("input#email").val();
    let phone = $("input#contact").val();

    student_name.text("");
    student_name.text(first_name + " " + last_name);

    student_school.text("");
    student_school.text(school_name);

    student_email.text("");
    student_email.text(email);

    student_phone.text("4");
    student_phone.text(phone);

    const width = window.innerWidth;
    console.log("width", width);

    if (width < 430) {
      const header = document.querySelector(".header h3");
      header.innerHTML = "Profile";

      const formContainer = document.querySelector(".form");
      const formItems = document.querySelectorAll(".input");
      const userDetails = document.querySelector(".aside .user-details");
      const editBtn = document.querySelector("#edit");

      if ((formContainer.style.display = "flex")) {
        formContainer.style.display = "none";
        userDetails.style.display = "flex";
      } else {
        userDetails.style.display = "none";
        formContainer.style.display = "flex";
      }

      editBtn.style.cursor = "pointer";

      editBtn.addEventListener("click", () => {
        if ((formContainer.style.display = "none")) {
          formContainer.style.display = "flex";
          formItems.forEach((item) => {
            item.style.width = "70vw";
          });

          userDetails.style.display = "none";
        } else {
          userDetails.style.display = "flex";
          formContainer.style.display = "none";
        }
      });
    }
  });
});
