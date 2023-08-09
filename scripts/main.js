(function() {
  "use strict";

  window.addEventListener('load', () => {
    on_page_load()
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  }

  /**
   * Navbar effects and scrolltop buttons upon scrolling
   */
  const navbar = document.getElementById('header-nav')
  var body = document.getElementsByTagName("body")[0]
  const scrollTop = document.getElementById('scrolltop')
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top', 'shadow-sm')
      body.style.paddingTop = navbar.offsetHeight + "px"
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      navbar.classList.remove('fixed-top', 'shadow-sm')
      body.style.paddingTop = "0px"
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };

  /**
   * Masonry Grid
   */
  var elem = document.querySelector('.grid');
  if(elem) {
    imagesLoaded(elem, function() {
      new Masonry(elem, {
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true
      });
    })
  }

  /**
   * Big Picture Popup for images and videos
   */
   document.querySelectorAll("[data-bigpicture]").forEach((function(e) {
     e.addEventListener("click", (function(t){
       t.preventDefault();
       const data =JSON.parse(e.dataset.bigpicture)
       BigPicture({
        el: t.target,
        ...data
      })
     })
    )
  }))

  /**
   * Big Picture Popup for Photo Gallary
   */
   document.querySelectorAll(".bp-gallery a").forEach((function(e) {
    var caption = e.querySelector('figcaption')
    var img = e.querySelector('img')
    // set the link present on the item to the caption in full view
    img.dataset.caption = '<a class="link-light" target="_blank" href="' + e.href + '">' + caption.innerHTML + '</a>';
    window.console.log(caption, img)
     e.addEventListener("click", (function(t){
       t.preventDefault();
       BigPicture({
        el: t.target,
        gallery: '.bp-gallery',
      })
     })
    )
  }))

  // Add your javascript here
  const nameElement = document.getElementById("name");
  const name = "Enes Eren Demirpolat";
  let currentCharIndex = 0;

  function typeNextCharacter() {
    if (currentCharIndex < name.length) {
      nameElement.textContent += name.charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeNextCharacter, 100); // Yazma hızını buradan ayarlayabilirsiniz (milisaniye cinsinden)
    }
  }

  typeNextCharacter();

  const jobElement = document.getElementById("job");
    const jobTitle = "Web Developer & Bilgisayar Mühendisi";
    let feb = 0;

    function typeNextCharacter1() {
      if (feb< jobTitle.length) {
        jobElement.textContent += jobTitle.charAt(feb);
        feb++;
        setTimeout(typeNextCharacter1, 100); // Yazma hızını buradan ayarlayabilirsiniz (milisaniye cinsinden)
      }
    }

    typeNextCharacter1();

    
   
    window.addEventListener('load', () => {
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach((link, index) => {
        setTimeout(() => {
          link.style.transform = 'translateX(0)';
          link.style.opacity = 1;
        }, index * 200); // Her başlık için 200ms gecikme
      });
    });

    function handleSubmit(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Create a mailto link with pre-filled values
      const mailtoLink = `mailto:eneserendp@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0DEmail:%20${encodeURIComponent(email)}%0DMessage:%20${encodeURIComponent(message)}`;
  
      // Open the default email client with the mailto link
      window.location.href = mailtoLink;
    }
  
    // Add event listener to the form
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleSubmit);

})();

