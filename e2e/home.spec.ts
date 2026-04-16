import { test, expect } from '@playwright/test';

test.describe('home page', () => {
  test('renders hero and primary nav', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Mahanyas Baira/i);
    await expect(page.getByRole('link', { name: /contact/i }).first()).toBeVisible();
  });

  test('theme toggle switches html class', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: /toggle theme/i });
    await toggle.click();
    const htmlClass = await page.locator('html').getAttribute('class');
    expect(htmlClass).toMatch(/dark|light/);
  });

  test('certification filter pills are interactive', async ({ page }) => {
    await page.goto('/');
    await page.locator('#certifications').scrollIntoViewIfNeeded();
    const cloudPill = page.getByRole('button', { name: 'Cloud' });
    await expect(cloudPill).toBeVisible();
    await cloudPill.click();
  });
});
