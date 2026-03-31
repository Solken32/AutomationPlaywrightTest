# 🧪 Automatización E2E con Cucumber + Playwright + TypeScript

Proyecto de pruebas automatizadas End-to-End (E2E) usando **Cucumber (BDD)**, **Playwright** y **TypeScript**, aplicando el patrón **Page Object Model (POM)**.

---

## Tecnologías

* Playwright
* Cucumber
* TypeScript
* Node.js

---

## Prerrequisitos

Instalar previamente:

* Node.js (v16 o superior)
* npm

Verificar instalación:

```bash
node -v
npm -v
```

---

##  Instalación

### 1. Clonar repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar navegadores de Playwright

```bash
npx playwright install
```

---

## Cómo ejecutar los tests

Ejecutar todos los tests:

```bash
npm run cucumber
```

---

## Reportes

Los reportes se generan automáticamente según la configuración definida en:

```
tests/support/report.js
```

---

## 🧠 Patrón de diseño: Page Object Model (POM)

Este proyecto utiliza **Page Object Model (POM)** para:

* Separar lógica de UI de los tests
* Reutilizar código
* Mejorar mantenibilidad
* Hacer los tests más legibles

### Ejemplo

* `LoginPage.ts` contiene:

  * `login()`
  * `validateSuccessfulLogin()`
  * `validateErrorLogin()`

Los steps solo consumen estos métodos.

---

## Estructura de pruebas

### Features (Gherkin)

```gherkin
Feature: Login de usuario

  Scenario Outline: Validación de login
    Given que el usuario accede a la tienda
    When inicia sesión con usuario "<user>" y password "<pass>"
    Then valida el resultado "<resultado>"

    Examples:
      | user            | pass          | resultado |
      | standard_user   | secret_sauce | success   |
      | locked_out_user | secret_sauce | error     |
```

---

###  Steps

Conectan Gherkin con la lógica del test:

```ts
Then('valida el resultado {string}', async function (resultado) {
  const login = new LoginPage(this.page);

  if (resultado === 'success') {
    await login.validateSuccessfulLogin();
  } else {
    await login.validateErrorLogin();
  }
});
```

---

### Page Objects

Encapsulan:

* Selectores
* Acciones
* Validaciones

---

### Support

Configuración global:

* hooks (before/after)
* world (contexto compartido)
* reportes

---

##  Buenas prácticas

* Uso de Scenario Outline
* Separación de responsabilidades
* Implementación de POM

---

##  Comandos útiles

```bash
# Ejecutar tests
npm run cucumber

# Instalar navegadores
npx playwright install

# Reinstalar dependencias
rm -rf node_modules
npm install
```

---

