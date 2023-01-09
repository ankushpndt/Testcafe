import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `SignIn`// declare the fixture
    .page `https://dev.fw-dts.vercel.app/`;

const scroll = ClientFunction(( behavior?: ScrollBehavior, top?:number, bottom?:number) => {
    window.scroll({
        top,
        behavior
    });
});

const signInIcon = Selector('.nav_wrapper > div > div > div > div')
const emailInput = Selector('input').withAttribute('name', 'userName')
const passwordInput = Selector('input').withAttribute('name', 'password')
const signInBtn = Selector('button').withText('Sign in')
const logoutLogo = Selector('.nav_wrapper > div > div > div > a > div').withText('AS')
const logoutBtn = Selector('button > div > span').withText('Sign out')

//then create a test and place your code there
test('SignIn test', async t => {
    await t.maximizeWindow()
    await t.click(signInIcon).typeText(emailInput, 'ankushpndt@gmail.com').typeText(passwordInput, 'Ankush@9').click(signInBtn)
    await t.wait(5000)
    await t.takeScreenshot({
        path: 'signin.png',
        fullPage: true,
    })
    await t.click(logoutLogo).wait(5000)
    await t.click(logoutBtn)
});