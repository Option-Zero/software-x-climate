import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
    const page = await context.newPage();

    await page.goto('http://localhost:3000/showcase');

    // Wait for the header text
    await page.waitForSelector('text=Software for Climate Final Projects');

    // Wait for cohort sections
    await page.waitForSelector('h2');

    // Wait for projects to load
    await page.waitForSelector('.bg-white.rounded-lg.shadow-lg', { timeout: 10000 });

    // Wait for images to load
    await page.waitForTimeout(3000);

    // Take full page screenshot
    await page.screenshot({
        path: './projects/showcase/showcase-updated.png',
        fullPage: true,
    });

    // eslint-disable-next-line no-console
    console.log('Screenshot saved to ./projects/showcase/showcase-updated.png');
    await browser.close();
})();
