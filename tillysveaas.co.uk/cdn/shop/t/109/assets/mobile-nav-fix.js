(function() {
  function init() {
    var hamburgerBtns = document.querySelectorAll('.header-hamburger, [data-js="header-hamburger"], [data-js="main-header-overlay-hamburger"]');
    var mobileNav = document.getElementById('MobileNav') || document.querySelector('mobile-nav');

    if (!mobileNav || !hamburgerBtns.length) return;

    function openNav(activeBtn) {
      if (typeof mobileNav.open === 'function') {
        try { mobileNav.open(activeBtn); } catch (_) {}
      }
      mobileNav.setAttribute('aria-hidden', 'false');
      mobileNav.style.display = 'block';
      mobileNav.style.visibility = 'visible';
      mobileNav.style.opacity = '1';
      mobileNav.style.pointerEvents = 'auto';
      document.body.classList.add('overflow-hidden');
      hamburgerBtns.forEach(function(b) {
        b.setAttribute('aria-expanded', 'true');
        b.textContent = b.getAttribute('data-text-close') || 'Close';
      });
    }

    function closeNav() {
      if (typeof mobileNav.close === 'function') {
        try { mobileNav.close(); } catch (_) {}
      }
      mobileNav.setAttribute('aria-hidden', 'true');
      mobileNav.style.display = '';
      mobileNav.style.visibility = '';
      mobileNav.style.opacity = '';
      mobileNav.style.pointerEvents = '';
      document.body.classList.remove('overflow-hidden');
      hamburgerBtns.forEach(function(b) {
        b.setAttribute('aria-expanded', 'false');
        b.textContent = b.getAttribute('data-text-open') || 'Menu';
      });
    }

    hamburgerBtns.forEach(function(btn) {
      if (btn.__navBound) return;
      btn.__navBound = true;
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = mobileNav.getAttribute('aria-hidden') === 'false';
        if (isOpen) {
          closeNav();
        } else {
          openNav(btn);
        }
      });
    });

    // Submenu navigations inside mobile drawer
    var submenuTriggers = mobileNav.querySelectorAll('[data-js="mobile-nav-submenu-trigger"]');
    var menus = mobileNav.querySelectorAll('[data-js="mobile-nav-menu"]');
    var backBtns = mobileNav.querySelectorAll('[data-js="mobile-nav-back"]');
    var mainMenu = mobileNav.querySelector('[data-js-main-menu]') || menus[0];

    submenuTriggers.forEach(function(trigger) {
      if (trigger.__navBound) return;
      trigger.__navBound = true;
      trigger.addEventListener('click', function(e) {
        var targetId = trigger.getAttribute('aria-controls');
        if (!targetId) return;
        var targetMenu = document.getElementById(targetId);
        if (targetMenu) {
          menus.forEach(function(m) { m.setAttribute('aria-hidden', 'true'); });
          targetMenu.setAttribute('aria-hidden', 'false');
        }
      });
    });

    backBtns.forEach(function(backBtn) {
      if (backBtn.__navBound) return;
      backBtn.__navBound = true;
      backBtn.addEventListener('click', function(e) {
        menus.forEach(function(m) { m.setAttribute('aria-hidden', 'true'); });
        if (mainMenu) mainMenu.setAttribute('aria-hidden', 'false');
      });
    });

    // Close when clicking backdrop if clicked outside drawer content
    mobileNav.addEventListener('click', function(e) {
      if (e.target === mobileNav) {
        closeNav();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.getAttribute('aria-hidden') === 'false') {
        closeNav();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Re-run after any custom element hydration
  setTimeout(init, 500);
  setTimeout(init, 1500);
})();
