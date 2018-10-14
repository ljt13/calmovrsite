function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 50);
    }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);


//JQuery
// smooth scrolling

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          var $target = $(target);
        
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1');
          };
        });
      }
    }
  });


  //hamburger
  function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar__list") {
        x.className += " responsive";
    } else {
        x.className = "navbar__list";
    }
}