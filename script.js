// Redirect to the next page on arrow div click
document.getElementById("arrow-div").addEventListener("click", function() {
    window.location.href = "nextpage.html";
});

function toggleNavbar() {
    var navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("active");
}

hamburger=document.querySelector(".hamburger")
hamburger.onclick=function(){
    navBar=document.querySelector('.nav-bar')
    navBar.classList.toggle("active")
}