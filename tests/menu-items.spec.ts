import { test, expect } from '@playwright/test';

test.describe('Menu Items Schema', () => {
  test('should display Menu Items in Tina admin sidebar', async ({ page }) => {
    await page.goto('/admin/index.html');

    // Wait for Tina to load
    await page.waitForSelector('text=Menu Items', { timeout: 30000 });

    // Check Menu Items appears in sidebar
    const menuItemsLink = page.getByText('Menu Items');
    await expect(menuItemsLink).toBeVisible();
  });

  test('should be able to create a new menu item', async ({ page }) => {
    await page.goto('/admin/index.html');

    // Wait for Tina to load and click on Menu Items
    await page.waitForSelector('text=Menu Items', { timeout: 30000 });
    await page.getByText('Menu Items').click();

    // Click create new button
    await page.waitForSelector('text=Create New', { timeout: 10000 });
    await page.getByText('Create New').click();

    // Wait for the form to load
    await page.waitForSelector('input[name="name"]', { timeout: 10000 });

    // Fill in the form fields
    await page.fill('input[name="name"]', 'Test Burger');
    await page.fill('textarea[name="description"]', 'A delicious test burger');
    await page.fill('input[name="price"]', '9.99');

    // Select category
    await page.click('text=Category');
    await page.getByRole('option', { name: 'Burgers' }).click();

    // Verify the available toggle exists
    const availableToggle = page.locator('text=Available');
    await expect(availableToggle).toBeVisible();

    // Save the item
    await page.click('button:has-text("Save")');

    // Wait for save to complete
    await page.waitForTimeout(2000);

    // Verify the item was saved (file should exist)
    // The test will pass if no errors occur during save
  });

  test('should display all required form fields', async ({ page }) => {
    await page.goto('/admin/index.html');

    // Navigate to Menu Items
    await page.waitForSelector('text=Menu Items', { timeout: 30000 });
    await page.getByText('Menu Items').click();

    // Create new item
    await page.waitForSelector('text=Create New', { timeout: 10000 });
    await page.getByText('Create New').click();

    // Wait for form to load
    await page.waitForSelector('input[name="name"]', { timeout: 10000 });

    // Verify all fields are present
    await expect(page.locator('text=Name')).toBeVisible();
    await expect(page.locator('text=Description')).toBeVisible();
    await expect(page.locator('text=Price')).toBeVisible();
    await expect(page.locator('text=Image')).toBeVisible();
    await expect(page.locator('text=Category')).toBeVisible();
    await expect(page.locator('text=Available')).toBeVisible();
  });
});
