import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `Checkout`// declare the fixture
    .page `https://dev.fw-dts.vercel.app/`;

const scroll = ClientFunction(( behavior?: ScrollBehavior, top?:number, bottom?:number) => {
    window.scroll({
        top,
        behavior
    });
});

const location = Selector('button').withText('Your store')
const postCodeInput = Selector('input').withAttribute('name', 'address')
const postCodeOption = Selector('.pac-container')
const a = Selector('.pac-item')
const firstPostCode = postCodeOption.find('span')
const saveBtn = Selector('button').withText('Save')
const mattressLink = Selector('span').withText('Mattresses & bases')
const mattressLinkChild = Selector('span').withExactText('Mattresses')
const mattressFirstProduct = Selector('a').withAttribute('title', 'Crown Posture Bedding , Mattresses, Plush')
const addToCartBtn = Selector('span').withText(/Add/i)

const shoppingCartBtn = Selector('.cart_menu-toggle')
const viewCheckoutBtn = Selector('button').withText('View & checkout')
const checkoutBtn = Selector('a').withText('Continue to checkout')
const emailInput = Selector('input').withAttribute('name', 'email')
const continueBtn = Selector('button').withText('Continue')
const guestUser = Selector('button').withText('No thanks, checkout as guest')
const firstNameInput = Selector('input').withAttribute('name', 'firstName')
const lastNameInput = Selector('input').withAttribute('name', 'lastName')
const mobileNoInput = Selector('input').withAttribute('name', 'mobileNumber')
const continueToDeliveryBtn = Selector('button').withText('Continue to delivery')
const streetAddressInput = Selector('input').withAttribute('name', 'address')
const optionList = Selector('.af_list')
const firstOption = optionList.find('li')
const continueToPaymentBtn = Selector('button').withText('Continue to payment')
// const ccNo = Selector('input').withAttribute('placeholder', '1234 5678 9012 3456')



const changeBackdrop = ClientFunction(() => {
    const backdrop = document.querySelector('.backdrop');
    backdrop?.classList.remove('backdrop')
});

const hideElement = ClientFunction(() => {
    // const ip = document.querySelector<HTMLElement>('.pac-container')
    // const el = document.getElementById('headlessui-dialog-overlay-:r3:')
    // el!.style.display = 'none'
    // console.log({ip})
    // if(ip){
    //     console.log(ip.innerText)
    // }
    const test = document.getElementById('address')?.focus()
    console.log(test)
})
//then create a test and place your code there
test('Checkout test', async t => {
    await t.maximizeWindow()
    await t.click(location)
    await t.typeText(postCodeInput, 'Melbourne VIC 3000, Australia').hover(postCodeOption).dispatchEvent(a, 'click')
//     const manualClick = ClientFunction((selector) => {
//         const element = document.querySelector(selector);
//         console.log(element)
//         element.mo
//       })
//    await manualClick(
//         ".pac-container"
//       );
    // await t.click(postCodeOption)
    await hideElement()
    // await t.click(firstPostCode.withText('3000'))
    await t.debug()
    await t.click(saveBtn)
    await t.debug()
    await t.click(mattressLink)
    await t.click(mattressLinkChild)
    await changeBackdrop()
    await t.click(mattressFirstProduct)
    await t.click(addToCartBtn)
    await t.click(shoppingCartBtn)
    await t.click(viewCheckoutBtn)
    await t.click(checkoutBtn)
    await t.typeText(emailInput, 'test@gmail.com')
    await t.click(continueBtn)
    await t.click(guestUser)
    await t.typeText(firstNameInput, 'test')
    await t.typeText(lastNameInput, 'user')
    await t.typeText(mobileNoInput, '0701762964')
    await t.click(continueToDeliveryBtn)
    await t.typeText(streetAddressInput, '2162 Aarons Pass Road, AARONS PASS NSW 2850').click(firstOption)
    await t.click(continueToPaymentBtn)
    // await t.typeText(ccNo, '4293 1891 0000 0008')
    // await t.wait(10000)
    await t.debug()
    // await scroll('smooth', 5997)
    // await t.wait(10000)
    // await t.takeScreenshot({
    //     path: 'checkout.png',
    //     fullPage: true,
    // })
});