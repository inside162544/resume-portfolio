(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Auto-calculate age from birth date (July 16, 2001)
  function getAge(birthDate, now) {
    var age = now.getFullYear() - birthDate.getFullYear();
    var hasHadBirthdayThisYear =
      now.getMonth() > birthDate.getMonth() ||
      (now.getMonth() === birthDate.getMonth() &&
        now.getDate() >= birthDate.getDate());
    return hasHadBirthdayThisYear ? age : age - 1;
  }

  var birthDate = new Date(2001, 6, 16); // Months are 0-based (6 = July)
  var now = new Date();
  var age = getAge(birthDate, now);

  var ageEl = document.getElementById("age-years");
  if (ageEl) {
    ageEl.textContent = String(age);
  }

  var ageInlineEl = document.getElementById("age-inline");
  if (ageInlineEl) {
    ageInlineEl.textContent = String(age);
  }

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
