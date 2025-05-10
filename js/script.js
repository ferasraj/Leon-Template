const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

// فتح/إغلاق عند الضغط على الأيقونة
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// إغلاق عند الضغط خارج المنيو
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
    menu.classList.remove("show");
  }
});

// إغلاق عند الضغط على أي رابط داخل المنيو
const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// زر الرجوع لأعلى الصفحة
// إنشاء الزر
const scrollTopBtn = document.getElementById("scrollTopBtn");

// إظهار الزر عند التمرير
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// عند الضغط يرجع لأعلى الصفحة
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// التجكم بالهيدر اثناء التصفح
const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // عند النزول: إخفاء الهيدر
    header.classList.add("hidden");
    header.classList.remove("shadow");
  } else {
    // عند الصعود:
    if (currentScrollY > 0) {
      header.classList.add("shadow");
      header.classList.remove("hidden");
    } else {
      header.classList.remove("shadow", "hidden");
    }
  }

  lastScrollY = currentScrollY;
});

//اضافة بقية كاردز بورتوفوليو
const showMoreBtn = document.getElementById("showMoreBtn");
const extraCards = document.querySelector(".extra-cards");

let isVisible = false;

showMoreBtn.addEventListener("click", () => {
  if (!isVisible) {
    // إظهار الكروت مع أنميشن
    extraCards.classList.remove("hidden-gallery");
    extraCards.classList.add("fade-in");

    showMoreBtn.textContent = "Show Less";
    isVisible = true;

    // سكرول ناعم
    setTimeout(() => {
      extraCards.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600); // نفس توقيت الأنميشن
  } else {
    // إخفاء الكروت
    extraCards.classList.add("fade-out");

    // بعد انتهاء الأنميشن، نخفيهم
    setTimeout(() => {
      extraCards.classList.remove("fade-in", "fade-out");
      extraCards.classList.add("hidden-gallery");
    }, 500); // نفس وقت fadeOutDown

    showMoreBtn.textContent = "Show More";
    isVisible = false;
  }
});
