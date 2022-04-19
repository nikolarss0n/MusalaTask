import { ClientFunction, Selector, t } from "testcafe";

export default class Helpers {
    getLocation = ClientFunction(() => document.location.href);
    acceptCookiesBtn = Selector('#wt-cli-accept-all-btn');

    acceptCookies = async () => {
        await t.click(this.acceptCookiesBtn)
    }
}