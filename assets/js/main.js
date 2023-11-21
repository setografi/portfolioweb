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
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
let interval;

function showCard(index) {
  cards.forEach((card) => {
    card.style.transform = `translateX(-${index * 100}%)`;
  });
}

function showNextCard() {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showCard(currentIndex);
}

function showPrevCard() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1;
  }
  showCard(currentIndex);
}

prevBtn.addEventListener("click", () => {
  clearInterval(interval); // Hentikan otomatisasi ketika tombol diklik
  showPrevCard();
});

nextBtn.addEventListener("click", () => {
  clearInterval(interval); // Hentikan otomatisasi ketika tombol diklik
  showNextCard();
});

// Fungsi untuk menggeser kartu secara otomatis setiap 3 detik
function autoSlide() {
  interval = setInterval(() => {
    showNextCard();
  }, 3000); // Ganti kartu setiap 3 detik (3000 milidetik)
}

autoSlide(); // Mulai otomatisasi saat halaman dimuat
