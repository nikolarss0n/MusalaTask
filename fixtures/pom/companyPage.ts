import { Selector } from "testcafe";

export default class CompanyPage {
    companyMembers = Selector('.company-members')
    leadershipTitle = Selector('h2').withText('Leadership')
    facebookIcon = Selector('[href="https://www.facebook.com/MusalaSoft?fref=ts"]')
}

