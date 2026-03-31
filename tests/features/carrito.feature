@CA-02

Feature: Carrito de compras

  Scenario: Comprar un producto correctamente
    Given que el usuario accede a la tienda
    When inicia sesión con usuario "standard_user" y password "secret_sauce"
    And agrega un producto aleatorio al carrito
    And va al carrito
    Then el producto agregado debe ser correcto
    When completa el checkout
    Then la compra se realiza exitosamente



    