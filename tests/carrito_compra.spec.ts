import { test, expect } from '@playwright/test';

test('funcionalidad carrito compras' , async({ page }) => {
    //1. Acceder a la pagina de compras
    await page.goto('https://www.saucedemo.com/');
    //2. Ingresar credenciales e iniciar sesión
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

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
    
    expect(page.getByRole('button', {name : 'Checkout'})).toBeVisible(); // confirmar que sea visible

    // info de carrito actual
    const nameActual= await page.locator('div.inventory_item_name').innerText();
    const descriptionActual= await page.locator('div.inventory_item_desc').innerText();
    const priceActual= await page.locator('div.inventory_item_price').innerText();

    // validamos data
    expect(nameActual).toEqual(nameProduct);
    expect(descriptionActual).toEqual(descriptionProduct);
    expect(priceActual).toEqual(priceProduct);

    await page.pause();


})