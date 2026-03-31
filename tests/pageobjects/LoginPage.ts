import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

  private readonly page: Page;
  private readonly usernameTextbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly loginButton: Locator;
  private readonly shoppingCartIcon: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameTextbox = page.getByRole('textbox', { name: 'Username' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.shoppingCartIcon = page.locator('.shopping_cart_link');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async loginWithCredentials(username: string, password: string) {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }

  async validateSuccessfulLogin() {
    await expect(this.shoppingCartIcon).toBeVisible();
  }

  async validateErrorLogin() {
    await expect(this.errorMessage).toBeVisible();
  }
}