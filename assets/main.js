/*==================== Menu Button ====================*/

const buttonA = document.getElementById("button_a");
const buttonB = document.getElementById("button_b");
const buttonC = document.getElementById("button_c");

const contentA = document.getElementById("content_a");
const contentB = document.getElementById("content_b");
const contentC = document.getElementById("content_c");

buttonA.addEventListener("click", function () {
  contentA.style.display = "block";
  contentB.style.display = "none";
  contentC.style.display = "none";
});

buttonB.addEventListener("click", function () {
  contentA.style.display = "none";
  contentB.style.display = "block";
  contentC.style.display = "none";
});

buttonC.addEventListener("click", function () {
  contentA.style.display = "none";
  contentB.style.display = "none";
  contentC.style.display = "block";
});

/*==================== Follow Button ====================*/

document
  .getElementById("followButton")
  .addEventListener("click", function (event) {
    this.classList.toggle("unfollow");
    this.textContent = this.classList.contains("unfollow")
      ? "Unfollow"
      : "Follow";
  });

/*==================== Like Button ====================*/

document.querySelectorAll(".heartButton").forEach(function (button) {
  button.addEventListener("click", function () {
    this.querySelector("i").classList.toggle("ri-heart-3-line");
    this.querySelector("i").classList.toggle("ri-heart-3-fill");
    this.classList.toggle("heart-unfilled");
    this.classList.toggle("heart-filled");
  });
});

/*==================== Notification ====================*/

document
  .getElementById("contactButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah tindakan default dari link

    // Menyalin email ke clipboard
    var email = "youremail@example.com";
    var tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Menampilkan notifikasi
    var notification = document.getElementById("notification");
    notification.style.display = "block";

    // Menghilangkan notifikasi setelah beberapa detik
    setTimeout(function () {
      notification.style.display = "none";
    }, 3000); // Notifikasi akan menghilang setelah 3 detik
  });

/*==================== Animation ====================*/

document.addEventListener("DOMContentLoaded", function () {
  const skillsBox = document.getElementById("skillsBox");

  skillsBox.addEventListener("animationiteration", function () {
    skillsBox.classList.remove("animate");
    void skillsBox.offsetWidth; // Memaksa reflow, sehingga animasi akan mulai dari awal
    skillsBox.classList.add("animate");
  });
});
