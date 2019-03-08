import { element, by, browser } from "protractor";

class HomePage {
        addComputerButton = element(by.id('add'));
        filterByNameButton = element(by.css('input#searchsubmit'));
        searchField = element(by.css('input#searchbox'));

    clickOnAddNewComputerButton() {
        return this.addComputerButton.click();
    }

    clickOnFilterButton() {
        return this.filterByNameButton.click();
    }

    /**
     * @param {string} computerName 
     */
    setComputerNameToFilter(computerName) {
     this.searchField.clear();
     return this.searchField.sendKeys(computerName);
    }

    getAppPageTitle() {
        return browser.getTitle();
    }

    /**
     * @param {string} computerName 
     */
    clickOnComputerLink(computerName) {
        return element(by.linkText(computerName)).click();
    }

    getAlertMessageText() {
        return element(by.css('div.alert-message.warning')).getText();
    }
}

export const homePage = new HomePage();