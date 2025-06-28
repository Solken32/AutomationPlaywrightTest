import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wakamieventos.com/');
  await page.getByRole('link', { name: 'Inicio' }).click();
  await page.getByRole('link', { name: 'Nosotros' }).click();
  await page.getByRole('link', { name: 'Servicios' }).click();
  await page.getByRole('link', { name: 'Equipo' }).click();
  await page.getByRole('link', { name: 'Producto', exact: true }).click();
  await page.locator('div:nth-child(2) > .block2 > .block2-pic > .block2-btn').click();
  await page.locator('.btn-num-product-up').click();
  await page.locator('.btn-num-product-up').click();
  await page.getByRole('button', { name: 'Agregar al carrito' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('#bs-example-navbar-collapse-1 i').click();
  await page.getByRole('link', { name: 'Procesar pago' }).click();
});

