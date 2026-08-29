import { IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page, chromium } from '@playwright/test';

export class CustomWorld {
  browser!: Browser;
  page!: Page;
  attach: any;

  constructor(options: IWorldOptions) {
    this.attach = options.attach;
  }

  async init() {
    this.browser = await chromium.launch({ headless: false, slowMo: 500 });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);