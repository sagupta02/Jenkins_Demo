import {element, by } from 'protractor';

class AddComputer {
        nameField = element(by.css('input[id="name"]'));
        introducedDateField = element(by.css('input[name="introduced"]'));
        discontinuedDateField = element(by.css('input[name="discontinued"]'));
        companyDropDown = element(by.id('company'));
        createButton = element(by.css('input[value="Create this computer"]'));
        cancelButton = element(by.linkText('Cancel'));

    clickOnCreate() {
        return this.createButton.click();
    }
    clickOnCancel() {
        return this.cancelButton.click();
    }
    setComputerName(computerName) {
        this.nameField.clear();
        return this.nameField.sendKeys(computerName);
    }
    setIntroducedDate(introducedDate) {
        this.introducedDateField.clear();
        return this.introducedDateField.sendKeys(introducedDate);
    }
    setDiscontinuedDate(discontinuedDate) {
        this.discontinuedDateField.clear();
        return this.discontinuedDateField.sendKeys(discontinuedDate);
    }
    selectCompany(company) {
        return element(by.cssContainingText('option', company)).click();
    }
}

export const addComputerPage = new AddComputer();