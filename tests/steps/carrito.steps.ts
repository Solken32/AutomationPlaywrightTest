import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { InventoryPage } from '../pageobjects/InventoryPage';
import { CartPage } from '../pageobjects/CartPage';
import { LoginPage } from '../pageobjects/LoginPage';

let product: any;

Given('que el usuario accede a la tienda', async function (this: CustomWorld) {
  const login = new LoginPage(this.page);
  await login.navigate();
});

When('agrega un producto aleatorio al carrito', async function (this: CustomWorld) {
  const inventory = new InventoryPage(this.page);
  product = await inventory.addRandomProduct();
});

When('va al carrito', async function (this: CustomWorld) {
  const inventory = new InventoryPage(this.page);
  await inventory.goToCart();
});

Then('el producto agregado debe ser correcto', async function (this: CustomWorld) {
  const cart = new CartPage(this.page);
  await cart.validateProduct(product);
});

When('completa el checkout', async function (this: CustomWorld) {
  const cart = new CartPage(this.page);
  await cart.checkout();
  await cart.completeCheckout();
});

Then('la compra se realiza exitosamente', async function (this: CustomWorld) {
  const cart = new CartPage(this.page);
  await cart.validateSuccess();
});