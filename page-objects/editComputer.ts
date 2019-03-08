import {browser, by, element} from 'protractor';

class EditComputer {
    deleteButton = element(by.css('input[value="Delete this computer"]'));
    saveButton = element(by.css('input[value="Save this computer"]'));

    clickOnDelete() {
        return this.deleteButton.click();
    }

    clickOnSave() {
        return this.saveButton.click();
    }
}

export const editComputerPage = new EditComputer();
