import { homePage } from "../page-objects/homePage";

class Assertions {
async checkNotificationMessage(expectedMessage) {
    const actualMessage = await homePage.getAlertMessageText();

    expect(actualMessage).toEqual(expectedMessage);
}

async checkAppPageTitle() {
    const actualPageTitle = await homePage.getAppPageTitle();

    expect(actualPageTitle).toEqual('Computers database');
}
}
export const assertions = new Assertions();