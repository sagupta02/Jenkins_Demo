import {browser} from 'protractor';
import { businessFunctions } from "../business-functions/functions";
import { newComputerDetails, 
  updatedComputerDetails} from "../test-data/testData";
import { assertions } from "../business-functions/assertions"; 

describe('Computer Database App: User', function () {
  beforeAll(function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://computer-database.herokuapp.com/computers');
    browser.driver.manage().window().maximize();
  });

  it('should be able to access the application', async function () {
    assertions.checkAppPageTitle();
});
  
  it('should be able to add a new computer', async function () {
      businessFunctions.addNewComputer(newComputerDetails);
      // browser.sleep(3000);

      assertions.checkNotificationMessage(`Done! Computer ${newComputerDetails.name} has been created`);
  });

  it('should be able to edit details of computer', function () {
    businessFunctions.openComputerDetails(newComputerDetails.name);
    businessFunctions.editComputerDetails(updatedComputerDetails);
    // browser.sleep(3000);

    assertions.checkNotificationMessage(`Done! Computer ${updatedComputerDetails.name} has been updated`);
  });

  it('should be able to delete a computer', function () {
    businessFunctions.deleteComputer(updatedComputerDetails.name);

    assertions.checkNotificationMessage(`Done! Computer has been deleted`);
  });
});
