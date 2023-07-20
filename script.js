$(document).ready(function () {
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

    student_name.text("Adjoa Ernie");
    student_name.text(first_name + " " + last_name);

    student_school.text("University of Calgary");
    student_school.text(school_name);

    student_email.text("bernie@gmail.com");
    student_email.text(email);

    student_phone.text("+233 59 401 0464");
    student_phone.text(phone);

    const width = window.innerWidth;
    console.log("width", width);

    if (width < 430) {
      const formContainer = document.querySelector(".form");
      formContainer.classList.toggle("d-none");

      const userDetails = document.querySelector(".aside .user-details");
      userDetails.style.display = "flex";

      const editBtn = document.querySelector("#edit");
      editBtn.style.cursor = "pointer";
      setInterval(() => {
        editBtn.addEventListener("click", () => {
          formContainer.classList.toggle("d-none");
          userDetails.style.display = "none";
        });
      }, 1000);
    }
  });
});
