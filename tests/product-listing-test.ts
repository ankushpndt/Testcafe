import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `ProductListing`// declare the fixture
    .page `https://dev.fw-dts.vercel.app/`;

const scroll = ClientFunction(( behavior?: ScrollBehavior, top?:number, bottom?:number) => {
    window.scroll({
        top,
        behavior
    });
});

const mattressLink = Selector('span').withText('Mattresses & bases')
const mattressLinkChild = Selector('span').withExactText('Mattresses')

const changeBackdrop = ClientFunction(() => {
    const backdrop = document.querySelector('.backdrop');
    backdrop?.classList.remove('backdrop')
});

//then create a test and place your code there
test('ProductListing test', async t => {
    await t.maximizeWindow()
    await t.click(mattressLink)
    await t.click(mattressLinkChild)
    await changeBackdrop()
    await scroll('smooth', 5997)
    await t.wait(10000);
    await t.takeScreenshot({
        path: 'productListing.png',
        fullPage: true,
    })
});