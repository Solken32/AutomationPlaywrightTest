import { Locator, Page } from "@playwright/test";


export class MisLoginPage{
    
    private readonly page: Page
    private usernameText : Locator;
    private passwordText : Locator;
    private loginButton : Locator;

    constructor(page: Page){
        this.page = page
        this.usernameText = page.locator('input[name="user_acceso"]');
        this.passwordText = page.locator('input[name="clave_acceso"]');
        this.loginButton = page.locator('img[id="IMG1"]');
    }

    async navigate(){
        await this.page.goto('https://qa-server.punto-web.com/MIS/acceso.asp');
    }

    async loginCredentials(username: string , password : string){
        await this.usernameText.fill(username);
        await this.passwordText.fill(password);
        await this.loginButton.click();

    }
}