import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `Home Page`// declare the fixture
    .page `https://dev.fw-dts.vercel.app/`

const scroll = ClientFunction(( behavior?: ScrollBehavior, top?:number, bottom?:number) => {
    window.scroll({
        top,
        behavior
    });
});

//then create a test and place your code there
test('home page test', async t => {
    await t.maximizeWindow()
    await scroll('smooth', 5997)
    await t.wait(5000);
    await t.takeScreenshot({
        path: 'homepage.png',
        fullPage: true,
    })
});