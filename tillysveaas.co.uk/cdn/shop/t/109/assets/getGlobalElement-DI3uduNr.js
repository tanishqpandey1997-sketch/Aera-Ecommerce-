const r = {
        miniCart: '[data-js="mini-cart"]',
        mainCart: '[data-js="main-cart"]',
        cartIcon: '[data-js="cart-icon"]',
        cartContext: '[data-js="cart-context"]',
        quickBuy: '[data-js="quick-buy"]',
        dialogQuickBuy: '[data-js="dialog-quick-buy"]',
        dialogMiniCart: '[data-js="dialog-mini-cart"]',
        productGallery: '[data-js="product-gallery__root"]',
        dialogCountrySelector: '[data-js="dialog-country-selector"]',
        productFloatingBar: '[data-js="product-floating-bar"]',
        mainHeader: '[data-js="main-header"]',
        mainHeaderOverlay: '[data-js="main-header-overlay"]',
        mainHeaderSearch: '[data-js="header-search"]',
        mobileNav: '[data-js="mobile-nav"]',
        sectionPromoBar: '[data-js="section-promo-bar"]',
        pageTopSentinel: '[data-js="page-top-sentinel"]',
        pageBottomSentinel: '[data-js="page-bottom-sentinel"]'
    },
    n = (a, o = {
        required: !0
    }) => {
        const t = r[a],
            e = document.querySelector(t);
        return e || o ?.required && console.error(`[getGlobalElement] Element "${a}" not found using selector "${t}"`), e
    };
export {
    n as g
};