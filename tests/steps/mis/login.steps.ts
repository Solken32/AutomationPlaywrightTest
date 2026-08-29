import { Given, When } from "@cucumber/cucumber";
import { CustomWorld } from "../../support/world";
import { MisLoginPage } from "../../pageobjects/mis/MisLoginPage";


Given("el usuario accede al mis" , async function(this: CustomWorld) { 
    const MisLogin = new MisLoginPage(this.page);
    await MisLogin.navigate();
    
    // Para Tomar Screnshot
    const screenshot = await this.page.screenshot({ type: 'png' });
    await this.attach(screenshot, 'image/png');
});

When("inicia sesion con el usuario {string} y la contrasena {string}", async function(this: CustomWorld, user , password){
    const MisLogin = new MisLoginPage(this.page);
    await MisLogin.loginCredentials(user,password)
});