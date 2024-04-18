const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://ability-site-4046-dev-ed.scratch.lightning.force.com/lightning/r/Asset/02iHy000004JX48IAG/view');

    await page.type('#username', 'test-aurx9g4wptrc@example.com');
    await page.type('#password', ']6gAutqpkiygt');
    await page.click('#Login');

    await page.waitForNavigation();

    await page.goto('https://ability-site-4046-dev-ed.scratch.lightning.force.com/lightning/r/Asset/02iHy000004JX48IAG/view');

    // Example: Clicking a button inside LWC
    const button =await page.waitForSelector('::-p-xpath(//button[@class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-border"])');
    
    button.click();
    await page.waitForSelector('::-p-xpath(//div[@class="dropdown-content visible"])');

    console.log('Element Text:', button);

    await browser.close();
})();