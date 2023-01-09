import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `Filters`// declare the fixture
    .page `https://dev.fw-dts.vercel.app/`;

const scroll = ClientFunction(( behavior?: ScrollBehavior, top?:number, bottom?:number) => {
    window.scroll({
        top,
        behavior
    });
});

const mattressLink = Selector('span').withText('Mattresses & bases')
const mattressLinkChild = Selector('span').withExactText('Mattresses')
const sizeFilter = Selector('button').withText('Size')
const sizeFilterLabel = Selector('label').withText('King')
const brandFilter = Selector('button').withText('Brand')
const brandFilterLabel = Selector('label').withText('Sealy')
const rangeFilter = Selector('button').withText('Range')
const rangeFilterLabel = Selector('label').withText('Qantas')
const collectionFilter = Selector('button').withText('Collection')
const collectionFilterLabel = Selector('label').withText('Aspen Ultra Firm')
const categoryNameFilter = Selector('button').withText('Category Name')
const categoryNameFilterLabel = Selector('label').withText('BEDDING')
const sortFilter = Selector('div').withExactText('Sort:Recommended')
const sortFilterLabel = Selector('#react-select-2-option-4')
const changeBackdrop = ClientFunction(() => {
    const backdrop = document.querySelector('.backdrop');
    backdrop?.classList.remove('backdrop')
});

//then create a test and place your code there
test('Filters test', async t => {
    await t.maximizeWindow()
    await t.click(mattressLink)
    await t.click(mattressLinkChild)
    await changeBackdrop()
    // await t.setTestSpeed(0.5)
    await t.click(sortFilter).click(sortFilterLabel)
    await t.click(sizeFilter).click(sizeFilterLabel)
    await t.click(brandFilter).click(brandFilterLabel)
    await t.click(rangeFilter).click(rangeFilterLabel)
    await t.click(collectionFilter).click(collectionFilterLabel)
    await t.click(categoryNameFilter).click(categoryNameFilterLabel)    
    await scroll('smooth', 5997)
    await t.wait(10000);
    await t.takeScreenshot({
        path: 'filters.png',
        fullPage: true,
    })
});