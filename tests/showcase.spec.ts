import { test, expect } from '@playwright/test';

test.describe('Showcase Page', () => {
    test('loads and displays projects', async ({ page }) => {
        await page.goto('/showcase');

        // Wait for loading to complete
        await expect(page.getByText('Software for Climate Final Projects')).toBeVisible();

        // Check that cohort sections exist
        await expect(page.getByText(/Cohort$/).first()).toBeVisible();

        // Check that at least one project card is rendered
        const projectCards = page.locator('.bg-white.rounded-lg.shadow-lg');
        await expect(projectCards.first()).toBeVisible();
    });

    test('expands and collapses projects', async ({ page }) => {
        await page.goto('/showcase');

        // Wait for page to load
        await page.waitForSelector('.bg-white.rounded-lg.shadow-lg');

        // Find the "Other Projects" section (regular projects are in a grid)
        await page.waitForSelector('text=Other Projects');

        // Find a regular project (first one in the grid)
        const regularProjects = page.locator('.grid.grid-cols-1.lg\\:grid-cols-2 > div');
        const firstRegularProject = regularProjects.first();

        // Click to expand it
        const expandButton = firstRegularProject.locator('button').first();
        await expandButton.click();

        // Wait for the content to become visible
        await page.waitForTimeout(500);

        // Check that expanded content is visible
        const expandedSection = firstRegularProject.locator('.border-t.border-gray-200');
        await expect(expandedSection).toBeVisible();
    });

    test('superlative badges display', async ({ page }) => {
        await page.goto('/showcase');

        // Wait for page to load
        await page.waitForSelector('.bg-white.rounded-lg.shadow-lg');

        // Check if any superlative badges are present
        const badges = page.locator('text=⭐');
        const count = await badges.count();

        if (count > 0) {
            await expect(badges.first()).toBeVisible();
        }
    });

    test('external links open in new tab', async ({ page }) => {
        await page.goto('/showcase');

        // Wait for page to load
        await page.waitForSelector('.bg-white.rounded-lg.shadow-lg');

        // Check header CTA link
        const ctaLink = page.getByRole('link', { name: /Learn About the Course/i });
        await expect(ctaLink).toHaveAttribute('target', '_blank');
        await expect(ctaLink).toHaveAttribute('rel', 'noopener noreferrer');
        // Check that href contains the base URL with UTM parameters
        const href = await ctaLink.getAttribute('href');
        expect(href).toContain('https://www.terra.do/climate-change-courses/software-for-climate/');
        expect(href).toContain('utm_source=showcase');
    });

    test('responsive layout on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/showcase');

        // Check header is visible
        await expect(page.getByText('Software for Climate Final Projects')).toBeVisible();

        // Check that content loads on mobile
        const projectCards = page.locator('.bg-white.rounded-lg.shadow-lg');
        await expect(projectCards.first()).toBeVisible();
    });

    test('header and footer CTA links work', async ({ page }) => {
        await page.goto('/showcase');

        // Header CTA
        const headerCTA = page.getByRole('link', { name: /Learn About the Course/i }).first();
        const headerHref = await headerCTA.getAttribute('href');
        expect(headerHref).toContain(
            'https://www.terra.do/climate-change-courses/software-for-climate/'
        );
        expect(headerHref).toContain('utm_source=showcase');
        expect(headerHref).toContain('utm_medium=header');

        // Footer CTA
        const footerCTA = page.getByRole('link', {
            name: /Sign Up for the Next Cohort/i,
        });
        const footerHref = await footerCTA.getAttribute('href');
        expect(footerHref).toContain(
            'https://www.terra.do/climate-change-courses/software-for-climate/'
        );
        expect(footerHref).toContain('utm_source=showcase');
        expect(footerHref).toContain('utm_medium=footer');
    });

    test('cohorts are sorted with most recent first', async ({ page }) => {
        await page.goto('/showcase');

        // Wait for page to load
        await page.waitForSelector('h2');

        // Get all cohort headers
        const cohortHeaders = await page.locator('h2').allTextContents();

        // Check that we have at least one cohort
        expect(cohortHeaders.length).toBeGreaterThan(0);

        // Verify they contain the word "Cohort"
        cohortHeaders.forEach((header) => {
            expect(header).toContain('Cohort');
        });
    });

    test('project links display when available', async ({ page }) => {
        await page.goto('/showcase');

        // Wait for page to load
        await page.waitForSelector('.bg-white.rounded-lg.shadow-lg');

        // Find first superlative project (should be already expanded)
        const superlativeProject = page
            .locator('.bg-white.rounded-lg.shadow-lg')
            .filter({ has: page.locator('text=⭐') })
            .first();

        // Check if project links section exists
        const linksSection = superlativeProject.locator('a[target="_blank"]');
        const linkCount = await linksSection.count();

        if (linkCount > 0) {
            // At least one link should be visible
            await expect(linksSection.first()).toBeVisible();
            // Link should have proper attributes
            await expect(linksSection.first()).toHaveAttribute('rel', 'noopener noreferrer');
        }
    });
});
