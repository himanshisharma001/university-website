/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /*=============== SHOW DROPDOWN MENU ===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item')

 dropdownItems.forEach((item) => {
     const dropdownButton = item.querySelector('.dropdown__button') 
 
     dropdownButton.addEventListener('click', (e) => {
         e.preventDefault(); // Prevent navigation on click of the button only
         const showDropdown = document.querySelector('.show-dropdown')
 
         toggleItem(item)
 
         if(showDropdown && showDropdown !== item){
             toggleItem(showDropdown)
         }
     })
 })

 const toggleItem = (item) =>{

     const dropdownContainer = item.querySelector('.dropdown__container')

     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }

 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 
 const removeStyle = () =>{
     if(mediaQuery.matches){
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
 
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)


//  ---------------Study Abroad Slider----------------------------
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (index < 2) {
          return `<span class="${className}"></span>`;
        }
        return ""; // Hide extra dots
      },
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
      1440: { slidesPerView: 4, spaceBetween: 40 },
    },
  });

    // -----------------Study Facility Slider-------------------
    var swiper = new Swiper(".home-study-facility", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
       
      },
    });


  // -----------------Testimonial Slider-------------------
  var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});

// ------------------Counter------------------------
function startCounter(el) {
  let target = +el.getAttribute("data-target");
  let suffix = el.getAttribute("data-suffix") || ""; // Optional "K"
  let plusSign = el.hasAttribute("data-plus") ? "<sup>+</sup>" : ""; // Optional "+"
  let count = 0;
  let increment = target / 100; // Adjust speed

  el.dataset.counting = "true"; // Mark as counting

  let updateCount = () => {
      count += increment;
      if (count < target) {
          el.innerHTML = Math.floor(count) + (suffix ? suffix : "") + plusSign;
          requestAnimationFrame(updateCount);
      } else {
          el.innerHTML = target + (suffix ? suffix : "") + plusSign;
          el.dataset.counting = "false"; // Mark as done
      }
  };
  updateCount();
}

function checkCounters() {
  let counters = document.querySelectorAll('.counter-countup-show h2');
  counters.forEach(counter => {
      let rect = counter.getBoundingClientRect();
      let isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible && counter.dataset.counting !== "true") {
          startCounter(counter);
      }
  });
}

window.addEventListener('scroll', checkCounters);
window.addEventListener('resize', checkCounters);


// ----------------Study Abroad Tabs-------------------
function openInstitute(evt, collegeName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("institute-content-dtls");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("institute-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(collegeName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


