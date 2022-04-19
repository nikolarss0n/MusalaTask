
import * as fs from 'fs';
import { environment } from '././../envirnment';
import CompanyPage from './pom/companyPage';
import Helpers from './pom/helpers';

const helpers = new Helpers();
const companyPage = new CompanyPage();

fixture`Fixture 2`
    .page`${environment.url}`
    .requestHooks(helpers.logger)
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

    const actualImageBuffer = new Uint8Array(<ArrayBuffer>helpers.logger.requests[0].response.body);
    const expectedImageBuffer = fs.readFileSync('C:\Projects\MusalaSoftTask\fixtures\data\musala.jpg');

    await t.expect(Buffer.compare(actualImageBuffer, expectedImageBuffer)).eql(0);
});