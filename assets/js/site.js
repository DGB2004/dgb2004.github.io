// Every Bottleneck: phone menu toggle, and the sticky phone button that hides once the Check form is on screen.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
        toggle.focus();
      }
    });
  }

  var sticky = document.querySelector(".sticky-cta");
  var form = document.getElementById("check");
  if (sticky) {
    sticky.hidden = false;
    document.body.classList.add("has-sticky");
    if (form && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        sticky.hidden = entries[0].isIntersecting;
      }, { rootMargin: "0px 0px -20% 0px" }).observe(form);
    }
  }
})();
