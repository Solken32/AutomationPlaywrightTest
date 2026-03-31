import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async validateProduct(product: any) {
    await expect(this.page.locator('.inventory_item_name'))
      .toHaveText(product.name);

    await expect(this.page.locator('.inventory_item_desc'))
      .toHaveText(product.desc);

    await expect(this.page.locator('.inventory_item_price'))
      .toHaveText(product.price);
  }

  async checkout() {
    await this.page.click('text=Checkout');
  }

  async completeCheckout() {
    await this.page.fill('#first-name', 'Kenyo');
    await this.page.fill('#last-name', 'Solis');
    await this.page.fill('#postal-code', '17513');

    await this.page.click('text=Continue');
    await this.page.click('text=Finish');
  }

  async validateSuccess() {
    await expect(this.page.locator('h2.complete-header')).toBeVisible();
  }
}