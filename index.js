const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});
// Let menu=document.querySelector('#menu-icon');
// Let navbar= document.querySelector('.navbar');
$(function() {
    $("#menu-icon").click(function() {
      $(this).toggleClass("active");
      $('.navbar').toggleClass("open");
    });
  });