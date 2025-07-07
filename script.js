 // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
    });
   });
 });
function toggleWAPopup() {
  const popup = document.getElementById("waPopup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
