const landingSelectors = {
    // Cookie selectors and home button
    cookieField: 'span[id="a-autoid-1"]',
    homeButton: 'a[id="nav-logo-sprites"]',
    
    // Search selectors
    searchField: 'input[id="twotabsearchtextbox"]',
    searchGlass: 'input[id="nav-search-submit-button"]',

    // Busket selectors
    basket: 'a[id="nav-cart"]',
    basketCount: 'span[id="nav-cart-count"]',

    // Carousel selectors
    carouselNext: 'a[class="a-carousel-goto-nextpage"]',
    carouselPrevious: 'a[class="a-carousel-goto-prevpage"]',

    // Search result selectors
    firstResult: 'span[data-component-type="s-product-image"]',
    addToBasket: 'input[id="add-to-cart-button"]',
    searchResultTitle: 'div[data-cy="title-recipe"]',

    // Address selectors
    addressDismiss: 'input[data-action-type="DISMISS"]',


    // good selected
    selectedGoods: 'span[id="productTitle"]',
};

export default landingSelectors;