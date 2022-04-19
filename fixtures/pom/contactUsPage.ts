import { Selector, t } from "testcafe";

export default class ContactUsPage {
    name = Selector('#cf-1');
    email = Selector('#cf-2');
    subject = Selector('#cf-4');
    message = Selector('#cf-5');
    submitBtn = Selector('.btn-cf-submit');
    errorMesg = Selector('span').withText('The e-mail address entered is invalid.');

    fillContactUsForm = async (name: string, email: string, subject: string, message: string) => {
        await t.typeText(this.name, name)
            .typeText(this.email, email)
            .typeText(this.subject, subject)
            .typeText(this.message, message)
            .click(this.submitBtn);
    }
}