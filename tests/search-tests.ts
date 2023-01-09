import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `Search`// declare the fixture
    .page `http://localhost:3000/`;

const scroll = ClientFunction(( behavior?: ScrollBehavior, top?:number, bottom?:number) => {
    window.scroll({
        top,
        behavior
    });
});

const searchInput = Selector('.searchbox > form > input')
const typeInput = Selector('#modalInputSearch')


const setStyleAttribute = ClientFunction((selector, styleValue) => {
    const element = selector();
    element.setAttribute('style', styleValue);
});
const viewAllResults = Selector('button').withText('View all results')
// #headlessui-dialog-panel-\:r4\: > div > div > input
//then create a test and place your code there
test('Search test', async t => {
    await t.maximizeWindow()
    // await t.setTestSpeed(0.1)

    await t.click(searchInput)
    // await setStyleAttribute(typeInput,'display: none;')
    await t.typeText(typeInput, 'bed')
    await t.wait(5000)
    await t.debug()

    await t.expect(Selector('h5').withText('Suggestions').visible).ok()
    await t.debug()

    await t.click(viewAllResults)
    // await t.debug()

    // await scroll('smooth', 5997)
    // await t.wait(5000);
    // await t.takeScreenshot({
    //     path: 'homepage.png',
    //     fullPage: true,
    // })
});