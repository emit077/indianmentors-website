$(document).ready(function () {

  // hide the page loader
  setTimeout(function () {
    $("#loading-screen").fadeOut(1000);
    $(".loading-content").fadeOut(600);
    $(".loader").fadeOut(600);
  }, 1000);


  /* include components */
  let includes = document.getElementsByTagName("include");
  for (var i = 0; i < includes.length; i++) {
    let include = includes[i];
    load_file(includes[i].attributes.src.value, function (text) {
      include.insertAdjacentHTML("afterend", text);
      include.remove();
    });
  }
  function load_file(filename, callback) {
    fetch(filename)
      .then((response) => response.text())
      .then((text) => callback(text));
  }

  setTimeout(function () {
    let urlArray = window.location.href.split("/");
    let tab_id = urlArray[urlArray.length - 2];
    console.log(tab_id);
    // let currentab = document.getElementsByClassName("nav-link");
    let currentab = document.getElementsByClassName("nav-link");
    for (var i = 0; i < currentab.length; i++) {
      console.log(
        "currentab[i].text.toLowerCase().includes(currentab=",
        currentab[i].text.toLowerCase().includes(currentab)
      );
      if (currentab[i].text.toLowerCase().includes(tab_id)) {
        currentab[i].classList.add("active-nav-link");
      } else currentab[i].classList.remove("active-nav-link");
    }
  }, 150);
});

function openDialog(){
  $("#loading-screen").fadeOut(1000);
}
