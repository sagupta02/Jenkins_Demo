import { addComputerPage } from "../page-objects/addComputer";
import { editComputerPage } from "../page-objects/editComputer";
import { homePage } from "../page-objects/homePage";

class BusinessFunctions {
    /**
     * @param {object} computerDetails
     * @param {string} computerDetails.name
     * @param {string} computerDetails.introducedDate
     * @param {string} computerDetails.discontinuedDate
     * @param {string} computerDetails.company 
     */
    addNewComputer(computerDetails) {
        homePage.clickOnAddNewComputerButton();
        addComputerPage.setComputerName(computerDetails.name);
        if(computerDetails.introducedDate)
            addComputerPage.setIntroducedDate(computerDetails.introducedDate);
        if(computerDetails.discontinuedDate)
            addComputerPage.setDiscontinuedDate(computerDetails.discontinuedDate);
        if(computerDetails.company)
            addComputerPage.selectCompany(computerDetails.company);
        addComputerPage.clickOnCreate();    
    }

    /**
     * 
     * @param {string} computerName 
     */
    openComputerDetails(computerName) {
        homePage.setComputerNameToFilter(computerName);
        homePage.clickOnFilterButton();
        homePage.clickOnComputerLink(computerName);            
    }

    /**
     * @param {object} computerDetails 
     */
    editComputerDetails(computerDetails) {
        if(computerDetails.name)
            addComputerPage.setComputerName(computerDetails.name);
        if(computerDetails.introducedDate)
            addComputerPage.setIntroducedDate(computerDetails.introducedDate);
        if(computerDetails.discontinuedDate)
            addComputerPage.setDiscontinuedDate(computerDetails.discontinuedDate);
        if(computerDetails.company)
            addComputerPage.selectCompany(computerDetails.company);
        editComputerPage.clickOnSave();        
    }

    /**
     * 
     * @param {string} computerName 
     */
    deleteComputer(computerName) {
        this.openComputerDetails(computerName);
        editComputerPage.clickOnDelete();            
    }

}

export const businessFunctions = new BusinessFunctions();