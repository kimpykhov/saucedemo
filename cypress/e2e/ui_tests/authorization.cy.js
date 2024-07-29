const loginPage = require('../page_objects/pages/Login')
const harryPotterNames = require('harrypotter-names');

describe('e2e Amazon testing', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
    });
    
    it('e2e', () => {
      loginPage.visit();
      cy.url().should('include', 'amazon');

      loginPage.getCookieField();
      cy.get('input[name="accept"]').should('not.exist');

      loginPage.adressDismiss();
      cy.get('input[data-action-type="DISMISS"]').should('not.exist');

      const searchGood = harryPotterNames.random();
      loginPage.searchBar(searchGood);

      loginPage.searchGlass();
      // cy.get(loginPage.firstResult).should('be.visible');

      loginPage.clickOnFirstGood();

      loginPage.basket();
      cy.get(loginPage.basketCount).invoke('text').should('match', /^[1-9][0-9]*$/);
    })
  })