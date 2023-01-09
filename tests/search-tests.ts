import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `Search`// declare the fixture
    .page `https://dev.fw-dts.vercel.app/`;

const scroll = ClientFunction(( behavior?: ScrollBehavior, top?:number, bottom?:number) => {
    window.scroll({
        top,
        behavior
    });
});

const searchInput = Selector('.searchbox > form > input')
const typeInput = Selector('#headlessui-portal-root > div > div > div > div > div > div > input')

const viewAllResults = Selector('button').withText('View all results')

//then create a test and place your code there
test('Search test', async t => {
    await t.maximizeWindow()
    await t.setTestSpeed(0.5)
    await t.click(searchInput)
    await t.typeText(typeInput, 'bed')
    await t.wait(5000)
    await t.click(viewAllResults)
    await t.wait(5000);
    await t.takeScreenshot({
        path: 'search.png',
        fullPage: true,
    })
});