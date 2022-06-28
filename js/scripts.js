const navToggle = document.querySelector(".navbar-toggler");
const items = document.querySelector(".navbar-collapse");

navToggle.addEventListener("click", () => {
  if (items.style.display === "none") {
    items.style.display = "block";
  } else {
    items.style.display = "none";
  }
});

let myNav = document.querySelector(".navbar");

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop >= 80) {
    myNav.classList.add("bg-navbar");
  } else {
    myNav.classList.remove("bg-navbar");
  }
}

// Modal images

let modal = document.getElementById("myModal");

let img = document.querySelectorAll("#myImg");
let modalImg = document.getElementById("img01");
let i;
for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

// Scroll Smooth

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  });
});

// reservation -------------

const form = document.querySelector("#form");

function storeFormData() {
  const user = {
    name: form.name.value,
    email: form.email.value,
    date: form.date.value,
    time: form.time.value,
    mesage: form.mesage.value,
  };
  console.log(user);
}
form.addEventListener("submit", storeFormData);
