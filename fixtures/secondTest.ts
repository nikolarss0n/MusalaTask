
import * as fs from 'fs';
import { RequestLogger, Selector } from 'testcafe';
import { environment } from '././../envirnment';
import CompanyPage from './pom/companyPage';
import Helpers from './pom/helpers';

const helpers = new Helpers();
const companyPage = new CompanyPage();
const logger = RequestLogger('https://devexpress.github.io/testcafe/images/landing-page/banner-image.png', {
    logResponseBody: true
});


fixture`Fixture 2`
    .page`${environment.url}`
    .requestHooks(logger)
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    });

test(`Test Case 2`, async t => {
    helpers.acceptCookies();
    await t.navigateTo("https://www.musala.com/company/")
        .expect(helpers.getLocation()).contains('https://www.musala.com/company/')
        .expect(companyPage.companyMembers.exists).ok()
        .expect(companyPage.leadershipTitle.exists).ok()
        .click(companyPage.facebookIcon)

    const actualImageBuffer = new Uint8Array(<ArrayBuffer>logger.requests[0].response.body);
    const expectedImageBuffer = fs.readFileSync('C:\Projects\MusalaSoftTask\fixtures\data\musala.jpg');

    await t.expect(Buffer.compare(actualImageBuffer, expectedImageBuffer)).eql(0);
});