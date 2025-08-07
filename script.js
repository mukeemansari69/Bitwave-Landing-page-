const logoSets = document.querySelectorAll(".logo-set");
  const dots = document.querySelectorAll(".dot");
  const heading = document.getElementById("solution-heading");

  const headings = [
    "Our Solution Powers Leading Venues",
    "Trusted by Global Innovators",
    "Empowering Next-Gen Connectivity"
  ];

  let currentIndex = 0;

  function showSlide(index) {
    logoSets.forEach((set, i) => {
      set.classList.toggle("active", i === index);
    });

    dots.forEach(dot => {
      dot.classList.remove("active");
    });
    dots[index].classList.add("active");

    heading.textContent = headings[index];
    currentIndex = index;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      showSlide(index);
    });
  });

  // Swipe support
  let startX = 0;
  const wrapper = document.getElementById("logos-wrapper");

  wrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  wrapper.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      showSlide((currentIndex + 1) % logoSets.length);
    } else if (endX - startX > 50) {
      showSlide((currentIndex - 1 + logoSets.length) % logoSets.length);
    }
  });
