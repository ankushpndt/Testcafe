import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `SignUp`// declare the fixture
    .page `https://dev.fw-dts.vercel.app/`;

const scroll = ClientFunction(( behavior?: ScrollBehavior, top?:number, bottom?:number) => {
    window.scroll({
        top,
        behavior
    });
});

const userIcon = Selector('.nav_wrapper > div > div > div > div')
const signUpLink = Selector('a').withAttribute('href', '/register')
const firstNameInput = Selector('input').withAttribute('name', 'firstName')
const lastNameInput = Selector('input').withAttribute('name', 'lastName')
const emailInput = Selector('input').withAttribute('name', 'email')
const mobileNumberInput = Selector('input').withAttribute('name', 'mobileNumber')
const passwordInput = Selector('input').withAttribute('name', 'password')
const passwordConfirmationInput = Selector('input').withAttribute('name', 'reEnterPassword')
const checkboxBtn = Selector('input').withAttribute('name', 'isEmailEnabled')
const createAnAccountButton = Selector('button').withText('Create an account')
const signInBtn = Selector('button').withText('Sign in')
const logoutLogo = Selector('.nav_wrapper > div > div > div > a > div').withText('AS')
const logoutBtn = Selector('button > div > span').withText('Sign out')

//then create a test and place your code there
test('SignUp test', async t => {
    await t.maximizeWindow()
    await t.click(userIcon)
    .click(signUpLink)
    .typeText(firstNameInput, 'Test')
    .typeText(lastNameInput, 'User')
    .typeText(emailInput, 'test3@gmail.com')
    .typeText(mobileNumberInput, '0933726111')
    .typeText(passwordInput, 'Testuser@123')
    .typeText(passwordConfirmationInput, 'Testuser@123')
    .click(checkboxBtn)
    .click(createAnAccountButton)
    await t.wait(5000)
    await t.takeScreenshot({
        path: 'signup.png',
        fullPage: true,
    })
    // await t.click(logoutLogo).wait(5000)
    // await t.click(logoutBtn)
});