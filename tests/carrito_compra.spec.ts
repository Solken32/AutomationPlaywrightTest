import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';

test('funcionalidad carrito compras' , async({ page }) => {
    //1. Acceder a la pagina de compras
    await page.goto('https://www.saucedemo.com/');
    //2. Ingresar credenciales e iniciar sesión
    /* await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click(); */

    const adminUser = new LoginPage(page);
    await adminUser.fillUsername('standard_user');
    await adminUser.fillPassword('secret_sauce');
    await adminUser.clickLogin();

    // 3. Obtener data(producto) de forma random    
    const itemsContainer = await  page.locator('div.inventory_item').all();
    const ramdonIndex  = Math.floor(Math.random() * itemsContainer.length);
    const ramdonItem = itemsContainer[ramdonIndex];

    // Guardar data en variables
    const descriptionProduct = await ramdonItem.locator('div.inventory_item_desc').innerText();
    const nameProduct = await ramdonItem.locator('div.inventory_item_name').innerText();
    const priceProduct = await ramdonItem.locator('div.inventory_item_price').innerText();

    console.log(`Price : ${priceProduct}  Name: ${nameProduct} Description: ${descriptionProduct}`);

    // 4. interactuar con el boton del producto  
    await ramdonItem.getByRole('button', { name: 'Add to cart' }).click();

    // 5. Ir al carrito
    await page.locator('a.shopping_cart_link').click();
    
    await expect(page.getByRole('button', {name : 'Checkout'})).toBeVisible(); // confirmar que sea visible

    // info de carrito actual
    const nameActual= await page.locator('div.inventory_item_name').innerText();
    const descriptionActual= await page.locator('div.inventory_item_desc').innerText();
    const priceActual= await page.locator('div.inventory_item_price').innerText();

    // validamos data
    expect(nameActual).toEqual(nameProduct);
    expect(descriptionActual).toEqual(descriptionProduct);
    expect(priceActual).toEqual(priceProduct);

    // 5. Proceder al pago
    await page.getByRole('button', { name: 'Checkout'}).click();

    await page.locator('input#first-name').fill('Kenyo');
    await page.locator('input#last-name').fill('Solis');
    await page.locator('input#postal-code').fill('17513');

    await page.getByRole('button', {name: 'Continue'}).click();
    await page.getByRole('button', {name: 'Finish'}).click();

    await expect(page.locator('h2.complete-header')).toBeVisible();

    await page.pause();


})


test('Login' , async({ page }) => {
    //1. Acceder a la pagina de compras
    await page.goto('https://www.saucedemo.com/');
    //2. Ingresar credenciales e iniciar sesión

    const adminUser = new LoginPage(page);
    await adminUser.fillUsername('locked_out_user');
    await adminUser.fillPassword('secret_sauce');
    await adminUser.clickLogin();
    
    await page.pause();


})

test('Login option2' , async({ page }) => {
    //1. Acceder a la pagina de compras
    await page.goto('https://www.saucedemo.com/');
    //2. Ingresar credenciales e iniciar sesión
    const login = new LoginPage(page);
    await login.loginWhitCredentials('standard_user','secret_sauce')

    //3. confirmar que se hizo login
    await login.checkSuccessfullLogin();
    
    await page.pause();

})