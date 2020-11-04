$(document).ready(function () {
  let no;
  let yes;




  // eslint-disable-next-line no-unused-vars
  function trackAns() {
    // eslint-disable-next-line no-unused-vars
    yes = $("input.yes.active").length;
    // eslint-disable-next-line no-unused-vars
    no = $("input.no.active").length;
  }


  $(document).on("click", "input", function () {
    if (this.classList.contains("yes")) {
      console.log("yes is clicked");
      activeElement = $(this);

      //setActive();
    } else if (this.classList.contains("no")) {
      console.log("no is clicked");
    }
  });

  /*function setActive(activeElement) {
      activeElement.parent().children().each(function () {
          $(this).children().removeClass("active");
      });
      activeElement.toggleClass("active");
  } */
});