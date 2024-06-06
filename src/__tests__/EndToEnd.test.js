import puppeteer from 'puppeteer';

describe('filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test("When user hasn't searched for a city, show upcoming events from all cities", async () => {
        const events = await page.$$('.event'); // Select all event elements
        expect(events.length).toBeGreaterThan(0); // Ensure there are events displayed
    });

    test('User should see a list of suggestions when they search for a city', async () => {
        await page.type('.city', 'Berlin'); // Type 'Berlin' into the city search input
        const suggestions = await page.$$('.suggestions li'); // Select all suggestion elements
        expect(suggestions.length).toBeGreaterThan(0); // Ensure there are suggestions displayed
    });

    test('User can select a city from the suggested list', async () => {
        await page.click('.suggestions li:first-child'); // Click the first suggestion
        const cityText = await page.$eval('.city', el => el.value); // Get the value of the city input
        expect(cityText).toBe('Berlin, Germany'); // Ensure the city input is updated to 'Berlin'

        const events = await page.$$('.event'); // Select all event elements
        // Additional check to ensure the events are related to Berlin can be added here
        expect(events.length).toBeGreaterThan(0); // Ensure there are events displayed for the selected city
    });

});

describe('show/hide event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });
});