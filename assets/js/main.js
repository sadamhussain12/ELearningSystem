  // Mobile search
  document.getElementById("mobileSearchBtn").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("mobileSearchOverlay").classList.add("active");
  });
  document.getElementById("closeSearch").addEventListener("click", function() {
    document.getElementById("mobileSearchOverlay").classList.remove("active");
  });

  // Offcanvas menu
  document.getElementById("menuToggleBtn").addEventListener("click", function() {
    document.getElementById("offcanvasMenu").classList.add("active");
  });
  document.getElementById("closeMenu").addEventListener("click", function() {
    document.getElementById("offcanvasMenu").classList.remove("active");
  });