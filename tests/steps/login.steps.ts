import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pageobjects/LoginPage';


When('inicia sesión con usuario {string} y password {string}',async function (this: CustomWorld, user, pass) {
    const login = new LoginPage(this.page);
    await login.loginWithCredentials(user, pass);
});


Then('valida el resultado {string}', async function (this: CustomWorld, resultado: string) {
    const login = new LoginPage(this.page);

    if (resultado === 'success') {
      await login.validateSuccessfulLogin();
    } else if (resultado === 'error') {
      await login.validateErrorLogin();
    }
});