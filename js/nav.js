document.addEventListener('DOMContentLoaded', function() {

  navToggle[0].addEventListener("click", function() {
    if (!active) {
      this.innerHTML = "Home";
      this.style.top = "42%";
      this.style.textTransform = "uppercase";
      this.classList.add("active");

      header[0].style.position = "static";

      container[0].classList.add("container-clicked");
      container[0].style.position = "relative";
      container[0].style.overflow = "hidden";

      card[0].style.borderColor = "rgba(0,0,0,0)";
      card[0].style.backgroundColor = "rgba(0,0,0,0)";
      card[0].style.boxShadow = "none";

      logo[0].style.display = "none";
      main[0].style.display = "none";

      nav[0].style.display = "block";
      nav[0].style.left = "40%";
      nav[0].style.top = "20%";
    } else {
        this.innerHTML = "Menu";
        this.style.top = "2rem";
        this.style.textTransform = "none";
        this.classList.remove("active");

        header[0].style.position = "relative";

        container[0].style.position = "relative";
        container[0].style.overflow = "initial";
        container[0].classList.remove("container-clicked");

        card[0].style.borderColor = "1px solid rgba(0,0,0,0.1)";
        card[0].style.backgroundColor = "rgba(255,255,255,0.2)";
        card[0].style.boxShadow = "0 0 2rem .5rem rgba(0,0,0,0.2)";

        logo[0].style.display = "block";
        main[0].style.display = "block";

        nav[0].style.display = "none";
    }
    active = !active;
  });

});
