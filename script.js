/* toggle functionality on mobile screen  */

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Optional: Close menu on window resize to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 998) {
      mobileMenu.classList.remove("active");
    }
  });





/* Type Writer Effetct */

  const words = ["Internet Reality", "Digital World", "Smart Future", "Virtual Life", "Connected Age"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100; // typing speed
  const pauseAfterTyping = 2500; // pause after full word is typed
  const pauseAfterDeleting = 500; // pause after deleting word

  function typeWriter() {
    const display = document.getElementById("typewriter-text");
    const fullText = words[wordIndex];
    let delay = speed;

    if (!isDeleting) {
      charIndex++;
      display.innerHTML = fullText.substring(0, charIndex);
      // ✅ If typing is done
      if (charIndex === fullText.length) {
        isDeleting = true;
        delay = pauseAfterTyping; // wait after typing full word
      }
    } else {
      charIndex--;
      display.innerHTML = fullText.substring(0, charIndex);
      // ✅ If deleting is done
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = pauseAfterDeleting;
      }
    }

    setTimeout(typeWriter, delay);
  }

  document.addEventListener("DOMContentLoaded", typeWriter);

/* #######################################################################       Event seaction js ################## */
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".event-image");
    const content = document.querySelector(".event-content");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          image.classList.add("animate");
          content.classList.add("animate");
        } else {
          image.classList.remove("animate");
          content.classList.remove("animate");
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(document.querySelector(".event-section"));
  });


/* ###################################################################################  hi seaction effect ############### */


  document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".hi-section-right");
    const content = document.querySelector(".hi-section-left");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          image.classList.add("animate");
          content.classList.add("animate");
        } else {
          image.classList.remove("animate");
          content.classList.remove("animate");
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(document.querySelector(".hi-section"));
  });





/* ####################################################################################imagine seaction ###################### */
  document.addEventListener("DOMContentLoaded", function () {
    const leftElement = document.querySelector(".imagine-section-left");
    const rightElement = document.querySelector(".imagine-section-right");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          leftElement.classList.add("animate");
          rightElement.classList.add("animate");
        } else {
          leftElement.classList.remove("animate");
          rightElement.classList.remove("animate");
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(document.querySelector(".imagine-section"));
  });
/* ###########################################################################  keep seaction effect ############### */


  document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".keep-section-left");
    const image = document.querySelector(".keep-section-right");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          text.classList.add("animate");
          image.classList.add("animate");
        } else {
          text.classList.remove("animate");
          image.classList.remove("animate");
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(document.querySelector(".keep-section"));
  });


  
/* logo crausal in functinality  */
 