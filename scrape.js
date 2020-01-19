const puppeteer = require("puppeteer-core");
const { getChrome } = require("./getChrome");



const scrape = async () => {
    const chrome = await getChrome();
    const browser = await puppeteer.connect({
      browserWSEndpoint: chrome.endpoint,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();

    await page.goto('https://www.meetup.com', { timeout: 0 });

    //logic to add username and password

    //navigate to cbf events page

    // get rss feed

}

module.exports = {
    scrape
}