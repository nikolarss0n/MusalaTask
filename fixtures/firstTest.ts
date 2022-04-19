
import * as fs from 'fs';
import { ClientFunction, RequestLogger, Selector } from 'testcafe';
import { dataEmails } from '././data/data';
import { environment } from '././../envirnment';
import ContactUsPage from './pom/contactUsPage';
import CompanyPage from './pom/companyPage';


const contactUsPage = new ContactUsPage();
const companyPage = new CompanyPage();

fixture`Fixture`
    .page`${environment.url}`
    .beforeEach(async (t) => {
        await t.maximizeWindow();
        await t.wait(5000)
    });

dataEmails.arrEmails.forEach(data => {
    test
        (`Test Case 1: ${data.email}`, async t => {
            const name = 'Test Name';
            const email = data.email;
            const subject = 'Test Subject';
            const message = 'Test Message';

            contactUsPage.fillContactUsForm(name, email, subject, message);
            await t.expect(contactUsPage.errorMesg.exists).ok();
        });
})