import { ClientFunction, RequestLogger, Selector, t } from "testcafe";

export default class Helpers {
    getLocation = ClientFunction(() => document.location.href);
    acceptCookiesBtn = Selector('#wt-cli-accept-all-btn');
    logger = RequestLogger('https://devexpress.github.io/testcafe/images/landing-page/banner-image.png', {
        logResponseBody: true
    });

    acceptCookies = async () => {
        await t.click(this.acceptCookiesBtn)
    }
}