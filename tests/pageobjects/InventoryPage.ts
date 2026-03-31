import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addRandomProduct() {
    const items = await this.page.locator('div.inventory_item').all();
    const index = Math.floor(Math.random() * items.length);
    const item = items[index];

    const name = await item.locator('.inventory_item_name').innerText();
    const desc = await item.locator('.inventory_item_desc').innerText();
    const price = await item.locator('.inventory_item_price').innerText();

    await item.getByRole('button', { name: 'Add to cart' }).click();

    return { name, desc, price };
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}