var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader-wrapper").style.opacity = "0";
    document.getElementById("full").style.display = "block";

}

function topFunction() {
    window.scrollTo({top: 0, behavior: "smooth"});
}
