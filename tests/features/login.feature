@CA-01

Feature: Login de usuario
  @login
  Scenario Outline: Validación de login
    Given que el usuario accede a la tienda
    When inicia sesión con usuario "<user>" y password "<pass>"
    Then valida el resultado "<resultado>"

  Examples:
    | user            | pass          | resultado |
    | standard_user   | secret_sauce | success   |
    | locked_out_user | secret_sauce | error     |