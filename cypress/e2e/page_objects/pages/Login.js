import landingSelectors from "../selectors/landingSelectors";


class MainPage {

    // Main page visit
    visit() {
        cy.visit('/');
    }

    // Cookie accept
    // add choices as argument
    getCookieField() {
        return cy.get(landingSelectors.cookieField).click();
    }

    // address dismiss
    adressDismiss() {
        return cy.get(landingSelectors.addressDismiss).click();
    }

    // Search for any random stuff
    searchBar(goods) {
        return cy.get(landingSelectors.searchField).type(goods);
    }

    clickOnFirstGood() {
        return cy.get(landingSelectors.searchResultTitle).first().click();
    }

    // Search with a glass
    searchGlass() {
        return cy.get(landingSelectors.searchGlass).click();
    }

    // Basket opening
    basket() {
        return cy.get(landingSelectors.basket).click();
    }
    
    // Return to the main page
    returnToHome() {
        return cy.get(landingSelectors.homeButton).click();
    }

}

module.exports = new MainPage()