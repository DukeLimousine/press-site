var site = site || {};
site.mobileNav = site.mobileNav || {};

site.mobileNav = {
  mobileCloseBtn: document.getElementsByClassName('js-mobile-nav__closebtn')[0],
  overlay: document.getElementById('mobile-nav-overlay'),
  menuOpen: document.getElementsByClassName('mobile-nav__menu--open')[0],
  menuBars: document.getElementsByClassName('fa-bars')[0],
  overlayLinks: document.getElementsByClassName('js-mobile-nav__overlay-content-link'),
  openNav: function() {
    this.overlay.style.height = '100%';
    this.menuOpen.style.display = 'none';
  },
  closeNav: function() {
    this.overlay.style.height = '0%';
    this.menuOpen.style.display = 'flex';
    this.menuOpen.style.display = '-ms-flexbox';
  },
  init: function() {
    var that = this;
    that.mobileCloseBtn.addEventListener('click', function(event) {
      event.preventDefault();
      that.closeNav();
    });
    that.menuBars.addEventListener('click', function(event) {
      that.openNav();
    });

    // Make sure each link closes the nav overlay when clicked
    for (var i = 0; i < this.overlayLinks.length; i += 1) {
      this.overlayLinks[i].addEventListener('click', function(event) {
        that.closeNav();
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  site.mobileNav.init();
});
