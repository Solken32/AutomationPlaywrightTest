import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  //if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot({ type: 'png' });
    await this.attach(screenshot, 'image/png');
  //}
  await this.close();
});